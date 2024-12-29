<template>
  <div class="login-container d-flex justify-content-center align-items-center">
    <div class="welcome-message text-center">
      <h2 aria-label="Chào Mừng Bạn Quay Trở Lại Thư Viện">Chào Mừng Bạn Quay Trở Lại Thư Viện !!</h2>
    </div>
    <div class="form-wrapper d-flex">
      <div class="image-container">
        <img src="https://media.viez.vn/prod/2021/7/18/large_1626583721115_7540245369.png" alt="Login Illustration"
          class="img-fluid" />
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
            <input v-model="tai_Khoan.mat_khau" type="password" placeholder="Nhập vào mật khẩu" class="form-control"
              required />
          </div>
          <div class="d-flex justify-content-end mb-4">
            <button :disabled="isLoading" class="btn btn-primary">
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
import axios from "axios";

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
    KiemTraDangNhap()
    {
      axios
      .get("http://127.0.0.1:8000/api/nhan-vien/check-login",{
        headers: {
          Authorization: 'Bearer' + localStorage.getItem("key_admin")
        }
      })
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res.data)
      })
    },
    dangNhap() {
      axios
        .post("http://127.0.0.1:8000/api/nhan-vien/dang-nhap", this.tai_Khoan,)
        .then((res) => {
          if (res.data.status === 1) {
            this.$toast.success(res.data.message);
            this.tai_Khoan = { email: "", mat_khau: "" }; // Reset thông tin đăng nhập
            localStorage.setItem('token', res.data.key)
            this.$router.push('/nhan-vien/quan-ly-tai-khoan');
          } else {
            this.$toast.error(res.data.message);
          }
        })
        .catch((error) => {
          const errors = Object.values(error.response.data.errors || {});
          errors.forEach((err) => this.$toast.error(err[0]));
        });
    }
  },
};
</script>


<style scoped>
.login-container {
  height: 100vh;
  background: url("https://wallpapers.com/images/hd/library-zoom-background-1920-x-1080-0rswqdzteb5o5py2.jpg") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-align: center;
}

.welcome-message h2 {
  color: rgb(120, 155, 226) !important;
  margin: 0;
  animation: marquee 15s linear infinite;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.image-container {
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
}

.form-container {
  flex: 1;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-control {
  background-color: #222;
  color: #fff;
  border: 1px solid #555;
  padding: 10px;
  border-radius: 5px;
}

.form-control::placeholder {
  color: #bbb;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-primary:hover {
  background-color: #0056b3;
  transition: 0.3s ease;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: #fff;
}
</style>
