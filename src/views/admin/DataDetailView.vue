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
                  {{ userData.phone }}
                </p>

                <ul class="list-group list-group-unbordered mb-3">
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
                    <b>Trường học:</b>
                    <a class="float-right">{{ userData.school }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Tỉnh:</b>
                    <a class="float-right">{{
                      getProvinceName(userData.province)
                    }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Nghề nghiệp:</b>
                    <a class="float-right">{{ userData.job }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Zalo:</b>
                    <a class="float-right">{{ userData.zalo }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Facebook:</b>
                    <a class="float-right">{{ userData.facebook }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>SĐT Cha:</b>
                    <a class="float-right">{{ userData.fatherphone }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>SĐT Mẹ:</b>
                    <a class="float-right">{{ userData.motherphone }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Hình thức thu thập:</b>
                    <a class="float-right">{{ userData.gatherDescription }}</a>
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
                      >Chi tiết</a
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
                        <!-- /.card-header -->
                        <div class="card-body">
                          <div class="row">
                            <div
                              class="col-12 col-md-12 col-lg-8 order-2 order-md-1"
                            >
                              <h5 class="text-muted">Ngành yêu thích</h5>
                              <ul class="list-unstyled">
                                <li
                                  v-for="(
                                    subject, index
                                  ) in userData.favoriteSubjects"
                                  :key="index"
                                >
                                  {{index + 1}}. {{ subject }}
                                </li>
                              </ul>
                            </div>
                            <div
                              class="col-12 col-md-12 col-lg-4 order-2 order-md-1"
                            >
                              <h5 class="text-muted">Hồ sơ</h5>
                              <ul class="list-unstyled">
                                <li>
                                  <a href class="btn-link text-secondary"
                                    ><i class="far fa-fw fa-file-word"></i>
                                    Functional-requirements.docx</a
                                  >
                                </li>
                                <li>
                                  <a href class="btn-link text-secondary"
                                    ><i class="far fa-fw fa-file-pdf"></i>
                                    UAT.pdf</a
                                  >
                                </li>
                                <li>
                                  <a href class="btn-link text-secondary"
                                    ><i class="far fa-fw fa-envelope"></i>
                                    Email-from-flatbal.mln</a
                                  >
                                </li>
                                <li>
                                  <a href class="btn-link text-secondary"
                                    ><i class="far fa-fw fa-image"></i>
                                    Logo.png</a
                                  >
                                </li>
                                <li>
                                  <a href class="btn-link text-secondary"
                                    ><i class="far fa-fw fa-file-word"></i>
                                    Contract-10_12_2014.docx</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <!-- /.card-body -->
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
              <div class="card-footer clearfix"></div>
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
  },
  data() {
    return {
      methodComponent: MethodComponent,
      isActive: true,
      provinces: [],
      roleUserLoggedIn: localStorage.getItem("role"),
      idUser: null,
      userData: {
        // dùng để show
        name: "",
        birthday: "",
        job: "",
        province: "",
        school: "",
        email: "",
        gender: true,
        phone: "",
        fatherphone: "",
        motherphone: "",
        zalo: "",
        facebook: "",
        gatherDescription: "",
        status: true,
        favoriteSubjects: [],
        descriptionSubject: "",
      },
      formData: {
        // Dùng để chỉnh sửa thông tin cá nhân
        name: "",
        birthday: "",
        job: "",
        province: "",
        school: "",
        email: "",
        gender: true,
        phone: "",
        fatherphone: "",
        motherphone: "",
        zalo: "",
        facebook: "",
        gatherDescription: "",
        status: true,
        favoriteSubjects: [],
        descriptionSubject: "",
      },
      Toast: null,
    };
  },
  mounted() {
    this.idUser = this.$route.params.id ? this.$route.params.id : null;
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      if (!this.idUser) {
        console.error("ID is not defined");
        return;
      }

      axios
        .get(`http://localhost:8083/api/users/${this.idUser}`)
        .then((response) => {
          this.userData = response.data.user; // Lưu dữ liệu trả về vào biến userData
          this.formData = { ...response.data.user };
          this.formData.birthday = this.formattedDateVN(this.formData.birthday);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
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
      this.fetchProvinces();
      const province = this.provinces.find(
        (province) => province.province_id === provinceId
      );
      return province ? province.province_name : "Unknown";
    },
    showPagination(id) {
      if (id == "activity") this.isActive = true;
      else this.isActive = false;
    },

    // async changeInfor() {
    //   try {
    //     await axios.put(`http://localhost:8083/api/admins/${this.idUser}`, {
    //       code: this.formData.code,
    //       name: this.formData.name,
    //       birthday: "2000-11-03",
    //       username: this.formData.username,
    //       gender: this.formData.gender,
    //       phone: this.formData.phone,
    //       email: this.formData.email,
    //       address: this.formData.address,
    //       role: this.userData.role,
    //       status: this.userData.status,
    //     });
    //     this.toastAlert("success", "Cập nhật thành công !!!");
    //     this.fetchUserData();
    //     console.log(this.formData.birthday);
    //   } catch (error) {
    //     console.log(this.formattedDateEN(this.formData.birthday));
    //     console.log(error);
    //     this.toastAlert("error", "Cập nhật không thành công !!!");
    //   }
    // },
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