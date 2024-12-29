<template>
    <div class="login-container d-flex justify-content-center align-items-center">
       <div class="welcome-message text-center">
        <h2 aria-label="Chào Mừng Bạn Quay Trở Lại Thư Viện">Chào Mừng Bạn Quay Trở Lại Thư Viện !!</h2>
      </div>
      <div class="form-wrapper d-flex">
        <div class="image-container">
          <img src="https://media.viez.vn/prod/2021/7/18/large_1626583721115_7540245369.png" alt="Login Illustration" class="img-fluid" />
        </div>
        <div class="form-container p-4 rounded">
          <h2 class="text-center text-white mb-4"><b>ĐĂNG NHẬP</b></h2>
          <form @submit.prevent="dangNhap">
            <div class="mb-4">
              <label class="mb-3">Email :</label>
              <input v-model="tai_Khoan.email" type="email" placeholder="Nhập vào Email" class="form-control" required />
            </div>
            <div class="mb-5">
              <label class="mb-3">Mật Khẩu :</label>
              <input v-model="tai_Khoan.mat_khau" type="password" placeholder="Nhập vào mật khẩu" class="form-control" required />
            </div>
            <div class="d-flex justify-content-between mb-4">
            <router-link to="/user/dang-ky" class="btn btn-outline-secondary">Quay Lại Đăng Ký</router-link>
              <button :disabled="isLoading" class="btn btn-primary w-48">
                <span v-if="isLoading">Đang xử lý...</span>
                <span v-else>Đăng Nhập <i class="fa-solid fa-right-to-bracket"></i></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "../../axios";
  
  export default {
    data() {
      return {
        tai_Khoan: {
          email: "",
          mat_khau: "",
        },
        isLoading: false,
      };
    },
    methods: {
      dangNhap() {
        this.isLoading = true;
        axios
          .post("nguoi-dung/dang-nhap", this.tai_Khoan)
          .then((res) => {
            if (res.data.status === 1) {
              this.$toast.success(res.data.message);
              this.tai_Khoan = { email: "", mat_khau: "" };
              localStorage.setItem("token", res.data.token)
              this.$router.push("/user/danh-muc-sach");
            } else {
              this.$toast.error(res.data.message);
            }
          })
          .catch((error) => {
            const errors = Object.values(error.response.data.errors || {});
            errors.forEach((err) => this.$toast.error(err[0]));
          })
          .finally(() => {
            this.isLoading = false;
          });
      },
    },
  };
  </script>
  
<style scoped>
.login-container {
    height: 100vh;
    background: url("https://wallpapers.com/images/hd/library-zoom-background-1920-x-1080-0rswqdzteb5o5py2.jpg") no-repeat center center;
    background-size: cover;
    position: relative;
}

.welcome-message {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    font-size: 2rem;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 8px;
    overflow: hidden;
    white-space: nowrap;
}

.welcome-message h2 {
    position: relative;
    display: inline-block;
    animation: marquee 15s linear infinite;
    color: rgb(120, 155, 226) !important;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.form-wrapper {
    display: flex;
    max-width: 800px;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    overflow: hidden;
    z-index: 2;
}

.image-container {
    flex: 1;
    max-width: 50%;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.form-container {
    flex: 1;
    padding: 20px;
    color: #fff;
}

.form-control {
    background-color: #222;
    color: #fff;
    border: 1px solid #555;
}

.form-control::placeholder {
    color: #bbb;
}

.btn-primary {
    background-color: #007bff;
    border: none;
}

.btn-primary:hover {
    background-color: #0056b3;
    transition: 0.3s ease;
}

.btn-outline-secondary:hover {
    background-color: #6c757d;
    color: #fff;
}

.social-icons a {
    color: #fff;
    text-decoration: none;
}
</style>
