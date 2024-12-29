<template>
  <nav class="navbar navbar-expand custom-navbar">
    <div class="topbar-logo-header">
      <div class="logo-container">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh-oINh22oXwgJ7GG5c8SEQeKQW_wCk3fdw&s"
            class="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 class="logo-text">THƯ VIỆN</h4>
        </div>
      </div>
    </div>
    <div class="mobile-toggle-menu">
      <i class="bx bx-menu"></i>
    </div>
    <div class="search-bar flex-grow-1">
      <div class="position-relative search-bar-box">
        <input type="text" class="form-control search-control"/>
        <span class="position-absolute top-50 search-show translate-middle-y">
          <i class="bx bx-search"></i>
        </span>
        <span class="position-absolute top-50 search-close translate-middle-y">
          <i class="bx bx-x"></i>
        </span>
      </div>
    </div>
    <router-link to="/user/phieu-muon">
      <div class="icon-container">
        <i class="fa-regular fa-folder fs-3" style="color: black;"></i>
      </div>
    </router-link>
    <div class="user-box dropdown">
      <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button"
        data-bs-toggle="dropdown" aria-expanded="false">
        <img
          src="https://bizweb.dktcdn.net/100/418/981/products/z4844324734873-a402995347fddf76e21b8dc763f4a6e1-1699018261248.jpg?v=1699018265900"
          class="user-img" alt="user avatar" />
        <div class="user-info ps-3">
          <p class="user-name mb-0">Huynh Hieu</p>
          <p class="designation mb-0">Web Designer</p>
        </div>
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li @click="logout">
          <a class="dropdown-item" href="javascript:;">
            <i class="bx bx-log-out-circle"></i>
            <span>Đăng Xuất</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;">
            <router-link class="nav-link" to="/user/quan-ly-tai-khoan-ca-nhan">
            <div class="menu-title">Tài Khoản</div>
          </router-link>
          </a>
        </li>
      </ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin/phieu-muon">
          <div class="menu-title">❤️</div>
        </router-link>
      </li>
    </div>
  </nav>
</template>

<script>
import axios from "../../../axios";

export default {
  data() {
    return {
     
    };
  },
  methods: {
    logout(){
      axios
      .get("nguoi-dung/dang-xuat")
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res)
        localStorage.removeItem('token');
        this.$router.push('/user/dang-nhap')
      })
    },
    
  },
};
</script>

<style scoped>
.custom-navbar {
  background-color: #4db6ac;
  /* Màu nền navbar */
  padding: 10px 20px;
  /* Padding cho navbar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Đổ bóng nhẹ */
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Styling the logo image */
.logo-icon {
  width: 80px;
  height: auto;
  border-radius: 5px;
  /* Bo tròn các góc của logo */
}

/* Styling the text */
.logo-text {
  font-family: "Lora", serif;
  font-weight: 700;
  font-size: 2rem;
  /* Kích thước chữ lớn hơn */
  color: #fff;
  /* Màu chữ trắng */
  margin-left: 15px;
  letter-spacing: 2px;
  /* Khoảng cách giữa các chữ cái */
}

/* Search bar styling */
.search-bar {
  position: relative;
}

.search-control {
  border-radius: 20px;
  /* Bo tròn các góc của ô tìm kiếm */
  padding: 10px 20px;
  /* Padding cho ô tìm kiếm */
  border: 1px solid #ccc;
  /* Đường viền nhẹ */
  transition: border-color 0.3s;
  /* Hiệu ứng chuyển màu viền */
}

.search-control:focus {
  border-color: #00796b;
  /* Màu viền khi ô tìm kiếm được chọn */
  outline: none;
  /* Bỏ viền mặc định */
}

/* Icon container */
.icon-container {
  display: flex;
  align-items: center;
  margin-left: 20px;
  /* Khoảng cách giữa các biểu tượng */
  cursor: pointer;
  /* Con trỏ khi hover */
}

/* User box styling */
.user-box {
  display: flex;
  align-items: center;
  margin-left: auto;
  /* Đẩy user box sang bên phải */
}

.user-img {
  width: 40px;
  /* Kích thước ảnh đại diện */
  height: 40px;
  /* Kích thước ảnh đại diện */
  border-radius: 50%;
  /* Làm cho ảnh đại diện tròn */
  border: 2px solid #fff;
  /* Đường viền trắng quanh ảnh đại diện */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* Đổ bóng cho ảnh đại diện */
}

.user-info {
  color: #fff;
  /* Màu chữ cho thông tin người dùng */
}

.user-name {
  font-weight: 600;
  /* Đậm chữ cho tên người dùng */
}

.designation {
  font-size: 0.9rem;
  /* Kích thước chữ nhỏ hơn cho chức danh */
}

/* Dropdown menu styling */
.dropdown-menu {
  border-radius: 8px;
  /* Bo tròn các góc của menu dropdown */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* Đổ bóng cho menu dropdown */
}

.dropdown-item {
  display: flex;
  align-items: center;
  /* Căn giữa các mục trong dropdown */
  padding: 10px 15px;
  /* Padding cho các mục dropdown */
  color: #333;
  /* Màu chữ cho các mục dropdown */
  transition: background-color 0.3s;
  /* Hiệu ứng chuyển màu nền */
}

.dropdown-item:hover {
  background-color: #e0f2f1;
  /* Màu nền khi hover */
  color: #00796b;
  /* Màu chữ khi hover */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .custom-navbar {
    flex-direction: column;
    /* Đặt navbar theo chiều dọc trên màn hình nhỏ */
  }

  .search-bar {
    margin-top: 10px;
    /* Khoảng cách trên cho ô tìm kiếm */
  }

  .icon-container {
    margin-left: 0;
    /* Bỏ khoảng cách bên trái cho biểu tượng */
  }

  .user-box {
    margin-left: 0;
    /* Bỏ khoảng cách bên trái cho user box */
  }
}
</style>