<template>
    <div class="container mt-4">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white rounded-top">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Danh Mục </h5>
                    <button class="btn btn-light text-primary shadow-sm" data-bs-toggle="modal"
                        data-bs-target="#addModal">
                        <i class="fas fa-plus me-1"></i> Thêm Thể Loại
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


                                <th class="text-center">Thể Loại</th>



                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(value, index) in list" :key="index">
                                <td class="align-middle text-center">{{ index + 1 }}</td>
                                <td class="align-middle text-wrap">{{ value.ten_phan_loai }}</td>
                                <td class="text-center">
                                    
                                    <button class="btn btn-sm btn-primary me-2 shadow-sm" data-bs-toggle="modal"
                                            data-bs-target="#editModal" @click="edit_phan_loai = { ...value }">
                                            <i class="fas fa-edit"></i> Chỉnh Sửa
                                        </button>
                                        <button class="btn btn-sm btn-danger shadow-sm" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal" @click="delete_phan_loai = { ...value }">
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

    <!-- Modal thêm NXB-->
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm Mới </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="nameInput" class="form-label">Thể Loại</label>
                                <input v-model="create_phan_loai.ten_phan_loai" type="text" class="form-control">
                            </div>
                        </div>



                        <div class="row mb-3">


                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-success" @click="themMoi()">Thêm </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal chỉnh sửa-->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-warning text-white">
                    <h5 class="modal-title" id="exampleModalLabel">Chỉnh Sửa </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row mb-3">

                            <div class="col-md-6">
                                <label for="nameInput" class="form-label">Tên Nhà Xuất Bản</label>
                                <input v-model="edit_phan_loai.ten_phan_loai" type="text" class="form-control">
                            </div>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-warning" @click="capnhat()">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal xoá-->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger d-flex align-items-center">
                        <div class="me-3">
                            <i class="bx bxs-message-square-x text-dark" style="font-size: 2rem;"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-dark fw-bold">Bạn có chắc chắn muốn xóa không?</h6>
                            <p class="mb-0 text-dark"><strong>LƯU Ý:</strong> Hành động này sẽ không thể hoàn tác!</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="xoa()">Xác Nhận Xóa</button>
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
            create_phan_loai: {
                ten_phan_loai: "",

            },
            edit_phan_loai: {
                id: null,
                ten_phan_loai: "",
            },
            delete_phan_loai: {
                id: null,
                ten_phan_loai: "",
            },
        };
    },
    mounted() {
        this.layData();
    },
    methods: {
        layData() {
            axios.get("http://127.0.0.1:8000/api/phan-loai/data").then((res) => {
                this.list = res.data.data;
            });
        },
        themMoi() {
            axios.post("http://127.0.0.1:8000/api/phan-loai/create", this.create_phan_loai).then((res) => {
                if (res.data.status) {
                    this.$toast.success("Thêm  thành công!");
                    this.layData();
                    this.create_tac_gia = {
                        ten_phan_loai: "",

                    };
                } else {
                    this.$toast.error("Thêm  thất bại!");
                }
            });
        },
        capnhat() {
            axios.put(`http://127.0.0.1:8000/api/phan-loai/${this.edit_phan_loai.id}`, this.edit_phan_loai).then((res) => {
                if (res.data.status) {
                    this.$toast.success("Cập nhật  thành công!");
                    this.layData();
                } else {
                    this.$toast.error("Cập nhật  thất bại!");
                }
            });
        },
        xoa() {
            axios
                .delete(`http://127.0.0.1:8000/api/phan-loai/delete/${this.delete_phan_loai.id}`)
                .then((res) => {
                    const thong_bao = `<b>Thông báo</b><span style="margin-top: 5px">${res.data.message}<span>`;
                    if (res.data.status) {
                        this.$toast.success(thong_bao);
                        this.layData();
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

<style></style>
