<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Thông tin cá nhân</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <router-link to="/admin" class="breadcrumb-item"
                >Trang chủ</router-link
              >
              <router-link to="/admin/user-list" class="breadcrumb-item"
                >Danh sách người dùng</router-link
              >
              <li class="breadcrumb-item active">Thông tin cá nhân</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <!-- Profile Image -->
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img
                    class="profile-user-img img-fluid img-circle"
                    src="@/assets/logo.png"
                    alt="User profile picture"
                  />
                </div>

                <h3 class="profile-username text-center">
                  {{ userData.name }}
                </h3>

                <p class="text-muted text-center">
                  {{ userData.code }}
                </p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Chức vụ:</b>
                    <a class="float-right">{{
                      userData.role ? "Admin" : "Usermanger"
                    }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Giới tính:</b>
                    <a class="float-right">{{
                      userData.gender ? "Nam" : "Nữ"
                    }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Ngày sinh:</b>
                    <a class="float-right">{{
                      formattedDateVN(userData.birthday)
                    }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>SĐT:</b>
                    <a class="float-right">{{ userData.phone }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Địa chỉ:</b>
                    <a class="float-right">{{ userData.address }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Email:</b>
                    <a class="float-right">{{ userData.email }}</a>
                  </li>
                </ul>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-8">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#activity"
                      data-toggle="tab"
                      @click="showPagination('activity')"
                      >Hoạt động</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#detail"
                      data-toggle="tab"
                      @click="showPagination('detail')"
                      >Chỉnh sửa</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#changePass"
                      data-toggle="tab"
                      @click="showPagination('changePass')"
                      >Đổi mật khẩu</a
                    >
                  </li>
                </ul>
              </div>
              <!-- /.card-header -->

              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
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
                                  <th>Chi tiết</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(changeLog, index) in changeLogs"
                                  :key="changeLog.id"
                                >
                                  <td>{{ index + 1 }}</td>
                                  <td>
                                    {{ formattedDateLog(changeLog.time) }}
                                  </td>
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
                    <!-- /.card-body -->
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="detail">
                    <!-- form start -->
                    <form class="form-horizontal" @submit.prevent="changeInfor">
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label"
                          >Họ và tên:</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            v-model="formData.name"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputEmail1" class="col-sm-2 col-form-label"
                          >Giới tính:</label
                        >
                        <div class="col-sm-5">
                          <div class="form-check">
                            <div class="custom-control custom-radio">
                              <input
                                class="custom-control-input"
                                type="radio"
                                id="customRadio1"
                                name="gender"
                                :value="true"
                                :checked="formData.gender === true"
                                @change="formData.gender = true"
                              />
                              <label
                                for="customRadio1"
                                class="custom-control-label"
                                >Nam</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="form-check">
                            <div class="custom-control custom-radio">
                              <input
                                class="custom-control-input"
                                type="radio"
                                id="customRadio2"
                                name="gender"
                                :value="false"
                                :checked="formData.gender === false"
                                @change="formData.gender = false"
                              />
                              <label
                                for="customRadio2"
                                class="custom-control-label"
                                >Nữ</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-2 col-form-label"
                          >Ngày sinh:</label
                        >
                        <div class="col-sm-10">
                          <div class="input-group">
                            <div class="input-group-prepend"></div>
                            <div
                              class="input-group date"
                              id="reservationdate"
                              data-target-input="nearest"
                            >
                              <input
                                type="date"
                                class="form-control datetimepicker-input"
                                v-model="formData.birthday"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputName2" class="col-sm-2 col-form-label"
                          >SĐT:</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputName2"
                            v-model="formData.phone"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label"
                          >Email:</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            v-model="formData.email"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputExperience"
                          class="col-sm-2 col-form-label"
                          >Địa chỉ:</label
                        >
                        <div class="col-sm-10">
                          <textarea
                            class="form-control"
                            id="inputExperience"
                            name="diachi"
                            required
                            v-model="formData.address"
                          ></textarea>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                          <button
                            type="submit"
                            class="btn btn-danger"
                            name="suathongtincanhan"
                          >
                            Xác nhận
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- /.tab-pane -->

                  <div class="tab-pane" id="changePass">
                    <form class="form-horizontal" @submit.prevent="changePass">
                      <div
                        class="form-group row"
                        v-if="roleUserLoggedIn === 'USERMANAGER'"
                      >
                        <label for="inputName" class="col-sm-3 col-form-label"
                          >Mật khẩu hiện tại:</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="password"
                            class="form-control"
                            v-model="currentPassword"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputEmail" class="col-sm-3 col-form-label"
                          >Mật khẩu mới:</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="password"
                            class="form-control"
                            v-model="newPassword"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputName2" class="col-sm-3 col-form-label"
                          >Xác nhận mật khẩu:</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="password"
                            class="form-control"
                            v-model="confirmPassword"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="offset-sm-3 col-sm-9">
                          <button
                            type="submit"
                            class="btn btn-danger"
                            name="xacnhandoimatkhau"
                          >
                            Xác nhận
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right" v-if="isActive">
                  <li class="page-item">
                    <router-link
                      :to="{
                        name: 'edit-user',
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
                        name: 'edit-user',
                        query: {
                          page: pageNumber,
                          keyword: searchKeyword,
                        },
                      }"
                      class="page-link"
                      :class="{ active: currentPage === pageNumber }"
                      >{{ pageNumber }}</router-link
                    >
                  </li>
                  <li class="page-item">
                    <router-link
                      :to="{
                        name: 'edit-user',
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
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import axios from "axios";
import MethodComponent from "@/components/methods/MethodComponent.vue";
export default {
  computed: {
    getSwalTopRight() {
      return MethodComponent.methods.swalTopRight();
    },
    displayedPages() {
      return MethodComponent.methods.calculateDisplayedPages(
        this.currentPage,
        this.totalPages
      );
    },
  },
  data() {
    return {
      isActive: true,
      changeLogs: [],
      totalPages: 0,
      currentPage: 1,
      searchKeyword: "",
      roleUserLoggedIn: localStorage.getItem("role"),
      idUser: null,
      userData: {
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
      formData: {
        // Dùng để chỉnh sửa thông tin cá nhân
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
      Toast: null,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  mounted() {
    this.idUser = this.$route.params.id ? this.$route.params.id : null;
    const page = parseInt(this.$route.query.page) || 1;
    this.fetchUserData(page);
    this.currentPage = page;
  },
  watch: {
    "$route.query.page"(newPage) {
      this.fetchUserData(parseInt(newPage) || 1);
      this.currentPage = parseInt(newPage) || 1;
    },
    "$route.query.keyword"(newKeyword) {
      this.searchKeyword = newKeyword || "";
      this.fetchUserData(this.currentPage);
    },
  },
  methods: {
    fetchUserData(page) {
      if (!this.idUser) {
        console.error("ID is not defined");
        return;
      }

      axios
        .get(`http://localhost:8083/api/admins/${this.idUser}`)
        .then((response) => {
          this.userData = response.data.admin; // Lưu dữ liệu trả về vào biến userData
          this.formData = { ...response.data.admin };
          this.formData.birthday = this.formattedDateVN(this.formData.birthday);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });

      axios
        .get(`http://localhost:8083/api/change-log/${this.idUser}?page=${page}`)
        .then((responseLog) => {
          this.changeLogs = responseLog.data.listResult; // Lưu dữ liệu trả về vào biến changeLogs
          this.totalPages = responseLog.data.totalPage;
          this.currentPage = responseLog.data.page;
        })
        .catch((error) => {
          console.error("Error fetching logs data:", error);
        });
    },

    showPagination(id) {
      if (id == "activity") this.isActive = true;
      else this.isActive = false;
    },

    async changeInfor() {
      try {
        await axios.put(`http://localhost:8083/api/admins/${this.idUser}`, {
          code: this.formData.code,
          name: this.formData.name,
          birthday: "2000-11-03",
          username: this.formData.username,
          gender: this.formData.gender,
          phone: this.formData.phone,
          email: this.formData.email,
          address: this.formData.address,
          role: this.userData.role,
          status: this.userData.status,
        });
        this.toastAlert("success", "Cập nhật thành công !!!");
        this.fetchUserData();
        console.log(this.formData.birthday);
      } catch (error) {
        console.log(this.formattedDateEN(this.formData.birthday));
        console.log(error);
        this.toastAlert("error", "Cập nhật không thành công !!!");
      }
    },

    async checkPass() {
      try {
        const response = await axios.post(
          `http://localhost:8083/api/admins/checkPass/${this.idUser}`,
          { password: this.currentPassword }
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return false;
      }
    },

    async changePass() {
      if (this.roleUserLoggedIn === "ADMIN") {
        if (this.newPassword === this.confirmPassword) {
          try {
            await this.updatePassword();
            this.toastAlert("success", "Đổi mật khẩu thành công !!!");
          } catch (error) {
            this.toastAlert("error", "Lỗi !!!");
          }
        } else {
          this.toastAlert("error", "Xác nhận mật khẩu không khớp !!!");
        }
      } else {
        const isPasswordCorrect = await this.checkPass();
        if (isPasswordCorrect) {
          if (this.newPassword === this.confirmPassword) {
            try {
              await this.updatePassword();
              this.toastAlert("success", "Đổi mật khẩu thành công !!!");
            } catch (error) {
              this.toastAlert("error", "Lỗi !!!");
            }
          } else {
            this.toastAlert("error", "Xác nhận mật khẩu không khớp !!!");
          }
        } else {
          this.toastAlert("error", "Mật khẩu hiện tại không chính xác !!!");
        }
      }
    },

    updatePassword() {
      return axios.put(`http://localhost:8083/api/admins/${this.idUser}`, {
        code: this.userData.code,
        name: this.userData.name,
        birthday: this.userData.birthday,
        username: this.userData.username,
        password: this.newPassword,
        gender: this.userData.gender,
        phone: this.userData.phone,
        email: this.userData.email,
        address: this.userData.address,
        role: this.userData.role,
        status: this.userData.status,
      });
    },
    formattedDateLog(dateString) {
      return MethodComponent.methods.formatDateTime(dateString);
    },
    toastAlert(icon, title) {
      MethodComponent.methods.showToastAlert(this.getSwalTopRight, icon, title);
    },

    formattedDateVN(birthday) {
      return MethodComponent.methods.formatBirthday_VN(birthday);
    },
    formattedDateEN(birthday) {
      return MethodComponent.methods.formatBirthday_EN(birthday);
    },
  },
};
</script>