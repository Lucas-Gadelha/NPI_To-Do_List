/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

import vuetify from './plugins/vuetify';
import 'vuetify/styles';

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(vuetify)

registerPlugins(app)

app.mount('#app')
