<template>
    <div class="container" v-if="book">
        <div>
            <div class="card mb-4 shadow-sm">
                <div class="card-body text-center bg-primary text-white rounded">
                    <h2 class="card-title mb-2">Chi Tiết Sách</h2>
                    <p class="mb-0">Khám phá thông tin chi tiết về cuốn sách bạn yêu thích.</p>
                </div>
            </div>
        </div>
        <div class="row d-flex">
            <div class="col-md-4">
                <div class="card h-100 shadow-lg border-0 rounded">
                    <div class="card-body bg-light rounded position-relative">
                        <div class="position-absolute top-0 end-0 m-2">
                            <span class="badge bg-danger text-uppercase fw-bold px-3 py-2 rounded-pill">Hot</span>
                        </div>
                        <img v-bind:src="book.hinh_anh?book.hinh_anh:''" class="img-fluid rounded-3 mb-3" alt="..." />

                        <hr />
                        <button v-on:click="them_Phieu_Muon()" style="width: 100%" class="btn btn-outline-success btn-lg rounded-0">
                            <i class="bx bx-bookmark"></i> Thêm vào phiếu mượn
                        </button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div v-if="book">
                    <div class="card h-100 shadow-lg rounded">
                        <div class="card-body bg-white rounded">
                            <div class="d-flex align-items-center mb-3 mt-2">
                                <h3 class="fs-2 fw-bold text-dark"
                                    style="font-family: 'Arial', sans-serif; font-style: italic">{{ book.ten_sach }}
                                </h3>
                                <bdi class="ms-3 fs-4 text-danger">
                                    {{ book.gia_tien }}&nbsp;
                                    <span class="woocommerce-Price-currencySymbol">vn₫</span>
                                </bdi>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <span class="badge bg-success me-3 p-2">Đang còn</span>
                                <span class="fs-5 text-dark">{{ book.so_luong }}</span>
                            </div>
                            <div class="mb-3">
                                <span class="fs-5 text-muted">Vị trí: Khu A Kệ 12 Ngăn 44</span>
                            </div>
                            <hr class="my-4" />
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3">
                                        <h6 class="fw-bold text-muted mb-1">Tác Giả</h6>
                                    </div>
                                    <div class="col-9">
                                        <span class="fs-5 text-dark">{{ book.tac_gia.ten_tac_gia }}</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-3">
                                        <h6 class="fw-bold text-muted mb-1">Nhà xuất bản</h6>
                                    </div>
                                    <div class="col-9">
                                        <span class="fs-5 text-dark">{{ book.nha_xuat_ban.ten_nha_xuat_ban }}</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-3">
                                        <h6 class="fw-bold text-muted mb-1">Vị trí</h6>
                                    </div>
                                    <div class="col-9">
                                        <span class="fs-5 text-dark">{{ book.vi_tri.ten_vi_tri }}</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-3">
                                        <h6 class="fw-bold text-muted">Thể Loại</h6>
                                    </div>
                                    <div class="col-9">
                                        <span class="fs-5 text-dark">Comic</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 align-items-center mb-3">
                                    <h6 class="fw-bold text-muted">Mô Tả Ngắn</h6>
                                </div>
                                <div class="col-8">
                                    <button class="btn btn-link p-0" data-bs-toggle="collapse"
                                        data-bs-target="#description" aria-expanded="false"
                                        aria-controls="description">Xem thêm</button>
                                </div>
                            </div>
                            <div class="collapse" id="description">
                                <p>{{ book.mo_ta }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>Đang tải thông tin...</p>
                </div>
            </div>
        </div>
        <div>
            <h4 class="text-uppercase mb-0 mt-5 d-flex align-items-center">
                Sách Nổi Bật
                <i class="fa-solid fa-fire text-danger mx-2"></i>
                <hr class="flex-grow-1 border-0" style="border-top: 2px solid #d9534f" />
            </h4>
            <hr />
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div class="col d-flex"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            book: null // Dữ liệu chi tiết sách
        };
    },
    created() {
        const bookId = this.$route.params.id; // Lấy id từ params
        this.fetchBookDetails(bookId); // Gọi API để lấy chi tiết sách
    },
    methods: {
        fetchBookDetails(bookId) {
            axios
                .get(`http://127.0.0.1:8000/api/sach/${bookId}`)
                .then(response => {
                    this.book = response.data.data;
                })
                .catch(error => {
                    console.error("Có lỗi khi lấy chi tiết sách", error);
                });
        },
        them_Phieu_Muon() {
            axios
                .post("http://127.0.0.1:8000/api/phieu-muon/",this.book)
                .then(response => {
                    if (response.data.status) {
                        alert("thêm phiếu mượn thành công")
                    }
                })
                .catch(error => {
                    console.error("Có lỗi khi lấy dữ liệu sách", error);
                });
        }
    }
};
</script>
<style scoped>
.hover-card:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}

.card-body .btn {
    transition: background-color 0.3s ease;
}

.card-body .btn:hover {
    background-color: #28a745;
}

.book-img {
    object-fit: cover;
    height: 100%;
}
</style>