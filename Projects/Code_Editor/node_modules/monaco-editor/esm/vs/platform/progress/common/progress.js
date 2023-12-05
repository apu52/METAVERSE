import { createDecorator } from '../../instantiation/common/instantiation.js';
export const IProgressService = createDecorator('progressService');
export const emptyProgressRunner = Object.freeze({
    total() { },
    worked() { },
    done() { }
});
export class Progress {
    constructor(callback, opts) {
        this.callback = callback;
        this.report = (opts === null || opts === void 0 ? void 0 : opts.async)
            ? this._reportAsync.bind(this)
            : this._reportSync.bind(this);
    }
    _reportSync(item) {
        this._value = item;
        this.callback(this._value);
    }
    _reportAsync(item) {
        Promise.resolve(this._lastTask).finally(() => {
            this._value = item;
            const r = this.callback(this._value);
            this._lastTask = Promise.resolve(r).finally(() => this._lastTask = undefined);
        });
    }
}
Progress.None = Object.freeze({ report() { } });
export const IEditorProgressService = createDecorator('editorProgressService');
