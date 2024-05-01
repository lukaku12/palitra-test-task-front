import {createRouter, createWebHistory} from "vue-router";


const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: {name: "products"},
            name: "home"
        },
        {
            path: "/products",
            component: () => import("@/views/products/index.vue"),
            name: "products",
        },
        {
            path: "/cart",
            component: () => import("@/views/cart/index.vue"),
            name: "cart",
        },
    ]
});

export default router;