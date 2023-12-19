import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import Button from './components/Button'
import Checkbox from "./components/Checkbox"
import Checkbox_group from "./components/Checkbox-group"
import Card from './components/Card'
import Drawer from './components/Drawer'
import Menu from './components/Menu'
import Tree from './components/Tree'
import TreeItem from './components/Treeitem'
const app = createApp(App);
app.use(store).use(router).use(ElementPlus).use(Button).use(Checkbox).use(Checkbox_group).use(Card).use(Drawer).use(Menu).use(Tree).use(TreeItem);
app.mount('#app');