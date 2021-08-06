export const on = function(
    element: Document | HTMLElement | Window,
    event: string,
    handler: EventListenerOrEventListenerObject,
    // handler: GlobalEventHandlersEventMap,
    useCapture: boolean = false
): void {
    if (element && event && handler) {
        element.addEventListener(event, handler, useCapture);
    }
}