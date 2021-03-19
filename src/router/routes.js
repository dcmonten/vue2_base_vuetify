const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../views/Layouts/Authenticated.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
    ],
  },
  {
    path: "/about",
    redirect: "/about",
    component: () => import("../views/Layouts/Guest.vue"),
    children: [
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
      },
    ],
  },
];

export default routes;
