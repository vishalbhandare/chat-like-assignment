import { createRouter, createWebHashHistory } from "vue-router";
import ChatManagementPage from "./components/ChatManagementPage.vue";
import LoginPage from "./components/LoginPage.vue";
import loginMiddleware from "./lib/loginMiddleware";
const routes = [
  {
    path: "/",
    component: LoginPage,
    meta: { needAuth: true },
    ...loginMiddleware,
  },
  {
    path: "/login",
    component: LoginPage,
    meta: { needAuth: false },
    ...loginMiddleware,
  },
  {
    path: "/chats",
    component: ChatManagementPage,
    meta: { needAuth: true },
    ...loginMiddleware,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router;
