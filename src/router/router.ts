import {
  type Router,
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes: readonly RouteRecordRaw[] = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/products.vue"),
  },
  {
    path: "/products/show/:id",
    name: "product_show",
    component: () => import("@/views/show.vue"),
  },
  {
    path: "/products/create",
    name: "product_create",
    component: () => import("@/views/add-update.vue"),
  },
  {
    path: "/products/:id/update",
    name: "product_update",
    component: () => import("@/views/add-update.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "error",
    component: () => import("@/views/error.vue"),
  },
];

export const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
