<template>
    <div class="container-fluid">
      <div class="row d-flex">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <!-- Carousel Indicators -->
                <div class="carousel-indicators">
                  <button
                    v-for="(slide, index) in slides"
                    :key="index"
                    type="button"
                    :data-bs-target="'#carouselExampleCaptions'"
                    :data-bs-slide-to="index"
                    :class="{ active: index === currentIndex }"
                    :aria-current="index === currentIndex ? 'true' : null"
                    :aria-label="'Slide ' + (index + 1)"
                  ></button>
                </div>
  
                <!-- Carousel Items -->
                <div class="carousel-inner">
                  <div
                    v-for="(slide, index) in slides"
                    :key="index"
                    class="carousel-item"
                    :class="{ active: index === currentIndex }"
                  >
                    <img :src="slide.image" class="d-block w-100" :alt="slide.alt" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{{ slide.title }}</h5>
                      <p>{{ slide.description }}</p>
                    </div>
                  </div>
                </div>
  
                <!-- Navigation Buttons -->
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                  @click="prevSlide"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                  @click="nextSlide"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <img
            style="height: 330px;"
            src="https://innhanhsieuviet.com/wp-content/uploads/2021/04/in-poster-quang-cao.jpg"
            alt="Promotional Poster"
          />
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <img
                style="height: 500px;"
                src="//bizweb.dktcdn.net/100/363/455/files/trang-web-14.png?v=1697544634262"
                alt="Library Interior"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <header class="text-center my-5">
                <h1 class="display-4">Chào Mừng Đến Với Thư Viện</h1>
                <img
                  src="https://d3.violet.vn/uploads/previews/document/0/908/416/Sach_dong2.gif"
                  alt="Welcome Image"
                />
                <p class="lead mt-3">Khám phá thế giới tri thức và văn hóa qua hàng triệu cuốn sách.</p>
                <router-link to="/books" class="btn btn-primary btn-lg">Khám Phá Ngay</router-link>
            </header>
          </div>
        </div>
      </div>
    </div>
    <div class="product-collection">
      <div class="product-collection-header" :style="{ backgroundColor: '#FCDDEF' }">
        <div class="product-collection-img">
          <img
            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_sachtrongnuoc.svg"
            alt="Collection Icon"
          />
        </div>
        <div class="product-collection-title">BỘ SƯU TẬP NỔI BẬT</div>
      </div>

      <div class="product-collection-slider">
        <div v-for="(item, index) in collections" :key="index" class="product-collection-item">
          <div>
            <a>
              <img :src="item.image" class="product-collection-image" :alt="item.name" />
            </a>
          </div>
          <div class="product-collection-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <section class="my-5 text-center">
      <h2 class="display-5">Dịch Vụ Của Chúng Tôi</h2>
      <div class="row">
        <div v-for="(service, index) in services" :key="index" class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text">{{ service.description }}</p>
              <router-link :to="service.link" class="btn btn-secondary">Tìm Hiểu Thêm</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-5">
      <h2 class="text-center display-5">Sách Nổi Bật</h2>
      <div class="row">
        <div v-for="(book, index) in featuredBooks" :key="index" class="col-md-3">
          <div class="card">
            <img
              style="width: 100%; height: 400px;"
              :src="book.image"
              class="card-img-top"
              :alt="book.alt"
            />
            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">{{ book.description }}</p>
              <router-link :to="book.link" class="btn btn-primary">Xem Chi Tiết</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collections: [
        {
          name: "Doraemon",
          image:
            "https://upload.wikimedia.org/wikipedia/vi/b/b7/Doraemon1.jpg",
        },
        {
          name: "Capybara",
          image:
            "https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012028_1.jpg",
        },
        {
          name: "Conan",
          image:
            "https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tap-100---ban-thuong_3.jpg",
        },
        {
          name: "One Piece",
          image:
            "https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
        },
        {
          name: "Panda - Gấu trúc",
          image:
            "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx6qriy8pqe3ae",
        },
        {
          name: "Disney",
          image:
            "https://icdn.dantri.com.vn/7Yd6PqiCccccccccccccIOEWuXGaJ/Image/2014/11/sach1-7f926.jpg",
        },
        {
          name: "Sanrio",
          image:
            "https://product.hstatic.net/200000159347/product/44e0a71dbb4e492abb454ee2663bae46_0737cfbd49c34c8da28cbe7e879d6d5e_master.jpeg",
        },
        {
          name: "Pokémon",
          image:
            "https://down-vn.img.susercontent.com/file/902acfc241b942c57902f96559677d1e",
        }
      ],
      currentIndex: 0,
      slides: [
        {
          image:
            "//bizweb.dktcdn.net/100/202/714/files/chup-anh-quang-cao-sach-cho-khach-hang-ha-noi-02.jpg?v=1529050316500",
          title: "Khám Phá Thế Giới Sách",
          description: "Tìm hiểu về những cuốn sách nổi bật và mới nhất.",
          alt: "First slide image"
        },
        {
          image:
            "//bizweb.dktcdn.net/100/202/714/files/chup-anh-quang-cao-sach-cho-khach-hang-ha-noi-03.jpg?v=1529050326118",
          title: "Sự Kiện Đặc Biệt",
          description: "Tham gia các sự kiện thú vị tại thư viện.",
          alt: "Second slide image"
        },
        {
          image:
            "//bizweb.dktcdn.net/100/202/714/files/chup-anh-quang-cao-sach-cho-khach-hang-ha-noi-09.jpg?v=1529050357284",
          title: "Đọc Sách Trực Tuyến",
          description: "Truy cập hàng triệu cuốn sách trực tuyến.",
          alt: "Third slide image"
        }
      ],
      services: [
        {
          title: "Mượn Sách",
          description:
            "Mượn sách dễ dàng và nhanh chóng với hệ thống quản lý hiện đại.",
          link: "/borrow"
        },
        {
          title: "Đọc Sách Trực Tuyến",
          description:
            "Truy cập hàng triệu cuốn sách trực tuyến mọi lúc mọi nơi.",
          link: "/online-reading"
        },
        {
          title: "Sự Kiện",
          description: "Tham gia các sự kiện thú vị và bổ ích tại thư viện.",
          link: "/events"
        }
      ],
      featuredBooks: [
        {
          image:
            "https://cdn0.fahasa.com/media/catalog/product/9/7/9784832273726.jpg",
          title: "Sách 1",
          description: "Mô tả ngắn gọn về sách 1.",
          link: "/book/1",
          alt: "Sách 1"
        },
        {
          image:
            "https://cdn0.fahasa.com/media/catalog/product/a/n/anime-comics-one-piece-stampede_bia_tap-2.jpg",
          title: "Sách 2",
          description: "Mô tả ngắn gọn về sách 2.",
          link: "/book/2",
          alt: "Sách 2"
        },
        {
          image:
            "https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_4139.jpg",
          title: "Sách 3",
          description: "Mô tả ngắn gọn về sách 3.",
          link: "/book/3",
          alt: "Sách 3"
        },
        {
          image:
            "https://cdn0.fahasa.com/media/catalog/product/a/n/anime-comics-one-piece-stampede_bia_tap-1.jpg",
          title: "Sách 4",
          description: "Mô tả ngắn gọn về sách 4.",
          link: "/book/4",
          alt: "Sách 4"
        }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.collections.length - 1
          : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex === this.collections.length - 1
          ? 0
          : this.currentIndex + 1;
    }
  }
};
</script>

<style scoped>
header {
  background-color: rgba(77, 182, 172, 0.8);
  color: #fff;
  padding: 50px 0;
  border-radius: 0 0 20px 20px;
}

.carousel-indicators button {
  background-color: rgba(0, 0, 0, 0.5);
}

.carousel-caption h5 {
  font-size: 1.5rem;
  font-weight: bold;
}

.carousel-caption p {
  font-size: 1rem;
  color: #f8f9fa;
}

.card {
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  font-size: 1rem;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-secondary {
  background-color: #6c757d;
  border: none;
}

.btn-primary:hover,
.btn-secondary:hover {
  opacity: 0.8;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.product-collection {
  margin: 20px 0;
}

.product-collection-header {
  display: flex;
  align-items: center;
  padding: 10px;
}

.product-collection-img img {
  width: 50px;
  height: 50px;
}

.product-collection-title {
  font-size: 1.5rem;
  margin-left: 10px;
}

.product-collection-slider {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.product-collection-item {
  min-width: 200px;
}

.product-collection-image {
  width: 100%;
  height: auto;
}

.product-collection-name {
  text-align: center;
  font-weight: bold;
}

.product-collection-controls {
  text-align: center;
  margin-top: 20px;
}
</style>