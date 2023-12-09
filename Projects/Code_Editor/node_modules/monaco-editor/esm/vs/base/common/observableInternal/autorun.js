/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { assertFn } from '../assert.js';
import { DisposableStore, markAsDisposed, toDisposable, trackDisposable } from '../lifecycle.js';
import { getFunctionName } from './base.js';
import { getLogger } from './logging.js';
export function autorunOpts(options, fn) {
    return new AutorunObserver(options.debugName, fn, undefined, undefined);
}
export function autorun(fn) {
    return new AutorunObserver(undefined, fn, undefined, undefined);
}
export function autorunHandleChanges(options, fn) {
    return new AutorunObserver(options.debugName, fn, options.createEmptyChangeSummary, options.handleChange);
}
export function autorunWithStore(fn) {
    const store = new DisposableStore();
    const disposable = autorunOpts({
        debugName: () => getFunctionName(fn) || '(anonymous)',
    }, reader => {
        store.clear();
        fn(reader, store);
    });
    return toDisposable(() => {
        disposable.dispose();
        store.dispose();
    });
}
export class AutorunObserver {
    get debugName() {
        if (typeof this._debugName === 'string') {
            return this._debugName;
        }
        if (typeof this._debugName === 'function') {
            const name = this._debugName();
            if (name !== undefined) {
                return name;
            }
        }
        const name = getFunctionName(this._runFn);
        if (name !== undefined) {
            return name;
        }
        return '(anonymous)';
    }
    constructor(_debugName, _runFn, createChangeSummary, _handleChange) {
        var _a, _b;
        this._debugName = _debugName;
        this._runFn = _runFn;
        this.createChangeSummary = createChangeSummary;
        this._handleChange = _handleChange;
        this.state = 2 /* AutorunState.stale */;
        this.updateCount = 0;
        this.disposed = false;
        this.dependencies = new Set();
        this.dependenciesToBeRemoved = new Set();
        this.changeSummary = (_a = this.createChangeSummary) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = getLogger()) === null || _b === void 0 ? void 0 : _b.handleAutorunCreated(this);
        this._runIfNeeded();
        trackDisposable(this);
    }
    dispose() {
        this.disposed = true;
        for (const o of this.dependencies) {
            o.removeObserver(this);
        }
        this.dependencies.clear();
        markAsDisposed(this);
    }
    _runIfNeeded() {
        var _a, _b, _c;
        if (this.state === 3 /* AutorunState.upToDate */) {
            return;
        }
        const emptySet = this.dependenciesToBeRemoved;
        this.dependenciesToBeRemoved = this.dependencies;
        this.dependencies = emptySet;
        this.state = 3 /* AutorunState.upToDate */;
        try {
            if (!this.disposed) {
                (_a = getLogger()) === null || _a === void 0 ? void 0 : _a.handleAutorunTriggered(this);
                const changeSummary = this.changeSummary;
                this.changeSummary = (_b = this.createChangeSummary) === null || _b === void 0 ? void 0 : _b.call(this);
                this._runFn(this, changeSummary);
            }
        }
        finally {
            (_c = getLogger()) === null || _c === void 0 ? void 0 : _c.handleAutorunFinished(this);
            // We don't want our observed observables to think that they are (not even temporarily) not being observed.
            // Thus, we only unsubscribe from observables that are definitely not read anymore.
            for (const o of this.dependenciesToBeRemoved) {
                o.removeObserver(this);
            }
            this.dependenciesToBeRemoved.clear();
        }
    }
    toString() {
        return `Autorun<${this.debugName}>`;
    }
    // IObserver implementation
    beginUpdate() {
        if (this.state === 3 /* AutorunState.upToDate */) {
            this.state = 1 /* AutorunState.dependenciesMightHaveChanged */;
        }
        this.updateCount++;
    }
    endUpdate() {
        if (this.updateCount === 1) {
            do {
                if (this.state === 1 /* AutorunState.dependenciesMightHaveChanged */) {
                    this.state = 3 /* AutorunState.upToDate */;
                    for (const d of this.dependencies) {
                        d.reportChanges();
                        if (this.state === 2 /* AutorunState.stale */) {
                            // The other dependencies will refresh on demand
                            break;
                        }
                    }
                }
                this._runIfNeeded();
            } while (this.state !== 3 /* AutorunState.upToDate */);
        }
        this.updateCount--;
        assertFn(() => this.updateCount >= 0);
    }
    handlePossibleChange(observable) {
        if (this.state === 3 /* AutorunState.upToDate */ && this.dependencies.has(observable) && !this.dependenciesToBeRemoved.has(observable)) {
            this.state = 1 /* AutorunState.dependenciesMightHaveChanged */;
        }
    }
    handleChange(observable, change) {
        if (this.dependencies.has(observable) && !this.dependenciesToBeRemoved.has(observable)) {
            const shouldReact = this._handleChange ? this._handleChange({
                changedObservable: observable,
                change,
                didChange: o => o === observable,
            }, this.changeSummary) : true;
            if (shouldReact) {
                this.state = 2 /* AutorunState.stale */;
            }
        }
    }
    // IReader implementation
    readObservable(observable) {
        // In case the run action disposes the autorun
        if (this.disposed) {
            return observable.get();
        }
        observable.addObserver(this);
        const value = observable.get();
        this.dependencies.add(observable);
        this.dependenciesToBeRemoved.delete(observable);
        return value;
    }
}
(function (autorun) {
    autorun.Observer = AutorunObserver;
})(autorun || (autorun = {}));
