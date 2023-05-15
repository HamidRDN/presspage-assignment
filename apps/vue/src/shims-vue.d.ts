/*
 eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
 */

/*
    Fix issue of including vue file in ts file.
    Source: https://github.com/vuejs/vue/issues/5298#issuecomment-970689689
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue';

    const component: DefineComponent<{}, {}, any>;
    export default component;
}
