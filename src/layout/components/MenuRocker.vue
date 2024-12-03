<template>
  <div class="nav-container primary-menu testádftg" style="display: absolute;">
    <div class="mobile-topbar-header">
      <div>
        <img
          src="https://photo.znews.vn/w660/Uploaded/natmts/2023_02_03/z4080571344877_dcc05eb033d9e910039ad77df6eb1b05.jpg"
          class="logo-icon"
          alt="logo icon"
        />
      </div>
      <div>
        <h4 class="logo-text">Rukada</h4>
      </div>
      <div class="toggle-icon ms-auto">
        <i class="bx bx-arrow-to-left"></i>
      </div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
      <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/hoa-don">
            <div class="parent-icon">
              <i class="fa-solid fa-table"></i>
            </div>
            <div class="menu-title">Hóa Đơn</div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style></style>