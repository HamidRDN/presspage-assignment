import { mount } from '@vue/test-utils';
import Page404 from '@pages/404-page.vue';
import { describe, it, expect } from 'vitest';
import router from '@router';
import vuetify from '@plugins/vuetify.ts';
import { VApp } from 'vuetify/components';
import { h } from 'vue';

describe('', () => {
    it('should have title', () => {
        const wrapper = mount(VApp, {
            slots: {
                default: h(Page404),
            },
            global: { plugins: [vuetify, router] },
        });
        const title = wrapper.find('h4');
        expect(title.text()).toEqual('The requested page is not found.');
        const button = wrapper.find('a');
        expect(button.exists()).toBe(true);
        expect(button.attributes('href')).toBe('/');
        expect(button.text()).toEqual('Go to home page');
    });
});
