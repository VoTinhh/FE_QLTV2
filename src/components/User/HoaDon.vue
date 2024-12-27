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
                            <label></label>
                            <input type="text" class="form-control" v-model="customerName"
                                placeholder="Nhập tên khách hàng" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <label>
                                <h4>Số lượng sách:</h4>
                            </label>
                            <input type="number" class="form-control" v-model.number="bookQuantity"
                                placeholder="Nhập số lượng sách" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <label>
                                <h4>Đơn giá:</h4>
                            </label>
                            <input type="number" class="form-control" v-model.number="bookPrice"
                                placeholder="Nhập đơn giá" />
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
                        <div class="col text-end">
                            <button class="btn btn-outline-success" @click="exportInvoice">Xuất hóa đơn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as XLSX from "xlsx";

export default {
    data() {
        return {
            customerName: "",
            bookQuantity: 0,
            bookPrice: 0
        };
    },
    computed: {
        totalPrice() {
            return this.bookQuantity * this.bookPrice || 0;
        }
    },
    methods: {
        exportInvoice() {
            if (!this.customerName || this.bookQuantity <= 0 || this.bookPrice <= 0) {
                alert("Vui lòng điền đầy đủ thông tin hợp lệ!");
                return;
            }

            // Chuẩn bị dữ liệu cho file Excel
            const data = [
                { Tiêu_đề: "Tên khách hàng", Giá_trị: this.customerName },
                { Tiêu_đề: "Số lượng sách", Giá_trị: this.bookQuantity },
                { Tiêu_đề: "Đơn giá", Giá_trị: this.bookPrice },
                { Tiêu_đề: "Tổng tiền", Giá_trị: this.totalPrice }
            ];

            // Tạo một worksheet từ dữ liệu
            const worksheet = XLSX.utils.json_to_sheet(data);

            // Tạo một workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Hóa đơn");

            // Xuất file Excel
            XLSX.writeFile(workbook, `HoaDon_${this.customerName}.xlsx`);
        }
    }
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