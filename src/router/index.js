import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: () => import(/* webpackChunkName: "home" */ "../views/AboutMe/AboutMe.vue"),
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import(/* webpackChunkName: "books" */ "../views/Books/Books.vue"),
  },
  {
    path: '/books/:id',
    name: 'Book',
    component: () => import(/* webpackChunkName: "vaxo" */ "../components/Book.vue"),
  }
]


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
