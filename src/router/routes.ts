import type { RouteRecordRaw } from "vue-router";

import RoutesNames from "./routesNames";

export const Routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: RoutesNames.landing,
        component: () => import(/*chunkName: "landing" */ "@/views/HomeView.vue")
    },
    {
        path: "/login",
        name: RoutesNames.login,
        component: () => import(/*chunkName: "login" */ "@/views/LoginView.vue"),
        meta: {
            anonymousOnly: true
        }
    },
    {
        path: "/register",
        name: RoutesNames.register,
        component: () => import(/*chunkName: "register" */ "@/views/RegisterView.vue"),
        meta: {
            anonymousOnly: true
        }
    },
    {
        path: "/forgot-password",
        name: RoutesNames.forgotPassword,
        component: () => import(/*chunkName: "forgot-password" */ "@/views/ForgotPassword.vue"),
        meta: {
            anonymousOnly: true
        }
    },
    {
        path: "/password-reset",
        name: RoutesNames.resetPassword,
        component: () => import(/*chunkName: "password-reset" */ "@/views/ResetPassword.vue"),
        meta: {
            anonymousOnly: true
        }
    },
    {
        path: "/verify-otp",
        name: RoutesNames.verifyOtp,
        component: () => import(/*chunkName: "verify-otp" */ "@/views/VerifyOtp.vue"),
        meta: {
            anonymousOnly: true
        }
    },
]
