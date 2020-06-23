import Vue from 'vue'
import Router from 'vue-router'

const constantRouterMap = [{
        path: "/",
        name: 'index',
        // redirect: '/login',
        component: () => import('@/components/HelloWorld')
    }, {
        path: "/map",
        name: 'map',
        component: () => import('@/components/map')
    },
    {
        path: "/mock",
        name: 'mock',
        component: () => import('@/components/mock')
    },
    {
        path: "/gd",
        name: 'gd',
        component: () => import('@/components/gaode')
    },
    {
        path: "/table",
        name: 'table',
        component: () => import('@/components/table_list')
    },
    {
        path: "/full",
        name: 'full',
        component: () => import('@/components/full')
    },
    {
        path: "/daochu",
        name: 'daochu',
        component: () => import('@/components/daochu')
    },
]
const router = new Router({
    routes: constantRouterMap
});
Vue.use(Router)
export default router;