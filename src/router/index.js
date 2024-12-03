import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
    {
        path : '/user/phieu-muon',
        component: ()=>import('../components/User/PhieuMuon.vue'),
        meta: { layout: "user" },
    },
    {
        path : '/admin/hoa-don',
        component: ()=>import('../components/admin/HoaDon.vue')
    },
    {
        path: "/user/lich-su-muon",
        component: () => import("../components/User/LichSuMuon.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/thanh-toan",
        component: () => import("../components/User/ThanhToan.vue"),
        meta: { layout: "user" },
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router