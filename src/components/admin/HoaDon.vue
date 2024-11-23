<template>
    <div class="invoice-management">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
                <div style="flex: 1; display: flex; align-items: center; gap: 10px;">
                                <h4 style="margin: 0;">Danh sách hóa đơn</h4>
                                <img style="width: 5%;"
                                    src="https://nhanvanblog.com/upload/1517/fck/bookopenclosehgclrel5_zps91864aa7(1).gif"
                                    alt="">
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
                  <tr v-for="(invoice, index) in invoices" :key="index">
                    <td class="text-center">{{ index + 1 }}</td>
                    <td>{{ invoice.bookName }}</td>
                    <td>{{ invoice.borrowerName }}</td>
                    <td class="text-center">{{ invoice.quantity }}</td>
                    <td>{{ invoice.borrowDate }}</td>
                    <td>{{ invoice.returnDate }}</td>
                    <td>{{ invoice.penalty }} VNĐ</td>
                    <td class="text-center">
                      <span :class="{'text-success': invoice.isPaid, 'text-danger': !invoice.isPaid}">
                        {{ invoice.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán' }}
                      </span>
                    </td>
                    <td class="text-center">
                      <button class="btn btn-info mx-1" @click="markAsPaid(index)" :disabled="invoice.isPaid">
                        Thanh toán
                      </button>
                      <button class="btn btn-danger" @click="deleteInvoice(index)">
                        Xoá
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal: Thanh toán hoá đơn -->
      <div v-if="isModalVisible" class="modal fade show" tabindex="-1" aria-labelledby="paymentModalLabel" style="display: block;" aria-hidden="false">
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
  export default {
    data() {
      return {
        invoices: [
          {
            bookName: 'Sách 1',
            borrowerName: 'Người mượn 1',
            quantity: 2,
            borrowDate: '2024-11-01',
            returnDate: '2024-11-15',
            penalty: 10000,
            isPaid: false,
          },
          {
            bookName: 'Sách 2',
            borrowerName: 'Người mượn 2',
            quantity: 1,
            borrowDate: '2024-11-05',
            returnDate: '2024-11-20',
            penalty: 15000,
            isPaid: false,
          },
        ],
        selectedInvoiceIndex: null,
        paymentAmount: 0,
        isModalVisible: false, // Điều khiển việc hiển thị modal
      };
    },
    methods: {
      // Mở modal thanh toán
      openPaymentModal() {
        if (this.selectedInvoiceIndex !== null) {
          const invoice = this.invoices[this.selectedInvoiceIndex];
          this.paymentAmount = invoice.penalty;
          this.isModalVisible = true; // Hiển thị modal
        }
      },
      // Đóng modal
      closeModal() {
        this.isModalVisible = false;
      },
      // Xác nhận thanh toán hoá đơn
      confirmPayment() {
        if (this.selectedInvoiceIndex !== null) {
          const invoice = this.invoices[this.selectedInvoiceIndex];
          if (this.paymentAmount >= invoice.penalty) {
            invoice.isPaid = true;
            alert('Thanh toán thành công!');
          } else {
            alert('Số tiền thanh toán không đủ!');
          }
        }
        this.closeModal(); // Đóng modal sau khi thanh toán
      },
      // Đánh dấu hoá đơn là đã thanh toán
      markAsPaid(index) {
        this.selectedInvoiceIndex = index;
        this.openPaymentModal();
      },
      // Xoá hoá đơn
      deleteInvoice(index) {
        if (confirm('Bạn có chắc chắn muốn xoá hoá đơn này?')) {
          this.invoices.splice(index, 1);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .table th, .table td {
    text-align: center;
  }
  </style>
  