/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createCancelablePromise, TimeoutTimer } from '../../../../base/common/async.js';
import { isCancellationError } from '../../../../base/common/errors.js';
import { Emitter } from '../../../../base/common/event.js';
import { Disposable, MutableDisposable } from '../../../../base/common/lifecycle.js';
import { isEqual } from '../../../../base/common/resources.js';
import { Position } from '../../../common/core/position.js';
import { Selection } from '../../../common/core/selection.js';
import { RawContextKey } from '../../../../platform/contextkey/common/contextkey.js';
import { Progress } from '../../../../platform/progress/common/progress.js';
import { CodeActionKind, CodeActionTriggerSource } from '../common/types.js';
import { getCodeActions } from './codeAction.js';
export const SUPPORTED_CODE_ACTIONS = new RawContextKey('supportedCodeAction', '');
class CodeActionOracle extends Disposable {
    constructor(_editor, _markerService, _signalChange, _delay = 250) {
        super();
        this._editor = _editor;
        this._markerService = _markerService;
        this._signalChange = _signalChange;
        this._delay = _delay;
        this._autoTriggerTimer = this._register(new TimeoutTimer());
        this._register(this._markerService.onMarkerChanged(e => this._onMarkerChanges(e)));
        this._register(this._editor.onDidChangeCursorPosition(() => this._tryAutoTrigger()));
    }
    trigger(trigger) {
        const selection = this._getRangeOfSelectionUnlessWhitespaceEnclosed(trigger);
        this._signalChange(selection ? { trigger, selection } : undefined);
    }
    _onMarkerChanges(resources) {
        const model = this._editor.getModel();
        if (model && resources.some(resource => isEqual(resource, model.uri))) {
            this._tryAutoTrigger();
        }
    }
    _tryAutoTrigger() {
        this._autoTriggerTimer.cancelAndSet(() => {
            this.trigger({ type: 2 /* CodeActionTriggerType.Auto */, triggerAction: CodeActionTriggerSource.Default });
        }, this._delay);
    }
    _getRangeOfSelectionUnlessWhitespaceEnclosed(trigger) {
        if (!this._editor.hasModel()) {
            return undefined;
        }
        const model = this._editor.getModel();
        const selection = this._editor.getSelection();
        if (selection.isEmpty() && trigger.type === 2 /* CodeActionTriggerType.Auto */) {
            const { lineNumber, column } = selection.getPosition();
            const line = model.getLineContent(lineNumber);
            if (line.length === 0) {
                // empty line
                return undefined;
            }
            else if (column === 1) {
                // look only right
                if (/\s/.test(line[0])) {
                    return undefined;
                }
            }
            else if (column === model.getLineMaxColumn(lineNumber)) {
                // look only left
                if (/\s/.test(line[line.length - 1])) {
                    return undefined;
                }
            }
            else {
                // look left and right
                if (/\s/.test(line[column - 2]) && /\s/.test(line[column - 1])) {
                    return undefined;
                }
            }
        }
        return selection;
    }
}
export var CodeActionsState;
(function (CodeActionsState) {
    CodeActionsState.Empty = { type: 0 /* Type.Empty */ };
    class Triggered {
        constructor(trigger, position, _cancellablePromise) {
            this.trigger = trigger;
            this.position = position;
            this._cancellablePromise = _cancellablePromise;
            this.type = 1 /* Type.Triggered */;
            this.actions = _cancellablePromise.catch((e) => {
                if (isCancellationError(e)) {
                    return emptyCodeActionSet;
                }
                throw e;
            });
        }
        cancel() {
            this._cancellablePromise.cancel();
        }
    }
    CodeActionsState.Triggered = Triggered;
})(CodeActionsState || (CodeActionsState = {}));
const emptyCodeActionSet = Object.freeze({
    allActions: [],
    validActions: [],
    dispose: () => { },
    documentation: [],
    hasAutoFix: false
});
export class CodeActionModel extends Disposable {
    constructor(_editor, _registry, _markerService, contextKeyService, _progressService, _configurationService) {
        super();
        this._editor = _editor;
        this._registry = _registry;
        this._markerService = _markerService;
        this._progressService = _progressService;
        this._configurationService = _configurationService;
        this._codeActionOracle = this._register(new MutableDisposable());
        this._state = CodeActionsState.Empty;
        this._onDidChangeState = this._register(new Emitter());
        this.onDidChangeState = this._onDidChangeState.event;
        this._disposed = false;
        this._supportedCodeActions = SUPPORTED_CODE_ACTIONS.bindTo(contextKeyService);
        this._register(this._editor.onDidChangeModel(() => this._update()));
        this._register(this._editor.onDidChangeModelLanguage(() => this._update()));
        this._register(this._registry.onDidChange(() => this._update()));
        this._update();
    }
    dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        super.dispose();
        this.setState(CodeActionsState.Empty, true);
    }
    _settingEnabledNearbyQuickfixes() {
        var _a;
        const model = (_a = this._editor) === null || _a === void 0 ? void 0 : _a.getModel();
        return this._configurationService ? this._configurationService.getValue('editor.codeActionWidget.includeNearbyQuickfixes', { resource: model === null || model === void 0 ? void 0 : model.uri }) : false;
    }
    _update() {
        if (this._disposed) {
            return;
        }
        this._codeActionOracle.value = undefined;
        this.setState(CodeActionsState.Empty);
        const model = this._editor.getModel();
        if (model
            && this._registry.has(model)
            && !this._editor.getOption(90 /* EditorOption.readOnly */)) {
            const supportedActions = this._registry.all(model).flatMap(provider => { var _a; return (_a = provider.providedCodeActionKinds) !== null && _a !== void 0 ? _a : []; });
            this._supportedCodeActions.set(supportedActions.join(' '));
            this._codeActionOracle.value = new CodeActionOracle(this._editor, this._markerService, trigger => {
                var _a;
                if (!trigger) {
                    this.setState(CodeActionsState.Empty);
                    return;
                }
                const startPosition = trigger.selection.getStartPosition();
                const actions = createCancelablePromise((token) => __awaiter(this, void 0, void 0, function* () {
                    var _b, _c, _d, _e, _f, _g;
                    if (this._settingEnabledNearbyQuickfixes() && trigger.trigger.type === 1 /* CodeActionTriggerType.Invoke */ && (trigger.trigger.triggerAction === CodeActionTriggerSource.QuickFix || ((_c = (_b = trigger.trigger.filter) === null || _b === void 0 ? void 0 : _b.include) === null || _c === void 0 ? void 0 : _c.contains(CodeActionKind.QuickFix)))) {
                        const codeActionSet = yield getCodeActions(this._registry, model, trigger.selection, trigger.trigger, Progress.None, token);
                        if (token.isCancellationRequested) {
                            return emptyCodeActionSet;
                        }
                        // Search for quickfixes in the curret code action set.
                        const foundQuickfix = (_d = codeActionSet.validActions) === null || _d === void 0 ? void 0 : _d.some(action => action.action.kind ? CodeActionKind.QuickFix.contains(new CodeActionKind(action.action.kind)) : false);
                        if (!foundQuickfix) {
                            const allMarkers = this._markerService.read({ resource: model.uri });
                            // If markers exists, and there are no quickfixes found or length is zero, check for quickfixes on that line.
                            if (allMarkers.length > 0) {
                                const currPosition = trigger.selection.getPosition();
                                let trackedPosition = currPosition;
                                let distance = Number.MAX_VALUE;
                                let toBeModified = false;
                                for (const marker of allMarkers) {
                                    const col = marker.endColumn;
                                    const row = marker.endLineNumber;
                                    const startRow = marker.startLineNumber;
                                    // Found quickfix on the same line and check relative distance to other markers
                                    if ((row === currPosition.lineNumber || startRow === currPosition.lineNumber) && Math.abs(currPosition.column - col) < distance) {
                                        distance = Math.abs(currPosition.column - col);
                                        toBeModified = true;
                                        trackedPosition = new Position(row, col);
                                    }
                                }
                                // Only retriggers if actually found quickfix on the same line as cursor
                                if (toBeModified) {
                                    const newCodeActionTrigger = {
                                        type: trigger.trigger.type,
                                        triggerAction: trigger.trigger.triggerAction,
                                        filter: { include: ((_e = trigger.trigger.filter) === null || _e === void 0 ? void 0 : _e.include) ? (_f = trigger.trigger.filter) === null || _f === void 0 ? void 0 : _f.include : CodeActionKind.QuickFix },
                                        autoApply: trigger.trigger.autoApply,
                                        context: { notAvailableMessage: ((_g = trigger.trigger.context) === null || _g === void 0 ? void 0 : _g.notAvailableMessage) || '', position: trackedPosition }
                                    };
                                    const selectionAsPosition = new Selection(trackedPosition.lineNumber, trackedPosition.column, trackedPosition.lineNumber, trackedPosition.column);
                                    const actionsAtMarker = yield getCodeActions(this._registry, model, selectionAsPosition, newCodeActionTrigger, Progress.None, token);
                                    const currentActions = [...codeActionSet.validActions];
                                    if (actionsAtMarker.validActions.length !== 0) {
                                        actionsAtMarker.validActions.forEach(action => {
                                            action.highlightRange = action.action.isPreferred;
                                        });
                                        // Already filtered through to only get quickfixes, so no need to filter again.
                                        currentActions.push(...actionsAtMarker.validActions);
                                    }
                                    return { validActions: currentActions, allActions: codeActionSet.allActions, documentation: codeActionSet.documentation, hasAutoFix: codeActionSet.hasAutoFix, dispose: () => { codeActionSet.dispose(); } };
                                }
                            }
                        }
                    }
                    // temporarilly hiding here as this is enabled/disabled behind a setting.
                    return getCodeActions(this._registry, model, trigger.selection, trigger.trigger, Progress.None, token);
                }));
                if (trigger.trigger.type === 1 /* CodeActionTriggerType.Invoke */) {
                    (_a = this._progressService) === null || _a === void 0 ? void 0 : _a.showWhile(actions, 250);
                }
                this.setState(new CodeActionsState.Triggered(trigger.trigger, startPosition, actions));
            }, undefined);
            this._codeActionOracle.value.trigger({ type: 2 /* CodeActionTriggerType.Auto */, triggerAction: CodeActionTriggerSource.Default });
        }
        else {
            this._supportedCodeActions.reset();
        }
    }
    trigger(trigger) {
        var _a;
        (_a = this._codeActionOracle.value) === null || _a === void 0 ? void 0 : _a.trigger(trigger);
    }
    setState(newState, skipNotify) {
        if (newState === this._state) {
            return;
        }
        // Cancel old request
        if (this._state.type === 1 /* CodeActionsState.Type.Triggered */) {
            this._state.cancel();
        }
        this._state = newState;
        if (!skipNotify && !this._disposed) {
            this._onDidChangeState.fire(newState);
        }
    }
}
