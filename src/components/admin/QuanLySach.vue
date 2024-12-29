<template>
	<div>
		<div class="container mt-4">
			<div class="card shadow-lg">
				<div class="card-header bg-primary text-white rounded-top">
					<div class="d-flex justify-content-between align-items-center">
						<h5 class="mb-0">Danh Mục Sách</h5>
						<button class="btn btn-light text-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#addModal">
							<i class="fas fa-plus me-1"></i> Thêm Sách
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
											<input type="text" class="form-control rounded-start" placeholder="Tìm kiếm..." />
											<button class="btn btn-primary rounded-end" type="button">
												<i class="bx bx-search"></i> Tìm
											</button>
										</div>
									</th>
								</tr>
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">Hình Ảnh</th>
									<th class="text-center">Tên Sách</th>
									<th class="text-center">Tác Giả</th>
									<th class="text-center">Mô Tả Ngắn</th>
									<th class="text-center">Giá Tiền</th>
									<th class="text-center">Nhà Xuất Bản</th>
									<th class="text-center">Số Lượng</th>
									<th class="text-center">Trạng Thái</th>
									<th class="text-center">Thể Loại</th>
									<th class="text-center">Vị Trí</th>
									<th class="text-center">Hành Động</th>
								</tr>
							</thead>
							<tbody v-for="(book, index) in books" :key="index">
								<tr class="table-row-hover">
									<td class="text-center">{{ index + 1 }}</td>
									<td class="text-center">
										<img v-bind:src="book.hinh_anh" alt="Book Image" class="img-fluid rounded shadow-sm"
											style="max-width: 80px; height: auto" />
									</td>
									<td>{{ book.ten_sach }}</td>
									<td class="text-center">{{ book.ten_tac_gia }}</td>
									<td class="text-center align-middle">
										<button class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#moTaModal">
											<i class="bx bx-blanket me-0"></i>
										</button>
									</td>
									<td class="text-center">{{ book.gia_tien }}</td>
									<td class="text-center">{{ book.ten_nha_xuat_ban }}</td>
									<td class="text-center">{{ book.so_luong }}</td>
									<td class="align-middle text-center">
										<button class="btn btn-success btn-sm w-100 shadow-sm">Đang Còn</button>
									</td>
									<td class="text-center">Comic</td>
									<td class="text-center">{{ book.ten_vi_tri }}</td>
									<td class="text-center">
										<button @click="edit_book = Object.assign({}, book)" class="btn btn-sm btn-primary me-2 shadow-sm"
											data-bs-toggle="modal" data-bs-target="#editModal">
											<i class="fas fa-edit"></i> Chỉnh Sửa
										</button>
										<button @click="delete_book = Object.assign({}, book)" class="btn btn-sm btn-danger shadow-sm" data-bs-toggle="modal"
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
						<h5 class="modal-title" id="exampleModalLabel">Thêm Mới Sách</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="row mb-3">
								<div class="col-md-6">
									<label for="imageInput" class="form-label">Hình Ảnh</label>
									<input v-model="create_books.hinh_anh" type="text" class="form-control" />
								</div>
								<div class="col-md-6">
									<label for="nameInput" class="form-label">Tên Sách</label>
									<input v-model="create_books.ten_sach" type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-md-6">
									<label for="authorInput" class="form-label">Tác Giả</label>
									<select v-model="create_books.id_tac_gia" class="form-select" name id>
										<option :key="k" v-for="(v, k) in TG" :value="v.id">{{ v.ten_tac_gia }}</option>
									</select>
								</div>
								<div class="col-md-6">
									<label for="priceInput" class="form-label">Giá Tiền</label>
									<input v-model="create_books.gia_tien" type="text" id="priceInput" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-md-6">
									<label for="publisherInput" class="form-label">Nhà Xuất Bản</label>
									<select v-model="create_books.id_nha_xuat_ban" class="form-select" name id>
										<option :key="k" v-for="(v, k) in NXB" :value="v.id">{{ v.ten_nha_xuat_ban }}
										</option>
									</select>
								</div>
								<div class="col-md-6">
									<label for="quantityInput" class="form-label">Số Lượng</label>
									<input v-model="create_books.so_luong" type="number" id="quantityInput" class="form-control" />
								</div>
							</div>
							<div class="mb-3">
								<label for="descriptionInput" class="form-label">Mô Tả Ngắn</label>
								<textarea v-model="create_books.mo_ta" id="descriptionInput" class="form-control" rows="4"></textarea>
							</div>
							<div class="row mb-3">
								<div class="col-md-6">
									<label for="statusSelect" class="form-label">Trạng Thái</label>
									<select v-model="create_books.trang_thai" id="statusSelect" class="form-select">
										<option value="1">Đang còn</option>
										<option value="0">Tạm Hết</option>
									</select>
								</div>
								<div class="col-md-6">
									<label for="categorySelect" class="form-label">Thể Loại</label>
									<select id="categorySelect" class="form-select">
										<option value="0">Thể loại 1</option>
										<option value="1">Thể loại 2</option>
									</select>
								</div>
							</div>
							<div class="mb-3">
								<label for="locationInput" class="form-label">Vị Trí</label>
								<select v-model="create_books.id_vi_tri" class="form-select" name id>
									<option :key="k" v-for="(v, k) in VT" :value="v.id">{{ v.ten_vi_tri }}</option>
								</select>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Đóng</button>
						<button @:click="themBooks()" type="button" class="btn btn-success">Thêm Sách</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal chỉnh sửa-->
		<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header bg-warning text-white">
						<h5 class="modal-title" id="exampleModalLabel">Chỉnh Sửa Sách</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="row mb-3">
								<div class="col-md-6">
									<label for="editImageInput" class="form-label">Hình Ảnh</label>
									<input v-model="edit_book.hinh_anh" type="text" id="editImageInput" class="form-control" />
								</div>
								<div class="col-md-6">
									<label for="editNameInput" class="form-label">Tên Sách</label>
									<input v-model="edit_book.ten_sach" type="text" id="editAuthorInput" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-md-6">
									<label for="editAuthorInput" class="form-label">Tác Giả</label>
									<select v-model="edit_book.id_tac_gia" class="form-select" name id>
										<option :key="k" v-for="(v, k) in TG" :value="v.id">{{ v.ten_tac_gia }}</option>
									</select>
								</div>
								<div class="col-md-6">
									<label for="editPriceInput" class="form-label">Giá Tiền</label>
									<input v-model="edit_book.gia_tien" type="text" id="editPriceInput" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-md-6">
									<label for="editPublisherInput" class="form-label">Nhà Xuất Bản</label>
									<select v-model="edit_book.id_nha_xuat_ban" class="form-select" name id>
										<option :key="k" v-for="(v, k) in NXB" :value="v.id">{{ v.ten_nha_xuat_ban }}
										</option>
									</select>
								</div>
								<div class="col-md-6">
									<label for="editQuantityInput" class="form-label">Số Lượng</label>
									<input v-model="edit_book.so_luong" type="number" id="editQuantityInput" class="form-control" />
								</div>
							</div>
							<div class="mb-3">
								<label for="editDescriptionInput" class="form-label">Mô Tả Ngắn</label>
								<textarea v-model="edit_book.mo_ta" id="editDescriptionInput" class="form-control" rows="4"></textarea>
							</div>
							<div class="row mb-3">
								<div class="col-md-6">
									<label for="editStatusSelect" class="form-label">Trạng Thái</label>
									<select v-model="edit_book.trang_thai" id="editStatusSelect" class="form-select">
										<option value="1">Đang còn</option>
										<option value="0">Tạm Hết</option>
									</select>
								</div>
								<div class="col-md-6">
									<label for="editCategorySelect" class="form-label">Thể Loại</label>
									<select id="editCategorySelect" class="form-select">
										<option value="0">Thể loại 1</option>
										<option value="1">Thể loại 2</option>
									</select>
								</div>
							</div>
							<div class="mb-3">
								<label for="editLocationInput" class="form-label">Vị Trí</label>
								<select v-model="edit_book.id_vi_tri" class="form-select" name id>
									<option :key="k" v-for="(v, k) in VT" :value="v.id">{{ v.ten_vi_tri }}</option>
								</select>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Đóng</button>
						<button @click="chinhSuaBooks()" type="button" class="btn btn-warning">Cập Nhật</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal xoá-->
		<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header bg-danger text-white">
						<h5 class="modal-title" id="exampleModalLabel">Xóa Sách</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="alert alert-danger d-flex align-items-center">
							<div class="me-3">
								<i class="bx bxs-message-square-x text-dark" style="font-size: 2rem"></i>
							</div>
							<div>
								<h6 class="mb-1 text-dark fw-bold">Bạn có chắc chắn muốn xóa cuốn sách này không?</h6>
								<p class="mb-0 text-dark">
									<strong>LƯU Ý:</strong> Hành động này sẽ không thể hoàn tác!
								</p>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Đóng</button>
						<button @click="XoaBooks()" type="button" class="btn btn-danger">Xác Nhận Xóa</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal mô tả ngắn-->
		<div class="modal fade" id="moTaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header bg-info text-white">
						<h5 class="modal-title" id="exampleModalLabel">Mô Tả Ngắn Sách</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="text-justify" style="line-height: 1.8">
							<p>
								<strong>“Vì cậu là bạn nhỏ của tớ”</strong> là cuốn sách đầu tay
								đánh dấu chặng hành trình phát triển, nỗ lực không ngừng nghỉ của
								Tác giả, MC, Content Creator Tun Phạm.
							</p>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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
			edit_book: {},
			TG: [],
			NXB: [],
			books: [],
			create_books: {},
			errorMessage: null,
			VT: [],
			delete_book: {}
		};
	},
	created() {
		this.fetchTG();
		this.fetchVT();
		this.fetchNXB();
		this.fetchBooks();
	},
	methods: {
		fetchBooks() {
			axios
				.get("http://127.0.0.1:8000/api/sach/")
				.then(response => {
					this.books = response.data.data;
				})
				.catch(error => {
					console.error("Error fetching books data:", error);
				});
		},
		fetchNXB() {
			axios
				.get("http://127.0.0.1:8000/api/nha-xuat-ban/")
				.then(response => {
					this.NXB = response.data.data;
				})
				.catch(error => {
					console.error("Error fetching publishers data:", error);
				});
		},
		fetchVT() {
			axios
				.get("http://127.0.0.1:8000/api/vi-tri/")
				.then(response => {
					this.VT = response.data.data;
				})
				.catch(error => {
					console.error("Error fetching positions data:", error);
				});
		},
		fetchTG() {
			axios
				.get("http://127.0.0.1:8000/api/tac-gia/")
				.then(response => {
					this.TG = response.data.data;
				})
				.catch(error => {
					console.error("Error fetching authors data:", error);
				});
		},
		themBooks() {
			axios
				.post("http://127.0.0.1:8000/api/sach/", this.create_books)
				.then(() => {
					this.fetchBooks(); 
					$('.close').click()	
				})
				.catch(error => {
					console.error("Error adding book:", error);
				});
		},
		chinhSuaBooks() {
			axios
				.put("http://127.0.0.1:8000/api/sach/" + this.edit_book.id_sach, this.edit_book)
				.then(() => {
					this.fetchBooks(); 
					$('.close').click()	
				})
				.catch(error => {
					console.error("Error editing book:", error);
				});
		},
		XoaBooks() {
			axios
				.delete("http://127.0.0.1:8000/api/sach/" + this.delete_book.id_sach)
				.then(() => {
					this.fetchBooks();
					$('.close').click()	
				})
				.catch(error => {
					console.error("Error deleting book:", error);
				});
		}
	}
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
