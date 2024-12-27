<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4>Danh Sách Tác Giả</h4>
                    <div class="position-relative mt-3">
                        <input v-model="search_author" type="text" class="form-control ps-5" placeholder="Tìm kiếm tác giả...">
                        <span class="position-absolute top-50 translate-middle-y product-show"><i class="bx bx-search"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        <template v-for="(author, index) in filteredAuthors" :key="index">
            <div class="col d-flex">
                <div class="card flex-fill">
                    <img :src="author.hinh_anh" class="card-img-top" alt="Ảnh tác giả" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h6 class="card-title">{{ author.ten_tac_gia }}</h6>
                        <p class="card-text">{{ author.tieu_su }}</p>
                        <p class="card-text"><strong>Tác phẩm:</strong> {{ author.tac_pham }}</p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            list_tac_gia: [], // Danh sách tác giả
            search_author: '', // Tìm kiếm tác giả
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get('http://127.0.0.1:8000/api/danh-sach-tac-gia') // API lấy danh sách tác giả
                .then((res) => {
                    if (res.data.status) {
                        this.list_tac_gia = res.data.data; // Gán dữ liệu API vào danh sách
                    } else {
                        this.$toast.error("Không thể tải danh sách tác giả.");
                    }
                })
                .catch(() => {
                    this.$toast.error("Đã xảy ra lỗi khi kết nối tới server.");
                });
        },
    },
    computed: {
        filteredAuthors() {
            return this.list_tac_gia.filter((author) => {
                return this.search_author === '' || author.ten_tac_gia.toLowerCase().includes(this.search_author.toLowerCase());
            });
        }
    }
}
</script>


<style>
.card-img-top {
    border-radius: 8px;
}
</style>
