<template>
  <div class="nav-container primary-menu" :style="{ position: 'absolute' }">
    <div class="mobile-topbar-header">
      <div>
        <router-link to="/">
          <img src="https://tanhoamai.com.vn/wp-content/uploads/2024/03/logo-social-mediajpg.webp" class="logo-icon" alt="logo icon" />
        </router-link>
      </div>
      <div class="toggle-icon ms-auto">
        <i class="bx bx-arrow-to-left"></i>
      </div>
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
        <!-- Tác giả -->
        <li class="nav-item">
          <router-link class="nav-link" to="/user/tac-gia">
            <div class="parent-icon"><i class="fa-solid fa-user"></i></div>
            <div class="menu-title">Tác Giả</div>
          </router-link>
        </li>
        <!-- Danh mục sách (Dropdown) -->
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
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
  background-color: #e0f7fa; /* Light cyan background */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar-nav .nav-link {
  color: #000;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-nav .nav-item {
  margin-right: 10px;
}

.nav-link:hover {
  background-color: #4db6ac;
  color: white;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, top 0.3s ease;
}

.nav-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
  pointer-events: auto;
  top: 110%;
}

.logo-icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
