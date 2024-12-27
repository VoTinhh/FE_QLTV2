<template>
    <div class="login-container d-flex justify-content-center align-items-center">
        <div class="title text-center mb-4">Đăng Ký Tài Khoản</div>

        <div class="form-wrapper">
            <form @submit.prevent="handleSubmit" class="form-container p-4 rounded">
                <!-- Họ và Tên -->
                <div class="mb-3">
                    <label for="name" class="mb-2">Họ Và Tên :</label>
                    <input id="name" v-model="name" type="text" placeholder="Nhập họ và tên" class="form-control" required />
                </div>

                <!-- Giới Tính -->
                <div class="mb-3">
                    <label for="gender" class="mb-2">Giới Tính :</label>
                    <select id="gender" v-model="gender" class="form-control" required>
                        <option value="" disabled>Chọn giới tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>

                <!-- Email -->
                <div class="mb-3">
                    <label for="email" class="mb-2">Email :</label>
                    <input id="email" v-model="email" type="email" placeholder="Nhập vào Email" class="form-control" required />
                </div>

                <!-- Địa Chỉ -->
                <div class="mb-3">
                    <label for="address" class="mb-2">Địa Chỉ :</label>
                    <input id="address" v-model="address" type="text" placeholder="Nhập địa chỉ" class="form-control" required />
                </div>

                <!-- Mật Khẩu -->
                <div class="mb-3">
                    <label for="password" class="mb-2">Mật Khẩu :</label>
                    <input id="password" v-model="password" type="password" placeholder="Nhập vào mật khẩu" class="form-control" required />
                </div>

                <!-- Nhập Lại Mật Khẩu -->
                <div class="mb-3">
                    <label for="confirmPassword" class="mb-2">Nhập Lại Mật Khẩu :</label>
                    <input id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Nhập lại mật khẩu" class="form-control" required />
                </div>

                <!-- Buttons -->
                <div class="d-flex justify-content-between mt-4">
                    <button type="submit" class="btn btn-outline-success">
                        <i class="fa-solid fa-user-plus"></i> Xác Nhận Đăng Ký
                    </button>
                    <router-link to="/user/dang-nhap" class="btn btn-outline-secondary">Tới Đăng Nhập</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignUpForm",
    data() {
        return {
            name: "",
            gender: "",
            email: "",
            address: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        handleSubmit() {
            if (this.password !== this.confirmPassword) {
                alert("Mật khẩu không khớp!");
                return;
            }
            // Xử lý dữ liệu
            alert("Đăng ký thành công!");
        },
    },
};
</script>

<style scoped>
/* Background */
.login-container {
    height: 100vh;
    background: url("https://wallpapers.com/images/hd/library-zoom-background-1920-x-1080-0rswqdzteb5o5py2.jpg") no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Title */
.title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

/* Form Wrapper */
.form-wrapper {
    max-width: 600px;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Form Styling */
.form-container {
    color: #fff;
}

.form-control {
    background-color: #333;
    color: #fff;
    border: 1px solid #555;
    border-radius: 6px;
    padding: 12px;
    transition: all 0.3s ease;
}

.form-control::placeholder {
    color: #bbb;
}

.form-control:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.6);
}

.btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
}
</style>
