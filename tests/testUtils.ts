import { vi } from 'vitest';
import { render } from '@testing-library/vue';
import merge from 'lodash/merge';
import { createTestingPinia } from '@pinia/testing';
import router from '@/router';
import type { Component } from 'vue';
import type { TestingPinia } from '@pinia/testing';

const ResizeObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

interface Params {
    props?: {
        [key: string]: any
    };
    initialState?: {
        [key: string]: any
    };
    testPinia?: null | TestingPinia;
    stubs?: string[];
    stubActions?: boolean;
    slots?: {
        [key: string]: any
    };
    mocks?: {
        [key: string]: any
    };
    plugins?: any[];
    provide?: {
        [key: string]: any
    };
}

const customRender = (ui: Component, {
    props = {},
    initialState = {},
    testPinia = null,
    stubs = [],
    slots,
    mocks = {},
    plugins = [],
    provide = {},
    stubActions = true
}: Params = {}) => {
    const pinia: TestingPinia = testPinia || createTestingPinia({
        stubActions,
        initialState: merge({
        }, initialState)
    });
    return render(ui, {
        global: {
            plugins: [router, pinia, ...plugins],
            mocks: {
                ...mocks
            },
            stubs: [
                ...stubs
            ],
            provide
        },
        props,
        slots
    });
};

export * from '@testing-library/vue';
export { customRender as render };
