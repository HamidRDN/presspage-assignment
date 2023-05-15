/* eslint-disable */
// Fix undefined ResizeObserver error
class ResizeObserverStub {
    observe() {}

    unobserve() {}

    disconnect() {}
}

window.ResizeObserver = window.ResizeObserver || ResizeObserverStub;

// @ts-ignore
global.CSS = { supports: () => false };
