import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

import App from "./App.vue";
import "animate.css";
import './styles/style.scss';

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

// this is the paths of your app
const routers = [
  {
    name: "root",
    path: "",
    component: App,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "home",
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

const app = createApp(App); // vue app banako
app.config.productionTip = false;
app.use(Antd);
app.use(router); // router vanne pluginuse
app.mount("#fapp"); // div with id app ma point
