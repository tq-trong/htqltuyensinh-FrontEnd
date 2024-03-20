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
                        <select class="form-control" v-model="assignSelected" @change="onChangeDataAssignsSelect($event)">
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
                        <select class="form-control" v-model="userManagerId" @change="onChangeUserManagerSelect($event)">
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
                    <div class="col-md-4 ">
                      <button type="submit" class="float-right btn btn-danger">
                        Xác nhận
                      </button>
                    </div>
                  </div>
                </div>
              </form>
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
const API_NAME = "assign-data";

export default {
  setup() {
    const provinceId = ref("");
    const schoolId = ref("");
    const assignSelected = ref("");
    const userManagerId = ref("");
    return {
      provinceId,
      schoolId,
      assignSelected,
      userManagerId,
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
      searchKeyword: "",
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
        .fetchData(page, this.searchKeyword, API_NAME)
        .then((response) => {
          this.data = response.data.listResult;
          this.totalPages = response.data.totalPage;
          this.currentPage = response.data.page;
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
      if(this.totalUsers != 0){
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
      }else this.toastAlert("error", "Vui lòng chọn danh sách khác ^-^");
      
    },
    onChangeProvinceSelect(event) {
      this.getListSchoolsByProvince(event.target.value);
    },
    onChangeSchoolSelect(event) {
      this.getListAssignBySchool(event.target.value);
    },
    onChangeDataAssignsSelect(event){
      this.getAssign(event.target.value);
    },
    onChangeUserManagerSelect(event){
      this.getUserManager(event.target.value)
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