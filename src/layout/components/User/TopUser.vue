<template>
  <nav class="navbar navbar-expand custom-navbar">
    <div class="topbar-logo-header">
      <div class="logo-container">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh-oINh22oXwgJ7GG5c8SEQeKQW_wCk3fdw&s"
            class="logo-icon"
            alt="logo icon"
          />
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
        <input type="text" class="form-control search-control" placeholder="Type to search..." />
        <span class="position-absolute top-50 search-show translate-middle-y">
          <i class="bx bx-search"></i>
        </span>
        <span class="position-absolute top-50 search-close translate-middle-y">
          <i class="bx bx-x"></i>
        </span>
      </div>
    </div>
    <router-link to="/user/phieu-muon">
      <div>
        <i class="fa-regular fa-folder fs-3" style="color: black;"></i>
      </div>
    </router-link>
    <div class="user-box dropdown">
      <a
        class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://bizweb.dktcdn.net/100/418/981/products/z4844324734873-a402995347fddf76e21b8dc763f4a6e1-1699018261248.jpg?v=1699018265900"
          class="user-img"
          alt="user avatar"
        />
        <div class="user-info ps-3">
          <p class="user-name mb-0">Huynh Hieu</p>
          <p class="designattion mb-0">Web Designer</p>
        </div>
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <a class="dropdown-item" href="javascript:;">
            <i class="bx bx-log-out-circle"></i>
            <span>Đăng Xuất</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;">
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Đăng Xuất Tất Cả Thiết Bị</span>
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
export default {
  // Your script logic here if needed
};
</script>

<style scoped>
.custom-navbar {
  background-color: rgb(
    115,
    183,
    206
  ); /* Change to desired color (green in this case) */
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa; /* Light background */
}

/* Styling the logo image */
.logo-icon {
  width: 80px;
  height: auto;
}

/* Styling the text */
.logo-text {
  font-family: "Lora", serif;
  font-weight: 700;
  font-size: 2rem; /* Larger text */
  color: #333; /* Dark color */
  margin-left: 15px;
  letter-spacing: 2px; /* Spacing between letters */
}
</style>
