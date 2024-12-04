import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
    {
        path : '/admin/phieu-muon',
        component: ()=>import('../components/admin/PhieuMuon.vue')
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
    {
        path: "/user/tac-gia",
        component: () => import("../components/User/TacGia.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/phan-loai",
        component: () => import("../components/User/PhanLoai.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/nha-xuat-ban",
        component: () => import("../components/User/NXB.vue"),
        meta: { layout: "user" },
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router