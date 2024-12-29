<template>
    <div class="row">
        <div class="col-lg-4 col-md-12 mb-4">
            <div class="card shadow">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Thêm Mới Tài Khoản</h5>
                </div>
                <div class="card-body">
                    <label class="form-label">Tên Người Dùng</label>
                    <input v-model="create.ten_nhan_vien" type="text" class="form-control mb-3"
                        placeholder="Nhập tên người dùng">

                    <label class="form-label">Email</label>
                    <input v-model="create.email" type="email" class="form-control mb-3" placeholder="Nhập email">

                    <label class="form-label">Địa Chỉ</label>
                    <input v-model="create.dia_chi" type="text" class="form-control mb-3" placeholder="Nhập địa chỉ">

                    <label class="form-label">Số Điện Thoại</label>
                    <input v-model="create.so_dien_thoai" type="tel" class="form-control mb-3"
                        placeholder="Nhập số điện thoại">

                    <label class="form-label">Hình Ảnh</label>
                    <input v-model="create.hinh_anh" type="text" class="form-control mb-3" placeholder="Thêm hình ảnh">

                    <label class="form-label">Mật Khẩu</label>
                    <input v-model="create.mat_khau" type="password" class="form-control mb-3"
                        placeholder="Nhập mật khẩu">

                    <label class="form-label">Xác Nhận Mật Khẩu</label>
                    <input v-model="create.mat_khau_xac_nhan" type="password" class="form-control mb-3"
                        placeholder="Nhập lại mật khẩu">
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoi()" class="btn btn-success px-4">
                        <i class="fas fa-plus"></i> Thêm Mới
                    </button>
                </div>
            </div>
        </div>

        <div class="col-lg-8 col-md-12">
            <div class="card shadow">
                <div class="card-header bg-secondary text-white">
                    <h5 class="mb-0">Danh Sách Tài Khoản Admin</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover align-middle">
                            <thead class="table-dark">
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group">
                                            <input v-on:keyup.enter="timKiem()" v-model="search.noi_dung" type="text"
                                                class="form-control" placeholder="Tìm kiếm...">
                                            <button class="btn btn-outline-light bg-success text-white" type="button">
                                                <i class="bx bx-search"></i> Tìm
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Hình Ảnh</th>
                                    <th class="text-center">Tên Người Dùng</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Địa Chỉ</th>
                                    <th class="text-center">Số Điện Thoại</th>
                                    <th class="text-center">Tùy Chỉnh</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in list" :key="k">
                                    <td class="text-center">{{ k + 1 }}</td>
                                    <td class="text-center">
                                        <img :src="v.hinh_anh ? v.hinh_anh : 'default-avatar.jpg'"
                                            class="user-image img-fluid rounded" alt="Hình ảnh">
                                    </td>
                                    <td class="text-center">{{ v.ten_nhan_vien }}</td>
                                    <td class="text-center">{{ v.email }}</td>
                                    <td class="text-center">{{ v.dia_chi }}</td>
                                    <td class="text-center">{{ v.so_dien_thoai }}</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-info" v-on:click="Object.assign(update, v)" data-bs-toggle="modal"
                                            data-bs-target="#updateModal">
                                            <i class="fas fa-edit"></i> Cập Nhật
                                        </button>
                                        <button class="btn btn-sm btn-danger ms-2" v-on:click="Object.assign(del, v)"
                                            data-bs-toggle="modal" data-bs-target="#deleteModal">
                                            <i class="fas fa-trash-alt"></i> Xóa
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Xóa -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">Xóa Tài Khoản</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger d-flex align-items-center">
                            <div class="me-3">
                                <i class="bx bxs-message-square-x text-dark" style="font-size: 2rem;"></i>
                            </div>
                            <div>
                                <h6 class="mb-1 text-dark fw-bold">Bạn có chắc chắn muốn xóa tài khoản <b>{{
                                    del.ten_nhan_vien }}</b> này không?</h6>
                                <p class="mb-0 text-dark"><strong>LƯU Ý:</strong> Hành động này sẽ không thể hoàn tác!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button v-on:click="xoa()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận
                            Xóa</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Cập Nhật -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header bg-info">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Nhân Viên</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body bg-secondary">
                        <div class="card">
                            <div class="card-body">
                                <label class="form-label">Tên Người Dùng</label>
                        <input v-model="update.ten_nhan_vien" type="text" class="form-control mb-3"
                            placeholder="Nhập tên người dùng">

                        <label class="form-label">Email</label>
                        <input v-model="update.email" type="email" class="form-control mb-3" placeholder="Nhập email">

                        <label class="form-label">Địa Chỉ</label>
                        <input v-model="update.dia_chi" type="text" class="form-control mb-3"
                            placeholder="Nhập địa chỉ">

                        <label class="form-label">Số Điện Thoại</label>
                        <input v-model="update.so_dien_thoai" type="tel" class="form-control mb-3"
                            placeholder="Nhập số điện thoại">

                        <label class="form-label">Hình Ảnh</label>
                        <input v-model="update.hinh_anh" type="text" class="form-control mb-3"
                            placeholder="Thêm hình ảnh">

                        <label class="form-label">Mật Khẩu</label>
                        <input v-model="update.mat_khau" type="password" class="form-control mb-3"
                            placeholder="Nhập mật khẩu">

                        <label class="form-label">Xác Nhận Mật Khẩu</label>
                        <input v-model="update.mat_khau_xac_nhan" type="password" class="form-control mb-3"
                            placeholder="Nhập lại mật khẩu">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer bg-info">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            v-on:click="capNhat()">Cập
                            nhật</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            update: {},
            del: {
                id_nhan_vien: "",
                ten_nhan_vien: "",
            },
            create: {
                ten_nhan_vien: "",
                email: "",
                dia_chi: "",
                so_dien_thoai: "",
                hinh_anh: "",
                mat_khau: "",
                mat_khau_xac_nhan: "",
            },
            list: [],
            search: {},
        };
    },

    mounted() {
        this.loadData();
    },

    methods: {
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/nhan-vien')
                .then((res) => {
                    this.list = res.data.data;
                })
                .catch((error) => {
                    console.error('Có lỗi khi tải dữ liệu:', error);
                });
        },
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/nhan-vien/create', this.create)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                        this.create = {};
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },

        xoa() {
            axios
                .delete(`http://127.0.0.1:8000/api/nhan-vien/${this.del.id_nhan_vien}`)
                .then((res) => {
                    if (res.data.status) {
                        this.list = this.list.filter((item) => item.id_nhan_vien !== this.del.id_nhan_vien);
                        this.$toast.success(res.data.message);
                    }
                })
                .catch((error) => {
                    if (error && error.response) {
                        const errors = error.response.data.errors || {};
                        if (Object.keys(errors).length > 0) {
                            Object.values(errors).forEach((v) => {
                                this.$toast.error(v[0]);
                            });
                        } else {
                            this.$toast.error(error.response.data.message || "Có lỗi xảy ra, vui lòng thử lại sau!");
                        }
                    } else {
                        this.$toast.error("Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng!");
                    }
                });
        },
        timKiem() {
            if (!this.search.noi_dung) {
                this.$toast.error("Vui lòng nhập nội dung tìm kiếm.");
                return;
            }

            axios
                .post("http://127.0.0.1:8000/api/nhan-vien/tim-kiem", this.search)
                .then((res) => {
                    this.list = res.data.data;
                })
                .catch((error) => {
                    const list = Object.values(error.response.data.errors || {});
                    list.forEach((v) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        capNhat() {
            axios
                .put(`http://127.0.0.1:8000/api/nhan-vien/${this.update.id_nhan_vien}`, this.update)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                        this.update = {}; 
                    }
                })
                .catch((error) => {
                    const errors = Object.values(error.response.data.errors || {});
                    errors.forEach((v) => {
                        this.$toast.error(v[0]);
                    });
                });
        }
    },
};
</script>

<style scoped>
.user-image {
    width: 80px;
    /* Đặt chiều rộng cố định */
    height: 80px;
    /* Đặt chiều cao cố định */
    object-fit: cover;
    /* Cắt ảnh theo khung, giữ tỷ lệ */
    border-radius: 50%;
    /* Làm ảnh tròn (tuỳ chọn) */
    border: 2px solid #ccc;
    /* Thêm viền (tuỳ chọn) */
}
</style>