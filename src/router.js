import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "my-home",
      component: () => import("./views/Home")
    },
    {
      path: "/about",
      name: "about",
      alias: "/a",
      component: () => import("./views/About")
    },
    {
      path: "/posts/:postId",
      name: "post",
      component: () => import("./views/Post")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact")
    }
  ]
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
