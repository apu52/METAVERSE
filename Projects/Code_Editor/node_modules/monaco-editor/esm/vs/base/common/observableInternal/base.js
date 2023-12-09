/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { getLogger } from './logging.js';
let _derived;
/**
 * @internal
 * This is to allow splitting files.
*/
export function _setDerivedOpts(derived) {
    _derived = derived;
}
export class ConvenientObservable {
    get TChange() { return null; }
    reportChanges() {
        this.get();
    }
    /** @sealed */
    read(reader) {
        if (reader) {
            return reader.readObservable(this);
        }
        else {
            return this.get();
        }
    }
    map(fnOrOwner, fnOrUndefined) {
        const owner = fnOrUndefined === undefined ? undefined : fnOrOwner;
        const fn = fnOrUndefined === undefined ? fnOrOwner : fnOrUndefined;
        return _derived({
            owner,
            debugName: () => {
                const name = getFunctionName(fn);
                if (name !== undefined) {
                    return name;
                }
                // regexp to match `x => x.y` where x and y can be arbitrary identifiers (uses backref):
                const regexp = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/;
                const match = regexp.exec(fn.toString());
                if (match) {
                    return `${this.debugName}.${match[2]}`;
                }
                if (!owner) {
                    return `${this.debugName} (mapped)`;
                }
                return undefined;
            },
        }, (reader) => fn(this.read(reader), reader));
    }
}
export class BaseObservable extends ConvenientObservable {
    constructor() {
        super(...arguments);
        this.observers = new Set();
    }
    addObserver(observer) {
        const len = this.observers.size;
        this.observers.add(observer);
        if (len === 0) {
            this.onFirstObserverAdded();
        }
    }
    removeObserver(observer) {
        const deleted = this.observers.delete(observer);
        if (deleted && this.observers.size === 0) {
            this.onLastObserverRemoved();
        }
    }
    onFirstObserverAdded() { }
    onLastObserverRemoved() { }
}
export function transaction(fn, getDebugName) {
    const tx = new TransactionImpl(fn, getDebugName);
    try {
        fn(tx);
    }
    finally {
        tx.finish();
    }
}
export function subtransaction(tx, fn, getDebugName) {
    if (!tx) {
        transaction(fn, getDebugName);
    }
    else {
        fn(tx);
    }
}
export class TransactionImpl {
    constructor(_fn, _getDebugName) {
        var _a;
        this._fn = _fn;
        this._getDebugName = _getDebugName;
        this.updatingObservers = [];
        (_a = getLogger()) === null || _a === void 0 ? void 0 : _a.handleBeginTransaction(this);
    }
    getDebugName() {
        if (this._getDebugName) {
            return this._getDebugName();
        }
        return getFunctionName(this._fn);
    }
    updateObserver(observer, observable) {
        this.updatingObservers.push({ observer, observable });
        observer.beginUpdate(observable);
    }
    finish() {
        var _a;
        const updatingObservers = this.updatingObservers;
        // Prevent anyone from updating observers from now on.
        this.updatingObservers = null;
        for (const { observer, observable } of updatingObservers) {
            observer.endUpdate(observable);
        }
        (_a = getLogger()) === null || _a === void 0 ? void 0 : _a.handleEndTransaction();
    }
}
export function getDebugName(debugNameFn, fn, owner, self) {
    let result;
    if (debugNameFn !== undefined) {
        if (typeof debugNameFn === 'function') {
            result = debugNameFn();
            if (result !== undefined) {
                return result;
            }
        }
        else {
            return debugNameFn;
        }
    }
    if (fn !== undefined) {
        result = getFunctionName(fn);
        if (result !== undefined) {
            return result;
        }
    }
    if (owner !== undefined) {
        for (const key in owner) {
            if (owner[key] === self) {
                return key;
            }
        }
    }
    return undefined;
}
export function getFunctionName(fn) {
    const fnSrc = fn.toString();
    // Pattern: /** @description ... */
    const regexp = /\/\*\*\s*@description\s*([^*]*)\*\//;
    const match = regexp.exec(fnSrc);
    const result = match ? match[1] : undefined;
    return result === null || result === void 0 ? void 0 : result.trim();
}
export function observableValue(nameOrOwner, initialValue) {
    if (typeof nameOrOwner === 'string') {
        return new ObservableValue(undefined, nameOrOwner, initialValue);
    }
    else {
        return new ObservableValue(nameOrOwner, undefined, initialValue);
    }
}
export class ObservableValue extends BaseObservable {
    get debugName() {
        var _a;
        return (_a = getDebugName(this._debugName, undefined, this._owner, this)) !== null && _a !== void 0 ? _a : 'ObservableValue';
    }
    constructor(_owner, _debugName, initialValue) {
        super();
        this._owner = _owner;
        this._debugName = _debugName;
        this._value = initialValue;
    }
    get() {
        return this._value;
    }
    set(value, tx, change) {
        var _a;
        if (this._value === value) {
            return;
        }
        let _tx;
        if (!tx) {
            tx = _tx = new TransactionImpl(() => { }, () => `Setting ${this.debugName}`);
        }
        try {
            const oldValue = this._value;
            this._setValue(value);
            (_a = getLogger()) === null || _a === void 0 ? void 0 : _a.handleObservableChanged(this, { oldValue, newValue: value, change, didChange: true, hadValue: true });
            for (const observer of this.observers) {
                tx.updateObserver(observer, this);
                observer.handleChange(this, change);
            }
        }
        finally {
            if (_tx) {
                _tx.finish();
            }
        }
    }
    toString() {
        return `${this.debugName}: ${this._value}`;
    }
    _setValue(newValue) {
        this._value = newValue;
    }
}
export function disposableObservableValue(nameOrOwner, initialValue) {
    if (typeof nameOrOwner === 'string') {
        return new DisposableObservableValue(undefined, nameOrOwner, initialValue);
    }
    else {
        return new DisposableObservableValue(nameOrOwner, undefined, initialValue);
    }
}
export class DisposableObservableValue extends ObservableValue {
    _setValue(newValue) {
        if (this._value === newValue) {
            return;
        }
        if (this._value) {
            this._value.dispose();
        }
        this._value = newValue;
    }
    dispose() {
        var _a;
        (_a = this._value) === null || _a === void 0 ? void 0 : _a.dispose();
    }
}
