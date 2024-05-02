import {createRouter, createWebHistory} from "vue-router";

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: {name: "products.index"},
            name: "home"
        },
        {
            path: "/products",
            component: () => import("@/views/products/index.vue"),
            name: "products.index",
        },
        {
            path: "/products/:id",
            component: () => import("@/views/products/show.vue"),
            name: "products.show",
        },
        {
            path: "/cart",
            component: () => import("@/views/cart/index.vue"),
            name: "cart",
        },
        {
            path: "/checkout",
            component: () => import("@/views/checkout/index.vue"),
            name: "checkout",
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("@/views/errors/404.vue"),
            name: "404",
        },
    ]
});

export default router;