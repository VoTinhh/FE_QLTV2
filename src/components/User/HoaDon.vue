<template>
    <div>
        <div class="container">
            <div class="card small-card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <label>
                                <h4>Tên khách hàng:</h4>
                            </label>
                            <input type="text" class="form-control" v-model="customerName"
                                placeholder="Nhập tên khách hàng (bắt buộc)" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <label>
                                <h4>Số lượng sách:</h4>
                            </label>
                            <input type="number" class="form-control" v-model.number="bookQuantity"
                                placeholder="Nhập số lượng sách (bắt buộc)" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <label>
                                <h4>Đơn giá:</h4>
                            </label>
                            <input type="number" class="form-control" v-model.number="bookPrice"
                                placeholder="Nhập đơn giá (VNĐ)" />
                        </div>
                    </div>
                    <hr />
                    <div class="row mt-3">
                        <div class="col">
                            <label>
                                <h4>Tổng tiền:</h4>
                            </label>
                            <input type="text" class="form-control" :value="totalPrice" readonly />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <button v-if="paymentStatus === 'cash'" class="btn btn-outline-primary" @click="markAsPaid">
                                Tiền mặt
                            </button>
                            <button v-else class="btn btn-outline-danger">Đã thanh toán</button>
                        </div>
                        <div class="col text-center">
                            <router-link to="/user/thanh-toan">
                                <button class="btn btn-outline-warning">Ngân hàng</button>
                            </router-link>
                        </div>
                        <div class="col text-end">
                            <button class="btn btn-outline-success" @click="exportInvoice">
                                Xuất hóa đơn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Import thư viện jsPDF
import jsPDF from "jspdf";

export default {
    data() {
        return {
            customerName: "",
            bookQuantity: 0,
            bookPrice: 0,
            paymentStatus: "cash",
        };
    },
    computed: {
        totalPrice() {
            const total = this.bookQuantity * this.bookPrice || 0;
            return new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(total);
        },
    },
    methods: {
        exportInvoice() {
            if (!this.customerName || this.bookQuantity <= 0 || this.bookPrice <= 0) {
                alert("Vui lòng điền đầy đủ thông tin hợp lệ!");
                return;
            }

            try {
                // Tạo một đối tượng PDF mới
                const doc = new jsPDF();

                // Thêm tiêu đề vào PDF
                doc.setFontSize(18);
                doc.text("Hóa Đơn", 105, 20, { align: "center" });

                // Thêm thông tin khách hàng vào PDF
                doc.setFontSize(12);
                doc.text(`Tên khách hàng: ${this.customerName}`, 10, 40);
                doc.text(`Số lượng sách: ${this.bookQuantity}`, 10, 50);
                doc.text(`Đơn giá: ${this.bookPrice.toLocaleString()} VNĐ`, 10, 60);
                doc.text(`Tổng tiền: ${this.totalPrice}`, 10, 70);

                // Lưu file PDF
                doc.save(`HoaDon_${this.customerName}.pdf`);
                alert("Hóa đơn đã được xuất thành công!");
            } catch (error) {
                alert("Có lỗi xảy ra khi xuất hóa đơn: " + error.message);
            }
        },
        markAsPaid() {
            this.paymentStatus = "paid";
        },
    },
};
</script>

<style>
.small-card {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #ffffff;
}

input.form-control {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
}

button {
    font-size: 16px;
}

hr {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
