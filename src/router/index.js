/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {createRouter,createWebHashHistory} from 'vue-router';

import StudentMain1 from '../components/StudentMain1.vue'
const routes=[
    {
        path:'/',
        redirect:'/student'
    },
    {
        path:'/person',
        component:()=>import('../components/PersonList')
    },
    {
        path:'/student',
        component:()=>import('../components/StudentList'),
        children:[
            {
                path:'',
                redirect:'/student/main5'
            },
            {
                path:'main',
                component:()=>import('../components/StudentMain.vue')
            },
            {
                path:'main1',
                component:()=>import('../components/StudentMain1.vue')
            },
            {
                path:'main2',
                component:()=>import('../components/StudentMain2.vue')
            },
            {
                path:'main3',
                component:()=>import('../components/StudentMain3.vue')
            },
            {
                path:'main4',
                component:()=>import('../components/StudentMain4.vue')
            },
            {
                path:'main5',
                component:()=>import('../components/StudentMain5.vue')
            }
        ]
    },
    {
        path:'/css',
        component:()=>import('../components/AboutList')
    },
    {
        path:'/javascript',
        component:()=>import('../components/JavascriptList.vue')
    },
    {
        path:'/canvas',
        component:()=>import('../components/CanvasList.vue')
    },
    {
        path:'/jqeury',
        component:()=>import('../components/JqeuryList.vue')
    },
    {
        path:'/vuelist',
        component:()=>import('../components/VueList.vue')
    },
    {
        path:'/bootstrap',
        component:()=>import('../components/BootStrapList.vue')
    },
    {
        path:'/elementui',
        component:()=>import('../components/ElementUiList.vue')
    },
    {
        path:'/ajax/:username',
        component:()=>import('../components/AjaxList.vue')
    }
];
const router=createRouter({
    routes,
    history:createWebHashHistory()
});
export default router