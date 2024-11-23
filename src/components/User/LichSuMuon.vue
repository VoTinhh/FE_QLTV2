<template>
  <div>
    <div class="row">
      <div class="col">
        <div
          class="card"
          style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden; border: none;"
        >
          <div class="card-header" style="background-color: #f8f9fa; padding: 15px; border-bottom: 1px solid #dee2e6;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="flex: 1; display: flex; align-items: center; gap: 10px;">
                <h4 style="margin: 0;">Lịch sử mượn sách</h4>
                <img style="width: 5%;" src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/04/20/znews-photo-zadn-vn_01.gif" alt="" />
              </div>
            </div>
          </div>
          <div class="card-body" style="padding: 20px; background-color: #ffffff; border-radius: 8px;">
            <table class="table table-bordered">
              <thead style="background-color: #e3f2fd;">
                <tr>
                  <th class="text-center">STT</th>
                  <th class="text-center">Tên sách</th>
                  <th class="text-center">Tên người mượn</th>
                  <th class="text-center">Ngày mượn</th>
                  <th class="text-center">Ngày trả</th>
                  <th class="text-center">Hoạt động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(history, index) in borrowHistory" :key="history.id">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td>{{ history.bookName }}</td>
                  <td>{{ history.borrowerName }}</td>
                  <td>{{ history.borrowDate }}</td>
                  <td>{{ history.returnDate }}</td>
                  <td class="text-center">
                    <button
                      class="btn btn-primary mx-1"
                      @click="openEditModal(history)"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhap"
                    >
                      Cập nhật
                    </button>
                    <button
                      class="btn btn-danger"
                      @click="openDeleteModal(history.id)"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Modal for Add/Edit Borrow History -->
            <div class="modal fade" id="capNhap" tabindex="-1" aria-labelledby="themMoiLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="themMoiLabel">Nhập lịch sử mượn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="bookName" class="form-label">Tên sách:</label>
                        <input type="text" class="form-control" id="bookName" v-model="selectedHistory.bookName" placeholder="Tên sách" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="borrowerName" class="form-label">Tên người mượn:</label>
                        <input type="text" class="form-control" id="borrowerName" v-model="selectedHistory.borrowerName" placeholder="Tên người mượn" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="borrowDate" class="form-label">Ngày mượn:</label>
                        <input type="date" class="form-control" id="borrowDate" v-model="selectedHistory.borrowDate" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="returnDate" class="form-label">Ngày trả:</label>
                        <input type="date" class="form-control" id="returnDate" v-model="selectedHistory.returnDate" />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="updateHistory">Lưu thay đổi</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal for Deleting Borrow History -->
            <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="xoaModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="xoaModalLabel">Xoá phiếu mượn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>Bạn có chắc chắn muốn xoá phiếu mượn này không?</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Không</button>
                    <button type="button" class="btn btn-danger" @click="deleteHistory(selectedHistory.id)">Xoá</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      borrowHistory: [
  {
    id: 1,
    bookName: "Lập trình web với PHP",
    borrowerName: "Nguyễn Văn A",
    borrowDate: "2024-11-01",
    returnDate: "2024-11-10",
  },
  {
    id: 2,
    bookName: "Cơ sở dữ liệu quan hệ",
    borrowerName: "Trần Thị B",
    borrowDate: "2024-11-05",
    returnDate: "2024-11-15",
  },
  {
    id: 3,
    bookName: "Nhập môn lập trình C++",
    borrowerName: "Lê Minh C",
    borrowDate: "2024-11-08",
    returnDate: "2024-11-18",
  },
  {
    id: 4,
    bookName: "Lập trình di động với Flutter",
    borrowerName: "Phan Quang D",
    borrowDate: "2024-11-10",
    returnDate: "2024-11-20",
  },
  {
    id: 5,
    bookName: "Giải thuật và cấu trúc dữ liệu",
    borrowerName: "Hoàng Lan E",
    borrowDate: "2024-11-12",
    returnDate: "2024-11-22",
  },
  {
    id: 6,
    bookName: "Kỹ thuật lập trình Java",
    borrowerName: "Vũ Quốc F",
    borrowDate: "2024-11-15",
    returnDate: "2024-11-25",
  }
],
      selectedHistory: {
        id: null,
        bookName: "",
        borrowerName: "",
        borrowDate: "",
        returnDate: "",
      },
    };
  },
  methods: {
    openEditModal(history) {
      this.selectedHistory = { ...history }; // Create a copy of the selected history for editing
    },
    updateHistory() {
      const index = this.borrowHistory.findIndex(
        (history) => history.id === this.selectedHistory.id
      );
      if (index !== -1) {
        this.borrowHistory[index] = { ...this.selectedHistory }; // Update the selected history
      }
      // Close the modal after saving changes
      const modal = document.getElementById("capNhap");
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    },
    openDeleteModal(historyId) {
      this.selectedHistory = this.borrowHistory.find((history) => history.id === historyId);
    },
    deleteHistory(historyId) {
      this.borrowHistory = this.borrowHistory.filter((history) => history.id !== historyId);
      // Close the delete modal after deletion
      const modal = document.getElementById("xoaModal");
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    },
  },
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
