import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Card from "./components/Card"

const app = createApp(App);
app.use(store).use(router).use(Card);
app.mount('#app');