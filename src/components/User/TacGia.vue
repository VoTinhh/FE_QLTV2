
<template>
    <div class="page-wrapper">
        <div class="card  shadow-sm">
            <div class="card-body text-center bg-primary text-white rounded">
                <h2 class="card-title ">Thông Tin Tác Giả</h2>
                <p class="mb-0">Khám phá thông tin chi tiết về tác giả yêu thích của bạn.</p>
            </div>
        </div>

        <div class="page-content">
            <div v-if="tac_gia" class="row  d-flex align-items-stretch">
                <div class="col-md-4">
                    <div class="card h-100 shadow-lg border-0 rounded">
                        <div class="card-body bg-light rounded position-relative">
                            <img 
                                :src="tac_gia.hinh_anh" 
                                class="img-fluid rounded-3 mb-3 book-img"
                                alt="Hình ảnh tác giả" 
                            />
                        </div>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="card h-100 shadow-lg rounded">
                        <div class="card-body bg-white rounded">
                            <h3 class="fs-2 fw-bold text-dark" style="font-family: 'Arial', sans-serif; font-style: italic;">
                                {{ tac_gia.ten_tac_gia }}
                            </h3>

                            <div class="mt-3">
                                <h6 class="fw-bold text-muted mb-2">Tiểu Sử</h6>
                                <p class="text-dark fs-5">{{ tac_gia.tieu_su }}</p>
                            </div>

                            <hr class="my-4">

                            <div class="row">
                                <div class="col-4">
                                    <h6 class="fw-bold text-muted">Tác Phẩm</h6>
                                </div>
                                <div class="col-8">
                                    <button class="btn btn-link p-0" data-bs-toggle="collapse"
                                        data-bs-target="#tac-pham" aria-expanded="false" aria-controls="tac-pham">
                                        Xem danh sách
                                    </button>
                                </div>
                            </div>
                            <div class="collapse" id="tac-pham">
                                <ul>
                                    <li v-for="(tp, index) in tac_gia.tac_pham" :key="index">
                                        <span class="fs-5 text-dark">{{ tac_gia.tac_pham }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center">
                <p class="text-muted">Không có dữ liệu về tác giả.</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            tac_gia: null, // Khởi tạo null để kiểm tra trạng thái
        };
    },
    mounted() {
        this.layThongTinTacGia();
    },
    methods: {
        layThongTinTacGia() {
            axios
                .get(`http://127.0.0.1:8000/api/tac-gia/${this.$route.params.id}`)
                .then((res) => {
                    console.log(res); // Ghi lại phản hồi từ API
                    if (res.data && res.data.status) {
                        this.tac_gia = res.data.data;
                    } else {
                        this.$toast.error("Không tìm thấy tác giả.");
                        this.$router.push("/");
                    }
                })
                .catch((error) => {
                    console.error("Lỗi trong quá trình gọi API:", error);
                    this.$toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
                });
        },
    },
};
</script>

<style>
/* Thêm CSS tùy chỉnh nếu cần */
</style>
