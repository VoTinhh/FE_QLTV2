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
.page-footer {
    background-color: #4db6ac; 
    color: #fff; 
    text-align: center;
    padding: 20px 0; 
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.footer-text {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: color 0.3s;
}

.footer-text:hover {
    color: #e0f2f1;
    cursor: pointer;
}

@media (max-width: 768px) {
    .footer-text {
        font-size: 14px;
    }
}
</style>