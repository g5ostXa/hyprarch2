"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSource = void 0;
class EventSource {
    constructor() {
        this.callbacks = new Array();
    }
    setEvent() {
        this.callbacks = this.callbacks.filter(c => !(c.oneTime === true && c.callCount !== 0));
        this.callbacks.forEach(c => {
            c.callback();
            c.callCount++;
        });
    }
    onEvent() {
        return new Promise((resolve) => {
            this.scheduleOnce(() => resolve());
        });
    }
    schedule(callback) {
        let multipleTimesCallback = {
            callback: () => { callback(); }, oneTime: false, callCount: 0
        };
        this.callbacks.push(multipleTimesCallback);
    }
    scheduleOnce(callback) {
        let oneTimeCallback = {
            callback: () => { callback(); }, oneTime: true, callCount: 0
        };
        this.callbacks.push(oneTimeCallback);
    }
}
exports.EventSource = EventSource;
//# sourceMappingURL=eventSource.js.map