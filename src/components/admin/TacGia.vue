<template>
    <div class="container mt-4">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white rounded-top">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Danh Mục Tác Giả</h5>
                    <button class="btn btn-light text-primary shadow-sm" data-bs-toggle="modal"
                        data-bs-target="#addModal">
                        <i class="fas fa-plus me-1"></i> Thêm Tác Giả
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle shadow-sm">
                        <thead class="table-light">
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group">
                                        <input type="text" class="form-control rounded-start" placeholder="Tìm kiếm...">
                                        <button class="btn btn-primary rounded-end" type="button">
                                            <i class="bx bx-search"></i> Tìm
                                        </button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Hình Ảnh</th>
                                <th class="text-center">Tác Giả</th>
                                <th class="text-center">Tiểu Sử</th>
                                <th class="text-center">Tác Phẩm</th>
                                <th class="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list" :key="index">
                                <tr class="table-row-hover">
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td class="align-middle text-center">
                                        <img :src="value.hinh_anh" alt="" class="img-fluid" style="max-height: 200px;">
                                    </td>
                                    <td class="align-middle text-wrap">{{ value.ten_tac_gia }}</td>
                                    <td class="align-middle text-wrap">{{ value.tieu_su }}</td>
                                    <td class="align-middle text-wrap">{{ value.tac_pham }}</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-primary me-2 shadow-sm" data-bs-toggle="modal"
                                            data-bs-target="#editModal" @click="edit_tac_gia = { ...value }">
                                            <i class="fas fa-edit"></i> Chỉnh Sửa
                                        </button>
                                        <button class="btn btn-sm btn-danger shadow-sm" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal" @click="delete_tac_gia = { ...value }">
                                            <i class="fas fa-trash-alt"></i> Xóa
                                        </button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Thêm Mới -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">Thêm Mới Tác Giả</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Hình Ảnh</label>
                                <input v-model="create_tac_gia.hinh_anh" type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Tên Tác Giả</label>
                                <input v-model="create_tac_gia.ten_tac_gia" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Tác Phẩm</label>
                                <input v-model="create_tac_gia.tac_pham" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tiểu Sử</label>
                            <textarea v-model="create_tac_gia.tieu_su" class="form-control" rows="4"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-success" @click="themMoiTacGia()">Thêm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Chỉnh Sửa -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-warning text-white">
                    <h5 class="modal-title">Chỉnh Sửa Tác Giả</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label class="form-label">Tên Tác Giả</label>
                                <input v-model="edit_tac_gia.ten_tac_gia" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Tác Phẩm</label>
                                <input v-model="edit_tac_gia.tac_pham" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tiểu Sử</label>
                            <textarea v-model="edit_tac_gia.tieu_su" class="form-control" rows="4"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-warning" @click="capnhatTacGia()">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Xóa Tác Giả</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Bạn có chắc chắn muốn xóa <b>{{ delete_tac_gia.ten_tac_gia }}</b> không?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="xoaTacGia()">Xóa</button>
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
            list: [],
            create_tac_gia: {
                ten_tac_gia: "",
                tieu_su: "",
                hinh_anh: "",
                tac_pham: "",
            },
            edit_tac_gia: {
                id: null,
                ten_tac_gia: "",
                tieu_su: "",
                hinh_anh: "",
                tac_pham: "",
            },
            delete_tac_gia: {
                id: null,
                ten_tac_gia: "",
            },
        };
    },
    mounted() {
        this.layDataTacGia();
    },
    methods: {
        layDataTacGia() {
            axios.get("http://127.0.0.1:8000/api/tac-gia/data").then((res) => {
                this.list = res.data.data;
            });
        },
        themMoiTacGia() {
            axios.post("http://127.0.0.1:8000/api/tac-gia/create", this.create_tac_gia).then((res) => {
                if (res.data.status) {
                    this.$toast.success("Thêm tác giả thành công!");
                    this.layDataTacGia();
                    this.create_tac_gia = {
                        ten_tac_gia: "",
                        tieu_su: "",
                        hinh_anh: "",
                        tac_pham: "",
                    };
                } else {
                    this.$toast.error("Thêm tác giả thất bại!");
                }
            });
        },
        capnhatTacGia() {
            axios.put(`http://127.0.0.1:8000/api/tac-gia/${this.edit_tac_gia.id}`, this.edit_tac_gia).then((res) => {
                if (res.data.status) {
                    this.$toast.success("Cập nhật tác giả thành công!");
                    this.layDataTacGia();
                } else {
                    this.$toast.error("Cập nhật tác giả thất bại!");
                }
            });
        },
        xoaTacGia() {
            axios
                .delete(`http://127.0.0.1:8000/api/tac-gia/delete/${this.delete_tac_gia.id}`)
                .then((res) => {
                    const thong_bao = `<b>Thông báo</b><span style="margin-top: 5px">${res.data.message}<span>`;
                    if (res.data.status) {
                        this.$toast.success(thong_bao);
                        this.layDataTacGia();
                    } else {
                        this.$toast.error(thong_bao);
                    }
                })
                .catch((error) => {
                    const thong_bao = `<b>Lỗi</b><span style="margin-top: 5px">${error.message}<span>`;
                    this.$toast.error(thong_bao);
                });
        }

    },
};
</script>
