const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/home.vue") },
      { path: "/students", component: () => import("pages/students.vue") },
      { path: "/settings", component: () => import("pages/settings.vue") },
      { path: "/student", component: () => import("pages/student.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
