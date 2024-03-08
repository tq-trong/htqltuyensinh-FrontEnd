<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Nhật ký thay đổi</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <router-link to="/admin" class="breadcrumb-item"
                >Trang chủ</router-link
              >
              <li class="breadcrumb-item active">Nhật ký thay đổi</li>
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
                          name: 'change-log-list',
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
                            <th>Thời gian</th>
                            <th>Người dùng</th>
                            <th>Chi tiết</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(changeLog, index) in changeLogs"
                            :key="changeLog.id"
                          >
                            <td>{{ index + 1 }}</td>
                            <td>{{ formattedDate(changeLog.time) }}</td>
                            <td>{{ changeLog.admin.name }}</td>
                            <td>{{ changeLog.description }}</td>
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
                        name: 'change-log-list',
                        query: {
                          page: currentPage < 1 ? currentPage - 1 : 1,
                          keyword: searchKeyword,
                        },
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
                        name: 'change-log-list',
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
                        name: 'change-log-list',
                        query: {
                          page:
                            currentPage < totalPages
                              ? currentPage + 1
                              : totalPages,
                          keyword: searchKeyword,
                        },
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
const API_NAME = "change-log";
export default {
  data() {
    return {
      changeLogs: [],
      totalPages: 0,
      currentPage: 1,
      searchKeyword: "",
    };
  },
  computed: {
    displayedPages() {
      return MethodComponent.methods.calculateDisplayedPages(
        this.currentPage,
        this.totalPages
      );
    },
  },
  methods: {
    fetchLogs(page) {
      MethodComponent.methods
        .fetchData(page, this.searchKeyword, API_NAME)
        .then((response) => {
          this.changeLogs = response.data.listResult;
          this.totalPages = response.data.totalPage;
          this.currentPage = response.data.page;
        })
        .catch((error) => {
          console.error("Error fetching admins:", error);
        });
    },
    formattedDate(dateString) {
      return MethodComponent.methods.formatDateTime(dateString);
    },
  },
  mounted() {
    const page = parseInt(this.$route.query.page) || 1;
    this.fetchLogs(page);
    this.currentPage = page;
  },
  watch: {
    "$route.query.page"(newPage) {
      this.fetchLogs(parseInt(newPage) || 1);
      this.currentPage = parseInt(newPage) || 1;
    },
    "$route.query.keyword"(newKeyword) {
      this.searchKeyword = newKeyword || "";
      this.fetchLogs(this.currentPage);
    },
  },
};
</script>

