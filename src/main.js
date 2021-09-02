import { createApp } from 'vue'
import App from './App.vue'
import * as apolloProvider from './apollo.provider'
import * as routerConfig from './appRouter'

const app = createApp(App)

app.use(apolloProvider.provider);
app.use(routerConfig.router);
app.mount('#app');
