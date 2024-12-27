<template>
    <div class="container mt-4">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white rounded-top">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Danh Mục Thể Loại</h5>
                    <button class="btn btn-light text-primary shadow-sm" data-bs-toggle="modal"
                        data-bs-target="#addModal">
                        <i class="fas fa-plus me-1"></i> Thêm Thể Loại
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
                                <th class="text-center">Thể loại</th>
                                
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-row-hover">
                                <td class="text-center">1</td>
                               
                                <td>Văn Học Việt Nam</td>
                                
                                
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
                <h5 class="modal-title" id="exampleModalLabel">Thêm Mới Thể loại</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="row mb-3">
                        
                        <div class="col-md-6">
                            <label for="nameInput" class="form-label">Tên Thể Loại</label>
                            <input type="text" id="nameInput" class="form-control">
                        </div>
                    </div>
                    
                    
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-success">Thêm Thể Loại</button>
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
                            <label for="nameInput" class="form-label">Tên Thể Loại</label>
                            <input type="text" id="nameInput" class="form-control">
                        </div>
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
                        <h6 class="mb-1 text-dark fw-bold">Bạn có chắc chắn muốn xóa  không?</h6>
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
