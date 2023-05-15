// Veutify UI Library
import 'vuetify/styles';
import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import colors from 'vuetify/lib/util/colors';

// Vuetify theme and creation
const ppTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: colors.blue.darken2,
        'app-bar-background': '#e7f0f6',
    },
};

const vuetify = createVuetify({
    components: {
        ...components,
        VSkeletonLoader,
    },
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'ppTheme',
        themes: {
            ppTheme,
        },
    },
});

export default vuetify;
