<template>
    <div class="container mt-4">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white rounded-top">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Danh Mục </h5>
                    <button class="btn btn-light text-primary shadow-sm" data-bs-toggle="modal"
                        data-bs-target="#addModal">
                        <i class="fas fa-plus me-1"></i> Thêm Nhà Xuất bản
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle shadow-sm">
                        <thead class="table-light">
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group">
                                        <input type="text" class="form-control rounded-start" placeholder="Tìm kiếm...">
                                        <button class="btn btn-primary rounded-end" type="button">
                                            <i class="bx bx-search"></i> Tìm
                                        </button>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Hình Ảnh</th>

                                <th class="text-center">Tên Nhà Xuất Bản</th>
                                <th class="text-center">Giới thiệu</th>
                                <th class="text-center">Sách</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-row-hover">
                                <td class="text-center">1</td>
                                <td class="text-center">
                                    <img src="data:image/png;base64,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"
                                        alt="Book Image" class="img-fluid rounded shadow-sm"
                                        style="max-width: 80px; height: auto;">
                                </td>
                                <td>Kim Đồng</td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-outline-info" data-bs-toggle="modal"
                                        data-bs-target="#moTaModal">
                                        <i class="bx bx-blanket me-0"></i>
                                    </button>
                                </td>
                                <td class="text-center">Conan</td>
                                <td class="text-center">
                                    <button class="btn btn-sm btn-primary me-2 shadow-sm" data-bs-toggle="modal"
                                        data-bs-target="#editModal">
                                        <i class="fas fa-edit"></i> Chỉnh Sửa
                                    </button>
                                    <button class="btn btn-sm btn-danger shadow-sm" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">
                                        <i class="fas fa-trash-alt"></i> Xóa
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal thêm sách-->
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm Mới </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="imageInput" class="form-label">Hình Ảnh</label>
                                <input type="file" id="imageInput" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label for="nameInput" class="form-label">Tên Nhà Xuất Bản</label>
                                <input type="text" id="nameInput" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="nameInput" class="form-label"> Sách</label>
                            <input type="text" id="nameInput" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label for="descriptionInput" class="form-label">Giới thiệu</label>
                            <textarea id="descriptionInput" class="form-control" rows="4"></textarea>
                        </div>
                        <div class="row mb-3">


                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-success">Thêm </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal chỉnh sửa-->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-warning text-white">
                    <h5 class="modal-title" id="exampleModalLabel">Chỉnh Sửa </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="imageInput" class="form-label">Hình Ảnh</label>
                                <input type="file" id="imageInput" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label for="nameInput" class="form-label">Tên Nhà Xuất Bản</label>
                                <input type="text" id="nameInput" class="form-control">
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="descriptionInput" class="form-label">Giới thiệu</label>
                            <textarea id="descriptionInput" class="form-control" rows="4"></textarea>
                        </div>
                        <div class="col-md-6">
                            <label for="nameInput" class="form-label"> Sách</label>
                            <input type="text" id="nameInput" class="form-control">
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-warning">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal xoá-->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger d-flex align-items-center">
                        <div class="me-3">
                            <i class="bx bxs-message-square-x text-dark" style="font-size: 2rem;"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-dark fw-bold">Bạn có chắc chắn muốn xóa không?</h6>
                            <p class="mb-0 text-dark"><strong>LƯU Ý:</strong> Hành động này sẽ không thể hoàn tác!</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger">Xác Nhận Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="moTaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-white">
                    <h5 class="modal-title" id="exampleModalLabel">Tiểu Sử</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-justify" style="line-height: 1.8;">
                        <p>
                            <strong>Nhà Xuất Bản Kim Đồng</strong> được thành lập vào năm 1957, là một trong những nhà
                            xuất bản uy tín và lâu đời nhất tại Việt Nam, chuyên sản xuất và phát hành sách thiếu nhi,
                            sách giáo dục, và sách văn học. Nhà Xuất Bản Kim Đồng đã đóng góp không nhỏ vào việc phát
                            triển văn hóa đọc trong xã hội Việt Nam.
                        </p>
                        <p>
                            Với tôn chỉ hoạt động là "Vì một nền văn hóa đọc tốt đẹp và phát triển bền vững", Nhà Xuất
                            Bản Kim Đồng luôn nỗ lực mang đến những ấn phẩm chất lượng cao, phù hợp với nhiều đối tượng
                            bạn đọc, từ trẻ em đến các bậc phụ huynh và độc giả yêu thích văn học.
                        </p>
                        <p>
                            Kim Đồng nổi bật với các bộ sách dành cho thiếu nhi, đặc biệt là những cuốn sách nổi tiếng
                            như *"Tủ sách Kim Đồng"*, *"Truyện tranh Kim Đồng"*, và những ấn phẩm văn học có giá trị
                            giáo dục cao. Sách của Nhà Xuất Bản Kim Đồng không chỉ cung cấp kiến thức bổ ích mà còn giúp
                            trẻ em phát triển khả năng tư duy, sáng tạo và nuôi dưỡng tình yêu văn học từ khi còn nhỏ.
                        </p>
                        <p>
                            Nhà Xuất Bản Kim Đồng cũng đã xuất bản nhiều tác phẩm văn học nổi tiếng của các tác giả
                            trong và ngoài nước, góp phần làm phong phú nền văn học Việt Nam. Với những giá trị giáo dục
                            và tinh thần nhân văn sâu sắc, các sách do Kim Đồng phát hành luôn nhận được sự yêu mến và
                            tín nhiệm của độc giả trong nhiều năm qua.
                        </p>
                        <p>
                            Hơn nữa, Nhà Xuất Bản Kim Đồng không chỉ tập trung vào việc xuất bản sách mà còn tham gia
                            tích cực vào các hoạt động khuyến đọc, tổ chức các chương trình giao lưu, tọa đàm và các
                            hoạt động văn hóa để phát triển cộng đồng yêu sách và nuôi dưỡng niềm đam mê đọc sách trong
                            mọi đối tượng độc giả.
                        </p>
                        <p>
                            Với những đóng góp lớn lao cho nền văn hóa đọc của Việt Nam, Nhà Xuất Bản Kim Đồng xứng đáng
                            là một trong những ngôi nhà xuất bản tiên phong và đáng tin cậy trong lĩnh vực xuất bản sách
                            cho thiếu nhi và văn học Việt Nam.
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {

};
</script>
<style>
.table-row-hover:hover {
    background-color: #f8f9fa;
    transition: background-color 0.2s;
}

.btn:hover {
    opacity: 0.9;
    transition: opacity 0.2s;
}
</style>
