<template>
    <footer class="page-footer">
        <div class="footer-content">
            <p class="footer-text mb-0">© 2024 Thư Viện. Tất cả quyền lợi được bảo vệ.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style scoped>
/* Styling the footer */
.page-footer {
    background-color: #8bcbdb; /* Màu hồng nhẹ */
    color: #fff; /* Chữ trắng */
    text-align: center;
    padding: 10px 0; /* Padding nhẹ */
    border-radius: 20px 20px 0 0; /* Góc bo tròn */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
}

/* Chữ footer */
.footer-text {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
}

/* Tạo hiệu ứng hover cho text */
.footer-text:hover {
    color: #f0f0f0;
    cursor: pointer;
}
</style>
