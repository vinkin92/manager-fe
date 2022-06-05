import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import axios from "axios";
import config from "./config";
const app = createApp(App);
app.use(router).use(ElementPlus).mount("#app");
