<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Phân đoạn dữ liệu</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Layout</a></li>
              <li class="breadcrumb-item active">Fixed Layout</li>
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
              <form class="form-horizontal" @submit.prevent="divideData">
                <div class="card-header">
                  <h3 class="card-title">Title</h3>
                  <div class="card-tools">
                    <button
                      type="button"
                      class="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-tool"
                      data-card-widget="remove"
                      title="Remove"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="form-group col-md-4">
                      <label>Chọn tỉnh:</label>
                      <select
                        class="form-control"
                        v-model="provinceId"
                        @change="onChangeProvinceSelect($event)"
                      >
                        <option disabled value="">Vui lòng chọn tỉnh</option>
                        <option
                          v-for="province in provinces"
                          v-bind:value="province.province_id"
                          :key="province.province_id"
                        >
                          {{ province.province_name }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-4">
                      <label>Chọn trường:</label>
                      <select
                        class="form-control"
                        v-model="schoolId"
                        @change="onChangeSchoolSelect($event)"
                      >
                        <option disabled value="">Vui lòng chọn trường</option>
                        <option
                          v-for="school in schools"
                          v-bind:value="school.code"
                          :key="school.code"
                        >
                          {{ school.name }}
                        </option>
                      </select>
                      <small v-if="schoolId != 0"
                        >Có tổng <strong>{{ totalUsers }}</strong> khách
                        hàng</small
                      >
                    </div>
                    <div class="form-group col-md-4">
                      <label>Chia tổng khách hàng thành:</label>
                      <div class="=row">
                        <select class="form-control" v-model="part">
                          <option disabled value="">
                            Vui lòng chọn số phần cần phân chia
                          </option>
                          <option
                            v-for="part in totalPart"
                            v-bind:value="part"
                            :key="part"
                          >
                            {{ part }} phần
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-footer">
                  <div class="form-group">
                    <button type="submit" class="float-right btn btn-danger">
                      Xác nhận
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
                          name: 'divide-data',
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
                            <th>Code</th>
                            <th>Tên Trường</th>
                            <th>Số dòng</th>
                            <th style="width: 270px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(assgin, index) in data" :key="assgin.id">
                            <td>
                              {{
                                index +
                                1 +
                                (this.currentPage - 1) * this.LIMIT_ITEMS
                              }}
                            </td>
                            <td>{{ assgin.assignId.code }}</td>
                            <td>{{ assgin.userId.school }}</td>
                            <td>{{ assgin.assignId.quantity }}</td>
                            <td>
                              <div class="row">
                                <div class="col">
                                  <router-link
                                    :to="{
                                      name: 'divide-data',
                                      params: { id: assgin.id },
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
                        name: 'divide-data',
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
                        name: 'divide-data',
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
                        name: 'divide-data',
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
import { ref } from "vue";
import axios from "axios";
const API_NAME = "divide-data";

export default {
  setup() {
    const provinceId = ref("");
    const schoolId = ref("");
    const part = ref("");
    return {
      provinceId,
      schoolId,
      part,
    };
  },
  data() {
    return {
      data: [],
      provinces: [],
      schools: [],
      totalUsers: 0,
      totalPart: 0,
      totalPages: 0,
      currentPage: 1,
      searchKeyword: "",
      LIMIT_ITEMS: 1,
    };
  },
  computed: {
    displayedPages() {
      return MethodComponent.methods.calculateDisplayedPages(
        this.currentPage,
        this.totalPages
      );
    },
    getSwalTopRight() {
      return MethodComponent.methods.swalTopRight();
    },
  },
  methods: {
    fetchData(page) {
      MethodComponent.methods
        .fetchData(page, this.searchKeyword, API_NAME)
        .then((response) => {
          this.data = response.data.listResult;
          this.totalPages = response.data.totalPage;
          this.currentPage = response.data.page;
          console.log(response.data.totalPage);
        })
        .catch((error) => {
          console.error("Error fetching admins:", error);
        });
    },
    fetchProvinces() {
      MethodComponent.methods
        .fetchProvinces()
        .then((response) => {
          this.provinces = response.data.results;
        })
        .catch((error) => {
          console.error("Error fetching provinces:", error);
        });
    },
    getProvinceName(provinceId) {
      const province = this.provinces.find(
        (province) => province.province_id === provinceId
      );
      return province ? province.province_name : "Unknown";
    },

    getListSchoolsByProvince(provinceId) {
      axios
        .post("http://localhost:8083/api/schools", {
          id: provinceId,
        })
        .then((response) => {
          this.schools = response.data;
        })
        .catch((error) => {
          console.error("Error fetching admins:", error);
        });
    },
    gettotalUserBySchool(schoolId) {
      axios
        .post("http://localhost:8083/api/user-school", {
          code: schoolId,
        })
        .then((response) => {
          this.totalUsers = response.data;
          this.totalPart = Math.round(this.totalUsers / 5);
        })
        .catch((error) => {
          console.error("Error fetching admins:", error);
        });
    },
    async divideData() {
      if (this.part == 0)
        this.toastAlert("error", "Vui lòng chọn số phần cần chia ^-^");
      if (this.totalUsers != 0) {
        axios
          .post("http://localhost:8083/api/assign", {
            code: this.schoolId,
            quantity: this.part,
          })
          .then(() => {
            this.toastAlert("success", "Phân đoạn dữ liệu thành công !!!");
            this.fetchData(1);
            this.gettotalUserBySchool(this.schoolId);
          })
          .catch(() => {
            this.toastAlert("error", "Có tí trục trặc rồi ^-^");
          });
      } else this.toastAlert("error", "Không có dữ liệu để phân đoạn ^-^");
    },
    onChangeProvinceSelect(event) {
      this.getListSchoolsByProvince(event.target.value);
    },
    async onChangeSchoolSelect(event) {
      this.gettotalUserBySchool(event.target.value);
    },
    toastAlert(icon, title) {
      MethodComponent.methods.showToastAlert(this.getSwalTopRight, icon, title);
    },
  },
  mounted() {
    const page = parseInt(this.$route.query.page) || 1;
    this.fetchData(page);
    this.fetchProvinces();
    this.currentPage = page;
  },
  watch: {
    "$route.query.page"(newPage) {
      this.fetchData(parseInt(newPage) || 1);
      this.currentPage = parseInt(newPage) || 1;
    },
    "$route.query.keyword"(newKeyword) {
      this.searchKeyword = newKeyword || "";
      this.fetchData(this.currentPage);
    },
  },
};
</script>
