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
                <h4 style="margin: 0;">Danh sách phiếu mượn</h4>
                <img
                  style="width: 5%;"
                  src="https://nhanvanblog.com/upload/1517/fck/bookopenclosehgclrel5_zps91864aa7(1).gif"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="card-body" style="padding: 20px;">
            <table class="table table-bordered">
              <thead style="background-color: #f1f1f1;">
                <tr>
                  <th class="text-center">STT</th>
                  <th class="text-center">Tên sách</th>
                  <th class="text-center">Số lượng</th>
                  <th class="text-center">Ngày mượn</th>
                  <th class="text-center">Ngày trả</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(v,k) in list_phieu_muon" :key="k">
                  <td class="text-center">{{k+1}}</td>
                  <td>{{v.ten_sach}}</td>
                  <td class="text-center">{{v.so_luong_sach}}</td>
                  <td class="text-center">{{v.ngay_muon}}</td>
                  <td class="text-center">{{v.ngay_tra}}</td>
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
      list_phieu_muon: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
  async loadData() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/phieu-muon", {
        params: {
          id_nguoi_dung: 1, // Thay 1 bằng ID người dùng mong muốn
        },
      });
      
      if (response.data.status) {
        this.list_phieu_muon = response.data.phieu_muon;
        console.log("Dữ liệu phiếu mượn:", this.list_phieu_muon);
      } else {
        console.warn("Không có phiếu mượn:", response.data.message);
        this.list_phieu_muon = []; // Đảm bảo danh sách rỗng khi không có dữ liệu
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu phiếu mượn:", error);
    }
  },
}

};
</script>
<style></style>