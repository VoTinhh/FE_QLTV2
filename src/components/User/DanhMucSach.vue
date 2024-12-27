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
                                    <input type="text" class="form-control border-success ps-5" placeholder="Tìm sách">
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
                                        <li><a class="dropdown-item" href="#">comic</a></li>
                                        <li><a class="dropdown-item" href="#">novel</a></li>
                                        <li><a class="dropdown-item" href="#">science</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Book Listing Section -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid">
            <!-- Loop through books -->
            <div class="col" v-for="(book, index) in books" :key="index">
                <div class="card">
                    <img :src="book.image" class="card-img-top mt-2" alt="book image">
                    <div class="card-body">
                        <h5 class="card-title cursor-pointer">{{ book.title }}</h5>
                        <p>{{ book.author }}</p>
                        <hr class="border border-3 border-secondary">
                        <div class="clearfix text-end">
                            <a href="#" class="text-decoration-none text-warning" style="font-size: 0.8rem;">
                                Xem chi tiết
                                <i class="fa-solid fa-angles-right ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Example book data
            books: [
                {
                    title: "Vì cậu là bạn nhỏ của tớ",
                    author: "Tun Phạm",
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpk9pty2ci9ud3"
                },
                {
                    title: "Vì cậu là bạn nhỏ của tớ",
                    author: "Tun Phạm",
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpk9pty2ci9ud3"
                },
                {
                    title: "Vì cậu là bạn nhỏ của tớ",
                    author: "Tun Phạm",
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpk9pty2ci9ud3"
                },
                // Add more book objects as needed
            ]
        };
    }
};
</script>

<style scoped>
/* Add component-specific styles here */
.product-grid .card {
    margin-bottom: 15px;
}
</style>
