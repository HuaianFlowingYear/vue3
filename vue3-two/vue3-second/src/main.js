import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import checkbox from "./components/checkbox"
import checkbox_group from "./components/checkbox-group"
import Card from "./components/Card"
import Button from './components/Button'
// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.use(store).use(router).use(Button).use(checkbox).use(checkbox_group).use(Card);
app.mount('#app');