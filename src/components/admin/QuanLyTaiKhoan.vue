<template>
    <div class="card shadow">
        <div class="card-header bg-secondary text-white">
            <h3 class="mb-0 text-center">Danh Sách Tài Khoản Người Dùng</h3>
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
                            <th class="text-center">Xóa Tài Khoản</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(v, k) in list" :key="k">
                            <td class="text-center">{{ k + 1 }}</td>
                            <td class="text-center">
                                <img :src="v.hinh_anh ? v.hinh_anh : 'default-avatar.jpg'"
                                    class="user-image img-fluid rounded" alt="Hình ảnh">
                            </td>

                            <td class="text-center">{{ v.ten_nguoi_dung }}</td>
                            <td class="text-center">{{ v.email }}</td>
                            <td class="text-center">{{ v.dia_chi }}</td>
                            <td class="text-center">{{ v.so_dien_thoai }}</td>
                            <td class="text-center">
                                <button class="btn btn-sm btn-danger" v-on:click="Object.assign(del, v)">
                                    <i class="fas fa-trash-alt"></i> Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                                del.ten_nguoi_dung }}</b> này không?</h6>
                            <p class="mb-0 text-dark"><strong>LƯU Ý:</strong> Hành động này sẽ không thể hoàn tác!</p>
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

    
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            del: {
                id_nguoi_dung: "",
                ten_nguoi_dung: "",
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
                .get("http://127.0.0.1:8000/api/nguoi-dung")
                .then((res) => {
                    this.list = res.data.data;
                })
                .catch((error) => {
                    console.error("Có lỗi khi tải dữ liệu:", error);
                });
        },
        xoa() {
            axios
                .delete(`http://127.0.0.1:8000/api/nguoi-dung/${this.del.id_nguoi_dung}`)
                .then((res) => {
                    if (res.data.status) {
                        this.list = this.list.filter((item) => item.id_nguoi_dung !== this.del.id_nguoi_dung);
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
                .post("http://127.0.0.1:8000/api/nguoi-dung/tim-kiem", this.search)
                .then((res) => {
                    this.list = res.data.data;
                })
                .catch((error) => {
                    const list = Object.values(error.response.data.errors || {});
                    list.forEach((v) => {
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
