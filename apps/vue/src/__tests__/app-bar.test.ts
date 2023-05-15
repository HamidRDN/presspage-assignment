import { mount } from '@vue/test-utils';
import AppBar from '@components/app-bar.vue';
import { describe, it, expect } from 'vitest';
import router from '@router';
import vuetify from '@plugins/vuetify.ts';
import { VApp } from 'vuetify/components';
import { h } from 'vue';

describe('', () => {
    it('should have title', () => {
        const wrapper = mount(VApp, {
            slots: {
                default: h(AppBar),
            },
            global: { plugins: [vuetify, router] },
        });
        const title = wrapper.find('.app-bar-title');
        expect(title.text()).toEqual('Github Users | PressPage Assignment');
        const logo = wrapper.find('.app-bar-logo');
        expect(logo.exists()).toBe(true);
        expect(logo.attributes('href')).toEqual('/');
        const logoImage = logo.find('img');
        expect(logoImage.exists()).toBe(true);
    });
});
