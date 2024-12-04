<template>
  <div class="payment-container">
    <div class="payment-card">
      <div class="card-header text-center">
        <h4>Thanh Toán Tiền Thuê </h4>
        <p>Hãy điền thông tin để thanh toán</p>
      </div>
      <div class="card-body">
        <form @submit.prevent="handlePayment">
          <div class="row">
            <div class="col-6">
              <div class="form-group mb-4">
                <label for="paymentMethod">Chọn phương thức thanh toán</label>
                <select class="form-control" id="paymentMethod" v-model="selectedPaymentMethod" required>
                  <option value="creditCard">Thẻ tín dụng</option>
                  <option value="paypal">PayPal</option>
                  <option value="bankTransfer">Chuyển khoản ngân hàng</option>
                </select>
              </div>

              <div class="form-group mb-4">
                <label for="amount">Số tiền (VND)</label>
                <input type="number" class="form-control" id="amount" v-model="amount" required />
              </div>

              <div v-if="selectedPaymentMethod === 'creditCard'" class="credit-card-details">
                <div class="form-group mb-4">
                  <label for="cardNumber">Số thẻ</label>
                  <input type="text" class="form-control" id="cardNumber" v-model="cardNumber" required />
                </div>
                <div class="form-group mb-4">
                  <label for="expiryDate">Ngày hết hạn</label>
                  <input type="month" class="form-control" id="expiryDate" v-model="expiryDate" required />
                </div>
                <div class="form-group mb-4">
                  <label for="cvv">CVV</label>
                  <input type="number" class="form-control" id="cvv" v-model="cvv" required />
                </div>
              </div>

              <div v-if="selectedPaymentMethod === 'paypal'" class="paypal-details">
                <div class="form-group mb-4">
                  <label for="paypalEmail">Email PayPal</label>
                  <input type="email" class="form-control" id="paypalEmail" v-model="paypalEmail" required />
                </div>
              </div>

              <div v-if="selectedPaymentMethod === 'bankTransfer'" class="bank-transfer-details">
                <div class="form-group mb-4">
                  <label for="bankAccount">Số tài khoản ngân hàng</label>
                  <input type="text" class="form-control" id="bankAccount" v-model="bankAccount" required />
                </div>
              </div>
            </div>

            <div class="col-6">
              <div class="qr-section mt-4">
                <h5>Quét mã QR để thanh toán</h5>
                <div class="qr-code">
                  <img :src="generateQRCode" alt="QR Code for payment" />
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-block mt-4">Thanh Toán</button>
          </div>
        </form> <!-- Đảm bảo thẻ form được đóng đúng cách -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPaymentMethod: "creditCard", // Default payment method
      amount: "", // Payment amount
      cardNumber: "", // Credit card number
      expiryDate: "", // Expiry date for card
      cvv: "", // Card CVV
      paypalEmail: "", // PayPal email
      bankAccount: "", // Bank account number
      momoAccount: "0935019852", // MoMo account number (defaulted)
      momoPhone: "", // MoMo phone number
    };
  },
  computed: {
    // Generate QR code based on the payment data
    generateQRCode() {
      const paymentData = {
        amount: this.amount,
        method: this.selectedPaymentMethod,
      };
      const queryString = new URLSearchParams(paymentData).toString();
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${queryString}&size=200x200`;
      return qrCodeUrl;
    },
  },
  methods: {
    handlePayment() {
      // Handle payment submission logic here
      alert("Thanh toán thành công!");
    },
  },
};
</script>

<style scoped>
.payment-container {
  display: flex;
  justify-content: center;
  font-family: 'Arial', sans-serif;
}

.payment-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  padding: 20px;
}

.card-header h4 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.card-header p {
  font-size: 16px;
  color: #666;
}

.form-group label {
  font-size: 14px;
  color: #333;
}

.form-control {
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #2575fc;
  box-shadow: 0 0 5px rgba(37, 117, 252, 0.5);
}

.btn {
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #2575fc;
  border: none;
}

.btn-primary:hover {
  background-color: #6a11cb;
}

.credit-card-details,
.paypal-details,
.bank-transfer-details,
.momo-details {
  margin-top: 20px;
}

.qr-section {
  text-align: center;
  margin-top: 20px;
}

.qr-code img {
  width: 200px;
  height: 200px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
