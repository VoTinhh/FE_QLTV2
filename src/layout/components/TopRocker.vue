<template>
<header>
    <div class="topbar d-flex align-items-center">
        <nav class="navbar navbar-expand">
            <div class="topbar-logo-header">
                <div class="">
                    <img style="width: 60px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh-oINh22oXwgJ7GG5c8SEQeKQW_wCk3fdw&s" class="logo-icon" alt="logo icon">
                </div>
                <div class="">
                    <h4 class="logo-text">Thư Viện Admin</h4>
                </div>
            </div>
            <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
            <div class="search-bar flex-grow-1">
                <div class="position-relative search-bar-box">
                    <input type="text" class="form-control search-control"
                        placeholder="Type to search..."> <span
                        class="position-absolute top-50 search-show translate-middle-y"><i
                            class='bx bx-search'></i></span>
                    <span class="position-absolute top-50 search-close translate-middle-y"><i
                            class='bx bx-x'></i></span>
                </div>
            </div>
            <div class="user-box dropdown">
                <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://bizweb.dktcdn.net/100/418/981/products/z4844324734873-a402995347fddf76e21b8dc763f4a6e1-1699018261248.jpg?v=1699018265900" class="user-img" alt="user avatar">
                    <div class="user-info ps-3">
                        <p class="user-name mb-0">Huynh Hieu</p>
                        <p class="designattion mb-0">Web Designer</p>
                    </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <a  class="dropdown-item" href="javascript:;"><i
                                class='bx bx-log-out-circle'></i><span>Đăng Xuất</span></a>
                    </li>
                    <li>
                        <a  class="dropdown-item" href="javascript:;"><i class="fa-solid fa-right-from-bracket"></i>
                            <span>Đăng Xuất Tất Cả Thiết Bị</span></a>
                    </li>
                </ul>
                <li class="nav-item">
                    <router-link class="nav-link" to="/user/danh-muc-sach">
                        <div class="menu-title">❤️</div>
                    </router-link>
                </li>
            </div>
        </nav>
    </div>
</header>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>