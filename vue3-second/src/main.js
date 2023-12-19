import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from './components/Button';
import Checkboxs from './components/checkboxs';
import CheckboxGroup from './components/checkbox-group';
import Card from './components/Card';


// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.use(store).use(router).use(Button).use(Checkboxs).use(CheckboxGroup).use(Card);
app.mount('#app');