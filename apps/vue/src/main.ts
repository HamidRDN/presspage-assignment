import { createApp } from 'vue';

// Pinia
import { createPinia } from 'pinia';

// Internals
import router from '@router';
import App from './app.vue';
import vuetify from '@plugins/vuetify.ts';

// State management
const pinia = createPinia();

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(pinia);
app.mount('#app');
