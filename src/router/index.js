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
    // //智能校验 vue_vaptcha
    // {
    //     path: "/vue_vaptcha",
    //     name: 'vue_vaptcha',
    //     component: () => import('@/components/vue_vaptcha')
    // },
    //导出pdfcavs
    {
        path: "/daochuPDf",
        name: 'daochuPDf',
        component: () => import('@/components/daochuPDf')
    },
    {
        path: "/test",
        name: 'test',
        component: () => import('@/components/test')
    },
    {
        path: "/cavs",
        name: 'cavs',
        component: () => import('@/components/cavs')
    }

]
const router = new Router({
    routes: constantRouterMap
});
Vue.use(Router)
export default router;