<template>
    <div>
        <div class="row">
            <div class="col">
                <div class="card"
                    style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden; border: none;">
                    <div class="card-header"
                        style="background-color: #f8f9fa; padding: 15px; border-bottom: 1px solid #dee2e6;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="flex: 1; display: flex; align-items: center; gap: 10px;">
                                <h4 style="margin: 0;">Danh sách phiếu mượn</h4>
                                <img style="width: 5%;"
                                    src="https://nhanvanblog.com/upload/1517/fck/bookopenclosehgclrel5_zps91864aa7(1).gif"
                                    alt="">
                            </div>
                            <button class="btn btn-outline-primary btn-lg shadow" data-bs-toggle="modal"
                                data-bs-target="#themMoi"
                                style="border-radius: 8px; padding: 10px 20px; border: 2px solid #007bff; background: transparent; color: #007bff; transition: all 0.3s ease-in-out;">
                                <i class="fa-regular fa-square-plus"></i> Thêm mới
                            </button>
                        </div>

                        <!-- Modal Them Moi -->
                        <div class="modal fade" id="themMoi" tabindex="-1" aria-labelledby="themMoiLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Nhập phiếu mượn:</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <label for="bookName" class="form-label">Tên sách:</label>
                                                <input type="text" class="form-control" id="bookName"
                                                    placeholder="Tên sách" />
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="borrowerName" class="form-label">Tên người mượn:</label>
                                                <input type="text" class="form-control" id="borrowerName"
                                                    placeholder="Tên người mượn" />
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="quantity" class="form-label">Số lượng:</label>
                                                <input type="number" class="form-control" id="quantity"
                                                    placeholder="Số lượng" />
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="borrowDate" class="form-label">Ngày mượn:</label>
                                                <input type="date" class="form-control" id="borrowDate" />
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="returnDate" class="form-label">Ngày trả:</label>
                                                <input type="date" class="form-control" id="returnDate" />
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="penalty" class="form-label">Tiền phạt:</label>
                                                <input type="text" class="form-control" id="penalty"
                                                    placeholder="Tiền phạt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary">Lưu thay đổi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" style="padding: 20px;">
                        <table class="table table-bordered">
                            <thead style="background-color: #f1f1f1;">
                                <tr>
                                    <th class="text-center">STT</th>
                                    <th class="text-center">Tên sách</th>
                                    <th class="text-center">Tên người mượn</th>
                                    <th class="text-center">Số lượng</th>
                                    <th class="text-center">Ngày mượn</th>
                                    <th class="text-center">Ngày trả</th>
                                    <th class="text-center">Tiền phạt</th>
                                    <th class="text-center">Hoạt động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">1</td>
                                    <td>Lập trình web với PHP</td>
                                    <td>Nguyễn Văn A</td>
                                    <td class="text-center">1</td>
                                    <td>2024-11-01</td>
                                    <td>2024-11-10</td>
                                    <td>0 VNĐ</td>
                                    <td class="text-center">
                                        <button class="btn btn-primary mx-1" data-bs-toggle="modal"
                                            data-bs-target="#capNhapModal">
                                            Cập nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal">
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">2</td>
                                    <td>Laravel cơ bản</td>
                                    <td>Trần Thị B</td>
                                    <td class="text-center">2</td>
                                    <td>2024-11-05</td>
                                    <td>2024-11-15</td>
                                    <td>50000 VNĐ</td>
                                    <td class="text-center">
                                        <button class="btn btn-primary mx-1" data-bs-toggle="modal"
                                            data-bs-target="#capNhapModal">
                                            Cập nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal">
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="modal fade" id="capNhapModal" tabindex="-1" aria-labelledby="capNhapModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="capNhapModalLabel">Cập nhật phiếu mượn</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="bookName" class="form-label">Tên sách:</label>
                                            <input type="text" class="form-control" id="bookName"
                                                placeholder="Tên sách" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="borrowerName" class="form-label">Tên người mượn:</label>
                                            <input type="text" class="form-control" id="borrowerName"
                                                placeholder="Tên người mượn" />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary">Lưu thay đổi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="xoaModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="xoaModalLabel">Xoá phiếu mượn</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Bạn có chắc chắn muốn xoá phiếu mượn này không?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Không</button>
                                        <button type="button" class="btn btn-danger">Xoá</button>
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

}
</script>
<style></style>