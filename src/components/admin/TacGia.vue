<template>
    <div class="container mt-4">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white rounded-top">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Danh Mục Tác Giả</h5>
                    <button class="btn btn-light text-primary shadow-sm" data-bs-toggle="modal"
                        data-bs-target="#addModal">
                        <i class="fas fa-plus me-1"></i> Thêm Tác Giả
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

                                <th class="text-center">Tác Giả</th>
                                <th class="text-center">Tiểu Sử</th>

                                <th class="text-center">Tác Phẩm</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-row-hover">
                                <td class="text-center">1</td>
                                <td class="text-center">
                                    <img src="https://vimages.coccoc.com/vimage?ns=public_people&url=https://imgprofile.vnanet.vn/Media/Graphic/Profile/2020/11/25/to-huu-1.jpg"
                                        alt="Book Image" class="img-fluid rounded shadow-sm"
                                        style="max-width: 80px; height: auto;">
                                </td>
                                <td>Tố Hữu</td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-outline-info" data-bs-toggle="modal"
                                        data-bs-target="#moTaModal">
                                        <i class="bx bx-blanket me-0"></i>
                                    </button>
                                </td>

                                <td class="text-center">Việt Bắc</td>


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
                    <h5 class="modal-title" id="exampleModalLabel">Thêm Mới Tác Giả</h5>
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
                                <label for="nameInput" class="form-label">Tên Tác Giả</label>
                                <input type="text" id="nameInput" class="form-control">
                            </div>
                        </div>
                        <div class="row mb-3">


                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="publisherInput" class="form-label">Tác Phẩm</label>
                                <input type="text" id="publisherInput" class="form-control">
                            </div>

                        </div>
                        <div class="mb-3">
                            <label for="descriptionInput" class="form-label">Tiểu Sử</label>
                            <textarea id="descriptionInput" class="form-control" rows="4"></textarea>
                        </div>
                        <div class="row mb-3">


                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-success">Thêm Tác Giả</button>
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
                                <label for="nameInput" class="form-label">Tên Tác Giả</label>
                                <input type="text" id="nameInput" class="form-control">
                            </div>
                        </div>
                        <div class="row mb-3">


                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="publisherInput" class="form-label">Tác Phẩm</label>
                                <input type="text" id="publisherInput" class="form-control">
                            </div>

                        </div>
                        <div class="mb-3">
                            <label for="descriptionInput" class="form-label">Tiểu Sử</label>
                            <textarea id="descriptionInput" class="form-control" rows="4"></textarea>
                        </div>
                        <div class="row mb-3">


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

    <!-- Modal mô tả ngắn-->
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
                            <strong>Tố Hữu</strong> (1920-2002) là một trong những nhà thơ nổi tiếng của Việt Nam, được
                            xem là "người lính thơ" với những tác phẩm mang đậm tinh thần cách mạng, đấu tranh và lòng
                            yêu nước. Ông là một trong những đại biểu tiêu biểu cho dòng văn học kháng chiến, có ảnh
                            hưởng sâu rộng đến nhiều thế hệ bạn đọc Việt Nam.
                        </p>
                        <p>
                            Tố Hữu tham gia cách mạng từ rất sớm và trở thành một trong những chiến sĩ tiêu biểu của
                            phong trào cách mạng. Những tác phẩm của ông phản ánh chân thực những cuộc đấu tranh gian
                            khổ nhưng đầy kiên cường của dân tộc, đồng thời thể hiện một niềm tin vững chắc vào tương
                            lai tươi sáng của đất nước.
                        </p>
                        <p>
                            Một trong những đặc điểm nổi bật trong thơ Tố Hữu là sự kết hợp giữa tình cảm cá nhân và
                            tinh thần dân tộc. Thơ của ông không chỉ mang đậm hơi thở thời đại mà còn chứa đựng những tư
                            tưởng nhân văn sâu sắc, hướng đến sự phát triển bền vững của xã hội và đất nước.
                        </p>
                        <p>
                            Các tác phẩm nổi bật của Tố Hữu có thể kể đến như: <em>"Từ ấy"</em>, <em>"Việt Bắc"</em>,
                            <em>"Lửa thiêng"</em>, và <em>"Ra trận"</em>. Những bài thơ của ông không chỉ có giá trị văn
                            học cao mà còn chứa đựng những bài học về tình yêu quê hương, đất nước, và trách nhiệm công
                            dân.
                        </p>
                        <p>
                            Tố Hữu không chỉ là một nhà thơ, mà còn là một chiến sĩ cách mạng, người lãnh đạo văn hóa
                            trong những năm tháng gian khó của dân tộc. Những lời thơ của ông đã khơi dậy lòng yêu nước,
                            khơi dậy niềm tin vào sự nghiệp giải phóng dân tộc, và động viên các thế hệ tiếp bước trên
                            con đường cách mạng.
                        </p>
                        <p>
                            Tiểu sử của Tố Hữu luôn là nguồn cảm hứng cho những ai yêu mến văn học và yêu đất nước Việt
                            Nam, cũng như là minh chứng cho sức mạnh của văn hóa và lòng yêu nước trong những thời khắc
                            quan trọng của dân tộc.
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
