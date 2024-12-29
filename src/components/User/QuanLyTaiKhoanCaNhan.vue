<template>
    <div class="container my-5">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white">
                <h4 class="mt-3"><b>Thông Tin Tài Khoản</b></h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 d-flex justify-content-center align-items-center">
                        <img class="img-thumbnail shadow-sm"
                            style="width: 200px; height: 200px; border: 4px solid #0d6efd; object-fit: cover;"
                            :src="user.hinh_anh" alt="Avatar">
                    </div>

                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Họ và Tên:</label>
                                <p class="form-control-plaintext">{{ user.ten_nguoi_dung }}</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Email:</label>
                                <p class="form-control-plaintext">{{ user.email }}</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Số Điện Thoại:</label>
                                <p class="form-control-plaintext">{{ user.so_dien_thoai }}</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Địa Chỉ:</label>
                                <p class="form-control-plaintext">{{ user.dia_chi }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="text-end">
                    <button type="button" class="btn btn-warning rounded-pill shadow-sm">
                        <i class="fa-solid fa-pen-to-square"></i> Cập Nhật
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../axios';

export default {
    data() {
        return {
            user: {
                ten_nguoi_dung: "",
                hinh_anh: "",
                email: "",
                so_dien_thoai: "",
                dia_chi: "",
            },
        };
    },
    mounted() {
        this.loadUserData();
    },
    methods: {
        loadUserData() {
            axios
                .get("nguoi-dung/aaa") 
                .then((res) => {
                    console.log("🚀 ~ .then ~ res:", res)
                    this.user = res.data.data; 
                })
                .catch((error) => {
                    console.error("Có lỗi khi tải dữ liệu người dùng:", error);
                });
        },
    },
};
</script>

<style scoped>
body {
    background-color: #f8f9fa;
}

.card-header {
    border-bottom: 2px solid #0d6efd;
}

.card {
    border-radius: 15px;
}

img {
    border-radius: 5px;
    object-fit: cover;
}

.btn:hover {
    opacity: 0.9;
    transform: scale(1.02);
}

label {
    color: #6c757d;
}
</style>
