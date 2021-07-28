import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/home/home.vue");
const category = () => import("../views/category/category.vue");
const cart = () => import("../views/cart/cart.vue");
const profile = () => import("../views/profile/profile.vue");
const Detail = () => import("../views/detail/Detail.vue");
Vue.use(VueRouter);
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/cart",
    component: cart
  },
  {
    path: "/profile",
    component: profile
  },
  {
    path: "/detail/:id",
    component: Detail
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
