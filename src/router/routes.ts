import type { RouteRecordRaw } from 'vue-router'

import RoutesNames from './routesNames'

export const Routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RoutesNames.auth,
    redirect: RoutesNames.login,
    component: () => import(/*chunkName: "auth" */ '@/views/Layouts/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: RoutesNames.login,
        component: () => import(/*chunkName: "login" */ '@/views/LoginView.vue'),
        meta: {
          anonymousOnly: true
        }
      },
      {
        path: '/register',
        name: RoutesNames.register,
        component: () => import(/*chunkName: "register" */ '@/views/RegisterView.vue'),
        meta: {
          anonymousOnly: true
        }
      },
      {
        path: '/forgot-password',
        name: RoutesNames.forgotPassword,
        component: () => import(/*chunkName: "forgot-password" */ '@/views/ForgotPassword.vue'),
        meta: {
          anonymousOnly: true
        }
      },
      {
        path: '/password-reset',
        name: RoutesNames.resetPassword,
        component: () => import(/*chunkName: "password-reset" */ '@/views/ResetPassword.vue'),
        meta: {
          anonymousOnly: true
        }
      },
      {
        path: '/verify-otp',
        name: RoutesNames.verifyOtp,
        component: () => import(/*chunkName: "verify-otp" */ '@/views/VerifyOtp.vue'),
        meta: {
          anonymousOnly: true
        }
      }
    ]
  },

  // Dashboard Routes
  {
    path: '/dashboard',
    component: () => import(/*chunkName: "dashboard" */ '@/views/Layouts/DashboardLayout.vue'),
    redirect: RoutesNames.dashboardIndex,
    children: [
      {
        path: '/dashboard',
        name: RoutesNames.dashboardIndex,
        component: () => import(/*chunkName: "dashboard" */ '@/views/Dashboard/index.vue'),
        meta: {
            requiresAuth: true
          }
      },
      {
        path: '/dashboard/profile',
        name: RoutesNames.userProfile,
        component: () => import(/*chunkName: "profile" */ '@/views/Dashboard/UserProfile/index.vue'),
        meta: {
            requiresAuth: true
          }
      },
      {
        path: '/dashboard/assets',
        name: RoutesNames.Assets,
        component: () => import(/*chunkName: "assets" */ '@/views/Dashboard/Assets/index.vue'),
        meta: {
            requiresAuth: true
          }
      },
      {
        path: '/dashboard/assets/:id',
        name: RoutesNames.assetDetails,
        component: () => import(/*chunkName: "unique id" */ '@/views/Dashboard/Assets/_id/index.vue'),
        meta: {
            requiresAuth: true
          }
      },
      {
        path: '/dashboard/mortgage',
        name: RoutesNames.Mortgage,
        component: () => import(/*chunkName: "mortgage" */ '@/views/Dashboard/Mortgage/index.vue'),
        meta: {
            requiresAuth: true
          }
      },
      {
        path: '/dashboard/savings',
        name: RoutesNames.Savings,
        component: () => import(/*chunkName: "savings" */ '@/views/Dashboard/Savings/index.vue'),
        meta: {
            requiresAuth: true
          }
      },
      {
        path: '/dashboard/marketplace',
        name: RoutesNames.Marketplace,
        component: () => import(/*chunkName: "marketplace" */ '@/views/Dashboard/Marketplace/index.vue'),
        meta: {
            requiresAuth: true
          }
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: RoutesNames.login }
  }
]
