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
        path : '/admin/quan-ly-sach',
        component: ()=>import('../components/admin/QuanLySach.vue')
    },
    {
        path : '/admin/quan-ly-tai-khoan',
        component: ()=>import('../components/admin/QuanLyTaiKhoan.vue')
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
    {
        path: "/user/danh-muc-sach",
        component: () => import("../components/User/DanhMucSach.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/chi-tiet-sach",
        component: () => import("../components/User/ChiTietSach.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/quan-ly-tai-khoan-ca-nhan",
        component: () => import("../components/User/QuanLyTaiKhoanCaNhan.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/",
        component: () => import("../components/User/TrangChu.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/dang-ky",
        component: () => import("../components/admin/DangKy.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/dang-nhap",
        component: () => import("../components/admin/DangNhap.vue"),
        meta: { layout: "user" },
    },
    {
        path: "/user/hoa-don",
        component: () => import("../components/User/HoaDon.vue"),
        meta: { layout: "user" },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router