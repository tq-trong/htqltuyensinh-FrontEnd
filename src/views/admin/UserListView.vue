<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Danh sách người dùng</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <router-link to="/admin" class="breadcrumb-item">Trang chủ</router-link>
              <li class="breadcrumb-item active">Danh sách người dùng</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px">
                    <input
                      v-model="searchKeyword"
                      type="text"
                      name="table_search"
                      class="form-control float-right"
                      placeholder="Tìm kiếm ..."
                    />

                    <div class="input-group-append">
                      <router-link
                        :to="{
                          name: 'user-list',
                          query: {
                            page: 1,
                            keyword: searchKeyword,
                          },
                        }"
                        class="btn btn-outline-secondary"
                      >
                        <i class="fas fa-search"></i>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <!-- /.col -->
                <div class="col-md-12">
                  <div class="card">
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th style="width: 10px">#</th>
                            <th style="width: 20px">Code</th>
                            <th>Họ và tên</th>
                            <th>Chức vụ</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>SĐT</th>
                            <th>Email</th>
                            <th style="width: 270px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(admin, index) in admins" :key="admin.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ admin.code }}</td>
                            <td>{{ admin.name }}</td>
                            <td>
                              <span
                                :class="
                                  admin.role
                                    ? 'badge bg-danger'
                                    : 'badge bg-warning'
                                "
                              >
                                {{ admin.role ? "admin" : "usermanager" }}
                              </span>
                            </td>
                            <td>{{ formattedDate(admin.birthday) }}</td>
                            <td>{{ admin.gender ? "Nam" : "Nữ" }}</td>
                            <td>{{ admin.phone }}</td>
                            <td>{{ admin.email }}</td>
                            <td>
                              <div class="row">
                                <div class="col">
                                  <router-link
                                    :to="{
                                      name: 'edit-user',
                                      params: { id: admin.id },
                                    }"
                                    class="btn btn-warning btn-sm"
                                  >
                                    <i class="fas fa-edit"></i> Tùy chỉnh
                                  </router-link>
                                </div>
                                <div class="col">
                                  <a class="btn btn-danger btn-sm" href="#">
                                    <i class="fas fa-trash"> Xóa</i>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.col -->
              </div>
              <!-- Hiển thị thanh phân trang -->
              <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                  <li class="page-item">
                    <router-link
                      :to="{
                        name: 'user-list',
                        query: { page: currentPage < 1 ? currentPage - 1 : 1, keyword: searchKeyword },
                      }"
                      class="page-link"
                      :class="{ active: currentPage === 1 }"
                      >&laquo;</router-link
                    >
                  </li>
                  <li
                    v-for="pageNumber in displayedPages"
                    :key="pageNumber"
                    class="page-item"
                  >
                    <router-link
                      :to="{
                        name: 'user-list',
                        query: { page: pageNumber, keyword: searchKeyword },
                      }"
                      class="page-link"
                      :class="{ active: currentPage === pageNumber }"
                      >{{ pageNumber }}</router-link
                    >
                  </li>
                  <li class="page-item">
                    <router-link
                      :to="{
                        name: 'user-list',
                        query: { page: currentPage < totalPages ? currentPage + 1 : totalPages, keyword: searchKeyword },
                      }"
                      class="page-link"
                      :class="{ active: currentPage === totalPages }"
                      >&raquo;</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MethodComponent from "@/components/methods/MethodComponent.vue";
const API_NAME = "admins";
export default {
  data() {
    return {
      admins: [],
      totalPages: 0,
      currentPage: 1,
      searchKeyword: "",
    };
  },
  computed: {
    displayedPages() {
      return MethodComponent.methods.calculateDisplayedPages(this.currentPage, this.totalPages);
    },
  },
  methods: {
    fetchAdmins(page) {
      MethodComponent.methods.fetchData(page, this.searchKeyword, API_NAME)
        .then(response => {
          this.admins = response.data.listResult;
          this.totalPages = response.data.totalPage;
          this.currentPage = response.data.page;
        })
        .catch(error => {
          console.error("Error fetching admins:", error);
        });
    },
    formattedDate(birthday) {
      return MethodComponent.methods.formatBirthday_VN(birthday);
    },
  },
  mounted() {
    const page = parseInt(this.$route.query.page) || 1;
    this.fetchAdmins(page);
    this.currentPage = page;
  },
  watch: {
    "$route.query.page"(newPage) {
      this.fetchAdmins(parseInt(newPage) || 1);
      this.currentPage = parseInt(newPage) || 1;
    },
    "$route.query.keyword"(newKeyword) {
      this.searchKeyword = newKeyword || "";
      this.fetchAdmins(this.currentPage);
    },
  },
};
</script>

