<template>
  <div>
    <div class="row">
      <div class="col">
        <div
          class="card"
          style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden; border: none;"
        >
          <div
            class="card-header"
            style="background-color: #f8f9fa; padding: 15px; border-bottom: 1px solid #dee2e6;"
          >
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="flex: 1; display: flex; align-items: center; gap: 10px;">
                <h4 style="margin: 0;">Lịch sử mượn sách</h4>
                <img
                  style="width: 5%;"
                  src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/04/20/znews-photo-zadn-vn_01.gif"
                  alt
                />
              </div>
            </div>
          </div>
          <div
            class="card-body"
            style="padding: 20px; background-color: #ffffff; border-radius: 8px;"
          >
            <table class="table table-bordered">
              <thead style="background-color: #e3f2fd;">
                <tr>
                  <th class="text-center">STT</th>
                  <th class="text-center">Tên sách</th>
                  <th class="text-center">Ngày mượn</th>
                  <th class="text-center">Ngày trả</th>
                  <th class="text-center">Ngày trả thực tế</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(v, k) in list_lich_su_muon" :key="k">
                  <td class="text-center">{{ k + 1 }}</td>
                  <td>{{ v.ten_sach }}</td>
                  <td>{{ v.ngay_muon }}</td>
                  <td>{{ v.ngay_tra }}</td>
                  <td>{{ v.ngay_tra_thuc_te || 'Chưa trả' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list_lich_su_muon: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/lich-su-muon",
          {
            params: {
              id_nguoi_dung: 1 // Thay 1 bằng ID người dùng mong muốn
            }
          }
        );

        if (response.data.lich_su_muons && response.data.lich_su_muons.length) {
          this.list_lich_su_muon = response.data.lich_su_muons;
        } else {
          this.list_lich_su_muon = []; // Đảm bảo danh sách rỗng khi không có dữ liệu
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu lịch sử mượn:", error);
        this.list_lich_su_muon = []; // Đảm bảo danh sách rỗng khi có lỗi
      }
    }
  }
};
</script>

<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #e3f2fd;
}

.card-body {
  background-color: #ffffff;
  border-radius: 8px;
}

.table th,
.table td {
  text-align: center;
  padding: 10px;
}

.btn-primary {
  background-color: #3498db;
  border: none;
}

.btn-danger {
  background-color: #e74c3c;
  border: none;
}

.modal-content {
  background-color: #ffffff;
}
</style>
