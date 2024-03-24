<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Phân công dữ liệu</h1>
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
              <form class="form-horizontal" @submit.prevent="assignData">
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
                    <div class="form-group col-md-3">
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
                    <div class="form-group col-md-3">
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
                    </div>
                    <div class="form-group col-md-3">
                      <label>Chọn danh sách dữ liệu:</label>
                      <div class="=row">
                        <select
                          class="form-control"
                          v-model="assignSelected"
                          @change="onChangeDataAssignsSelect($event)"
                        >
                          <option disabled value="">
                            Vui lòng chọn danh sách dữ liệu
                          </option>
                          <option
                            v-for="assign in dataAssigns"
                            v-bind:value="assign.code"
                            :key="assign.code"
                          >
                            Danh sách {{ assign.code }}
                          </option>
                        </select>
                        <small v-if="assignSelected != ''"
                          >Có tổng <strong>{{ totalUsers }}</strong> khách
                          hàng</small
                        >
                      </div>
                    </div>
                    <div class="form-group col-md-3">
                      <label>Chọn User Manager:</label>
                      <div class="=row">
                        <select
                          class="form-control"
                          v-model="userManagerId"
                          @change="onChangeUserManagerSelect($event)"
                        >
                          <option disabled value="">
                            Vui lòng chọn User Manager
                          </option>
                          <option
                            v-for="userManager in userManagers"
                            v-bind:value="userManager.id"
                            :key="userManager.id"
                          >
                            {{ userManager.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-footer">
                  <div class="form-group row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <button type="submit" class="float-right btn btn-danger">
                        Xác nhận
                      </button>
                    </div>
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
                          name: API_NAME,
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
                            <th>User Manager</th>
                            <th>Số dòng</th>
                            <th>Mở liên hệ</th>
                            <th style="width: 270px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(object, index) in data" :key="object.id">
                            <td>
                              {{
                                index +
                                1 +
                                (this.currentPage - 1) * this.LIMIT_ITEMS
                              }}
                            </td>
                            <td>{{ object.assignId.code }}</td>
                            <td>{{ object.userId.school }}</td>
                            <td>{{ object.assignId.admin ? object.assignId.admin.name : "Chưa phân công"}}</td>
                            <td><a href="" @click="clickLoadDataByAssign(object.assignId.id)">{{ object.assignId.quantity }} </a></td>
                            <td>
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <a class="btn bg-warning" href="">
                                  <input type="radio" name="options" id="option_b1" value="1" v-model="object.assignId.callStatus" @click="clickRadioCallStatus($event, object.assignId.code, object.assignId.id, object.assignId.admin)"> <label for="option_b1"><strong>Lần 1</strong></label>
                                  </a>
                                <a class="btn bg-warning" href="">
                                  <input type="radio" name="options" id="option_b2" value="2" v-model="object.assignId.callStatus" @click="clickRadioCallStatus($event, object.assignId.code, object.assignId.id, object.assignId.admin)"> <label for="option_b2"><strong>Lần 2</strong></label>
                                  </a>
                                <a class="btn bg-warning" href="">
                                  <input type="radio" name="options" id="option_b3" value="3" v-model="object.assignId.callStatus" @click="clickRadioCallStatus($event, object.assignId.code, object.assignId.id, object.assignId.admin)"> <label for="option_b3"><strong>Lần 3</strong></label>
                                </a>
                                <a class="btn bg-warning" href="">
                                  <input type="radio" name="options" id="option_b4" value="0" v-model="object.assignId.callStatus" @click="clickRadioCallStatus($event, object.assignId.code, object.assignId.id, object.assignId.admin)"> <label for="option_b4"><strong>Đóng</strong></label>
                                  </a>
                              </div>
                            </td>
                            <td>
                              <div class="row">
                                <div class="col">
                                  <router-link
                                    :to="{
                                      name: 'divide-data',
                                      params: { id: object.id },
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
                        name: API_NAME,
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
                        name: API_NAME,
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
                        name: API_NAME,
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
import { useRouter } from "vue-router";


export default {
  setup() {
    const provinceId = ref("");
    const schoolId = ref("");
    const assignSelected = ref("");
    const userManagerId = ref("");
    const API_NAME = "assign-data";
    const router = useRouter();
    return {
      provinceId,
      schoolId,
      assignSelected,
      userManagerId,
      API_NAME,
      router,
    };
  },
  data() {
    return {
      data: [],
      provinces: [],
      schools: [],
      dataAssigns: [],
      userManagers: [],
      totalUsers: 0,
      totalPart: 0,
      totalPages: 0,
      currentPage: 1,
      LIMIT_ITEMS: 1,
      searchKeyword: "",
      isCheck: "checked",
      assignId: 0,
      assgin: {
        id: 0,
        admin: "",
        code: "",
        quantity: 0,
        callStatus: 0,
        time: "",
      },
      admin: {
        // dùng để show
        code: "",
        name: "",
        birthday: "",
        username: "",
        password: "",
        gender: true,
        phone: "",
        email: "",
        address: "",
        role: true,
        status: true,
      },
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
        .fetchData(page, this.searchKeyword, "divide-data")
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
    getAssign(assignSelected) {
      axios
        .post("http://localhost:8083/api/user-assign", {
          code: assignSelected,
        })
        .then((response) => {
          this.assign = response.data;
          this.totalUsers = response.data.quantity;
          this.assignId = response.data.id;
          console.error(this.assignId);
        })
        .catch((error) => {
          console.error("Error fetching admins:", error);
        });
    },
    getListUserManager() {
      axios
        .post("http://localhost:8083/api/admin-role", {
          check: false,
        })
        .then((response) => {
          this.userManagers = response.data;
        })
        .catch((error) => {
          console.error("Error fetching admins:", error);
        });
    },
    getUserManager(userManagerId) {
      axios
        .post("http://localhost:8083/api/user-manager", {
          id: userManagerId,
        })
        .then((response) => {
          this.admin = response.data;
        })
        .catch((error) => {
          console.error("Error fetching admins:", error);
        });
    },
    getListAssignBySchool(schoolId) {
      axios
        .post("http://localhost:8083/api/assigns", {
          code: schoolId,
        })
        .then((response) => {
          this.dataAssigns = response.data;
        })
        .catch((error) => {
          console.error("Error fetching admins:", error);
        });
    },
    async assignData() {
      //if(this.part == 0) this.toastAlert("error", "Vui lòng chọn số phần cần chia ^-^");
      if (this.totalUsers != 0) {
        axios
          .put("http://localhost:8083/api/assign", {
            id: this.assignId,
            admin: this.admin,
            code: this.assignSelected,
          })
          .then((response) => {
            console.log(response.data);
            this.toastAlert("success", "Phân bố dữ liệu thành công !!!");
            this.getListAssignBySchool("");
          })
          .catch(() => {
            this.toastAlert("error", "Có tí trục trặc rồi ^-^");
          });
      } else this.toastAlert("error", "Vui lòng chọn danh sách khác ^-^");
    },
    clickRadioCallStatus(event,code, id, admin){
      axios
          .put("http://localhost:8083/api/assign", {
            id: id,
            admin: admin,
            callStatus: event.target.value,
            code: code,
          })
          .then((response) => {
            console.log(response.data);
            this.toastAlert("success", "Đã thay đổi lần liên hệ !!!");
            this.getListAssignBySchool("");
          })
          .catch(() => {
            this.toastAlert("error", "Có tí trục trặc rồi ^-^");
          });
          console.log(id);
          console.log(event.target.value);
          console.log(code);
    },
    clickLoadDataByAssign(value){
      localStorage.setItem("isAssignData", true);
      
      localStorage.setItem("idAssign", value);
      this.router.push("/admin/data-list");
    },
    onChangeProvinceSelect(event) {
      this.getListSchoolsByProvince(event.target.value);
    },
    onChangeSchoolSelect(event) {
      this.getListAssignBySchool(event.target.value);
    },
    onChangeDataAssignsSelect(event) {
      this.getAssign(event.target.value);
    },
    onChangeUserManagerSelect(event) {
      this.getUserManager(event.target.value);
      console.log(this.getUserManager(event.target.value));
    },
    toastAlert(icon, title) {
      MethodComponent.methods.showToastAlert(this.getSwalTopRight, icon, title);
    },
  },
  mounted() {
    const page = parseInt(this.$route.query.page) || 1;
    this.fetchData(page);
    this.fetchProvinces();
    this.getListUserManager();
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