<template>
  <div class="invoice-management">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div style="flex: 1; display: flex; align-items: center; gap: 10px;">
              <h4 style="margin: 0;">Danh sách hóa đơn</h4>
              <img style="width: 5%;"
                src="https://nhanvanblog.com/upload/1517/fck/bookopenclosehgclrel5_zps91864aa7(1).gif" alt />
            </div>
            <div class="col text-end">
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Thêm mới</button>
            </div>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm hóa đơn</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col">
                      <label for class="form-label mt-2">Phiếu mượn</label>
                      <select class="form-select" name="" id="">
                        <option selected>Select one</option>
                        <option value="">New Delhi</option>
                        <option value="">Istanbul</option>
                        <option value="">Jakarta</option>
                      </select>
                      <label for class="form-label mt-2">Tên người mượn</label>
                      <input type="text" class="form-control" name id aria-describedby="helpId" placeholder />
                      <label for class="form-label mt-2">Số lượng</label>
                      <input type="number" class="form-control" name id aria-describedby="helpId" placeholder />
                    </div>
                    <div class="col">
                      <label for class="form-label mt-2">Ngày mượn</label>
                      <input type="date" class="form-control" name id aria-describedby="helpId" placeholder />
                      <label for class="form-label mt-2">Ngày trả</label>
                      <input type="date" class="form-control" name id aria-describedby="helpId" placeholder />
                      <label for class="form-label mt-2">Tiền phạt</label>
                      <input type="number" class="form-control" name id aria-describedby="helpId" placeholder />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                  <button type="button" class="btn btn-primary">Thêm mới</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Card Body: Invoice Table -->
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th class="text-center">STT</th>
                  <th class="text-center">Tên sách</th>
                  <th class="text-center">Tên người mượn</th>
                  <th class="text-center">Số lượng</th>
                  <th class="text-center">Ngày mượn</th>
                  <th class="text-center">Ngày trả</th>
                  <th class="text-center">Tiền phạt</th>
                  <th class="text-center">Trạng thái thanh toán</th>
                  <th class="text-center">Hoạt động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(v, k) in list_hoa_don" :key="k">
                  <td class="text-center">{{ k + 1 }}</td>
                  <td>{{ v.phieu_muon.sach.ten_sach }}</td>
                  <td>{{ v.phieu_muon.nguoi_dung.ten_nguoi_dung }}</td>
                  <td class="text-center">{{ v.phieu_muon.sach.so_luong }}</td>
                  <td>{{ v.phieu_muon.ngay_muon }}</td>
                  <td>{{ v.phieu_muon.ngay_tra }}</td>
                  <td>{{ v.tien_phat }} thiếu VNĐ</td>
                  <td class="text-center">
                    <span :class="{ 'text-success': v.isPaid, 'text-danger': !v.phieu_muon.trang_thai }">{{
                      v.phieu_muon.trang_thai ? 'Đã thanh toán' : 'Chưa thanh toán' }}</span>
                  </td>
                  <td class="text-center">
                    <button class="btn btn-info mx-1" @click="markAsPaid(v)" :disabled="v.phieu_muon.trang_thai">Thanh
                      toán</button>
                    <button class="btn btn-danger" @click="deleteInvoice(v)">Xoá</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Thanh toán hoá đơn -->
    <div v-if="isModalVisible" class="modal fade show" tabindex="-1" aria-labelledby="paymentModalLabel"
      style="display: block;" aria-hidden="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="paymentModalLabel">Xác nhận thanh toán</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Bạn có chắc chắn muốn thanh toán hoá đơn này?</p>
            <div class="mb-3">
              <label for="paymentAmount" class="form-label">Số tiền thanh toán:</label>
              <input type="number" class="form-control" v-model="paymentAmount" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Hủy</button>
            <button type="button" class="btn btn-primary" @click="confirmPayment">Xác nhận thanh toán</button>
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
      list_hoa_don: [],
      delete_hoa_don: {},
      create_hoa_don: {},
      isModalVisible: false
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get("http://127.0.0.1:8000/api/hoa-don/").then(res => {
        this.list_hoa_don = res.data.hoa_dons;
        console.log(this.list_hoa_don);
      });
    },
    // Create(){
    //   axios.post("http://127.0.0.1:8000/api/hoa-d
    // },
    markAsPaid(invoice) {
      if (!confirm("Bạn có chắc chắn muốn thanh toán hóa đơn này không?")) {
        return;
      }

      axios
        .post(`http://127.0.0.1:8000/api/hoa-don/${invoice.id}/pay`)
        .then(res => {
          alert("Thanh toán thành công!");
          this.loadData(); // Tải lại danh sách hóa đơn
        })
        .catch(err => {
          console.error(err);
          alert("Có lỗi xảy ra, vui lòng thử lại.");
        });
    },
    deleteInvoice(invoice) {
      if (!confirm("Bạn có chắc chắn muốn xóa hóa đơn này không?")) {
        return;
      }

      axios
        .delete("http://127.0.0.1:8000/api/hoa-don/" + this.delete_hoa_don.id)
        .then(res => {
          alert("Xóa hóa đơn thành công!");
          this.loadData();
        })
        .catch(err => {
          console.error(err);
          alert("Có lỗi xảy ra, vui lòng thử lại.");
        });
    }

  }
};
</script>

<style scoped>
.table th,
.table td {
  text-align: center;
}
</style>