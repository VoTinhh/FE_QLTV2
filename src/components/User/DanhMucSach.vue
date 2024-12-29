<template>
    <div>
        <!-- Search and Filter Section -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-xl-5 position-relative">
                                <div class="input-group">
                                    <input type="text" class="form-control border-success ps-5"
                                        placeholder="Tìm sách" />
                                    <span class="position-absolute top-50 start-0 translate-middle-y ms-3">
                                        <i class="bx bx-search-alt fs-5"></i>
                                    </span>
                                    <button type="button" class="btn btn-success">Tìm</button>
                                </div>
                            </div>
                            <div class="col-lg-9 col-xl-7 text-end">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-secondary">Thể Loại</button>
                                    <button id="btnGroupDrop1" type="button"
                                        class="btn btn-secondary split-bg-secondary dropdown-toggle dropdown-toggle-nocaret px-1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bx bx-slider"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="btnGroupDrop1">
                                        <li>
                                            <a class="dropdown-item" href="#">comic</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">novel</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">science</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Book Listing Section -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            <div class="col d-flex" v-for="(book, index) in books" :key="index">
                <div class="card" style="width: 100%; max-width: 18rem;">
                    <div class="card-header">
                        <img style="width: 100%; height: 100%; object-fit: cover;" :src="book.hinh_anh"
                            class="card-img-top mt-2" alt="book image" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title cursor-pointer" @click="goToBookDetail(book.id_sach)">{{ book.ten_sach }}
                        </h5>
                        <p>{{ book.tac_gia }}</p>
                        <hr class="border border-3 border-secondary" />
                        <div class="clearfix text-end">
                            <a href="#" @click="goToBookDetail(book.id_sach)" class="text-decoration-none text-warning"
                                style="font-size: 0.8rem;">
                                Xem chi tiết
                                <i class="fa-solid fa-angles-right ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Show error message if there's an issue fetching books -->
        <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            books: [],
            errorMessage: null
        };
    },
    created() {
        this.fetchBooks();
    },
    methods: {
        goToBookDetail(bookId) {
            // Điều hướng đến trang chi tiết sách với tham số id
            this.$router.push({ name: "chi-tiet-sach", params: { id: bookId } });
        },
        fetchBooks() {
            axios
                .get("http://127.0.0.1:8000/api/sach/")
                .then(response => {
                    this.books = response.data.data || response.data;
                })
                .catch(error => {
                    console.error("Có lỗi khi lấy dữ liệu sách", error);
                });
        }
    }
};
</script>

<style scoped>
/* Add your custom styles if needed */
</style>
