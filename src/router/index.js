import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'home',
        component:()=>import("@/views/Home.vue"),
        redirection:'/index',
        children:[
            {
                path:'index',
                name:'index',
                component:()=>import("@/views/Index.vue")
            },
            {
                path:'volunteerService',
                name:'volunteerService',
                component:()=>import("@/views/VolunteerService.vue")
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import("@/views/Login.vue")
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router