<template>
<<<<<<< HEAD
    <div class="nav-container primary-menu" :style="{ position: 'absolute' }">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/anhNen.png" class="logo-icon" alt="logo icon">
=======
  <div class="nav-container primary-menu áđâs mt-4" :style="{ position: 'absolute' }">
    <div class="mobile-topbar-header">
      <div>
        <router-link to="/">
          <img src="https://tanhoamai.com.vn/wp-content/uploads/2024/03/logo-social-mediajpg.webp" class="logo-icon" alt="logo icon" />
        </router-link>
      </div>
      <div>
      </div>
      <div class="toggle-icon ms-auto">
        <i class="bx bx-arrow-to-left"></i>
      </div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
      <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
        <li class="nav-item">
          <router-link class="nav-link" to="/user/lich-su-muon">
            <div class="parent-icon">
              <i class="fa-solid fa-table"></i>
>>>>>>> 84647e9d5520aeefff0e3714881773d5d1cb74ed
            </div>
            <div class="menu-title">Lịch sử mượn</div>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/user/thanh-toan">
            <div class="parent-icon">
              <i class="fa-solid fa-table"></i>
            </div>

            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i></div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <!-- Lịch sử mượn -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/lich-su-muon">
                        <div class="parent-icon"><i class="fa-solid fa-table"></i></div>
                        <div class="menu-title">Lịch Sử Mượn</div>
                    </router-link>
                </li>
                <!-- Thanh toán -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/thanh-toan">
                        <div class="parent-icon"><i class="fa-solid fa-table"></i></div>
                        <div class="menu-title">Thanh Toán</div>
                    </router-link>
                </li>
<<<<<<< HEAD
                <!-- Thể loại sách -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/phan-loai">
                        <div class="parent-icon"><i class="fa-solid fa-book"></i></div>
                        <div class="menu-title">Thể Loại Sách</div>
                    </router-link>
                </li>
                <!-- Tác giả -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/tac-gia">
=======
                
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/tac-gia1">
>>>>>>> 84647e9d5520aeefff0e3714881773d5d1cb74ed
                        <div class="parent-icon"><i class="fa-solid fa-user"></i></div>
                        <div class="menu-title">Tác Giả</div>
                    </router-link>
                </li>
<<<<<<< HEAD
                <!-- Nhà xuất bản -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/nha-xuat-ban">
                        <div class="parent-icon"><i class="fa-solid fa-user"></i></div>
                        <div class="menu-title">Nhà Xuất Bản</div>
                    </router-link>
                </li>
                <!-- Danh mục sách (Dropdown) -->
=======
                
>>>>>>> 84647e9d5520aeefff0e3714881773d5d1cb74ed
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-book-atlas"></i></div>
                        <div class="menu-title">Danh Mục Sách</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                            <router-link class="nav-link mt-2" to="/user/danh-muc-sach">
                                <div class="parent-icon"><i class="fa-solid fa-book-atlas"></i></div>
                                <div class="menu-title">Sách</div>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link mt-2" to="/user/chi-tiet-sach">
                                <div class="parent-icon"><i class="fa-solid fa-calendar-days"></i></div>
                                <div class="menu-title">Chi Tiết Sách</div>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <!-- Quản lý tài khoản cá nhân -->
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/quan-ly-tai-khoan-ca-nhan">
                        <div class="parent-icon"><i class="fa-regular fa-id-card"></i></div>
                        <div class="menu-title">Quản Lý Tài Khoản Cá Nhân</div>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>

</template>
  
  <script>
export default {
    // Không có logic cần thiết
};
</script>
  
  <style scoped>
.nav-container.primary-menu {
<<<<<<< HEAD
    background-color: rgb(173, 216, 230);
    /* Màu nền xanh nhạt */
}

.navbar-nav .nav-link {
    color: #000;
    /* Màu chữ đen */
    font-weight: 600;
}

.navbar-nav .nav-item {
    margin-right: 10px;
    /* Khoảng cách giữa các mục */
=======
  background-color: #e0f7fa; /* Light cyan background */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.mobile-topbar-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* Làm cho logo tròn */
  object-fit: cover; /* Đảm bảo logo không bị méo */
}

.logo-text {
  font-size: 1.5rem; /* Kích thước chữ cho logo */
  color: #00796b; /* Màu chữ cho logo */
  margin-left: 10px; /* Khoảng cách giữa logo và tên */
}

.navbar-nav .nav-link {
  color: #000; /* Màu chữ */
  font-weight: 600; /* Đậm chữ */
  padding: 10px 15px; /* Padding cho các mục menu */
  border-radius: 5px; /* Bo tròn các góc */
  transition: background-color 0.3s ease; /* Hiệu ứng chuyển màu nền */
}

.navbar-nav .nav-item {
  margin-right: 10px; /* Khoảng cách giữa các mục menu */
>>>>>>> 84647e9d5520aeefff0e3714881773d5d1cb74ed
}

/* Dropdown styling */
.nav-item .dropdown-menu {
<<<<<<< HEAD
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #34495e;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, top 0.3s ease;
    z-index: 1000;
}

.nav-item:hover .dropdown-menu {
    display: block;
    opacity: 1;
    pointer-events: auto;
    top: 110%;
    /* Điều chỉnh tránh clipping */
=======
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff; /* Màu nền cho dropdown */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, top 0.3s ease;
  z-index: 1000;
}

.nav-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
  pointer-events: auto;
  top: 110%; /* Điều chỉnh để tránh clipping */
>>>>>>> 84647e9d5520aeefff0e3714881773d5d1cb74ed
}

/* Hiệu ứng hover */
.nav-link:hover {
<<<<<<< HEAD
    background-color: #3a7bd5;
    /* Màu xanh hover */
    border-radius: 5px;
}

.dropdown-item:hover {
    background-color: #4caf50;
    /* Màu nền xanh lá khi hover */
    color: white;
    border-radius: 5px;
}

/* Kích thước logo */
.logo-icon {
    width: 50px;
    height: 50px;
=======
  background-color: #4db6ac; /* Màu nền khi hover */
  color: white; /* Màu chữ khi hover */
  border-radius: 5px; /* Bo tròn các góc */
}

.dropdown-item:hover {
  background-color: #4caf50; /* Màu nền cho các mục dropdown khi hover */
  color: white; /* Màu chữ cho các mục dropdown khi hover */
  border-radius: 5px; /* Bo tròn các góc */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .mobile-topbar-header {
    flex-direction: column; /* Đặt logo và tên theo chiều dọc trên màn hình nhỏ */
    align-items: flex-start; /* Căn trái */
  }

  .navbar-nav {
    flex-direction: column; /* Đặt các mục menu theo chiều dọc */
  }

  .navbar-nav .nav-item {
    margin-right: 0; /* Bỏ khoảng cách bên phải */
    margin-bottom: 10px; /* Thêm khoảng cách dưới mỗi mục */
  }
>>>>>>> 84647e9d5520aeefff0e3714881773d5d1cb74ed
}
</style>