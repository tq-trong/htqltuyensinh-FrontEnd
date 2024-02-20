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
              <router-link to="/admin" class="breadcrumb-item">Trang chủ</router-link>
              <router-link to="/admin/user-list" class="breadcrumb-item">Danh sách người dùng</router-link>
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
                    <b>Giới tính:</b>
                    <a class="float-right">{{
                      userData.gender ? "Nam" : "Nữ"
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
                  <li class="list-group-item">
                    <b>Tên đăng nhập:</b>
                    <a class="float-right">{{ userData.username }}</a>
                  </li>
                  <li class="list-group-item">
                    <b>Mật khẩu:</b> <a class="float-right">●●●●●●●●●●</a>
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
                      >Hoạt động</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#detail" data-toggle="tab"
                      >Chỉnh sửa</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#changePass" data-toggle="tab"
                      >Đổi mật khẩu</a
                    >
                  </li>
                </ul>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
                    <div class="card-body"></div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="detail">
                    <!-- form start -->
                    <form class="form-horizontal" method="POST">
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label"
                          >Họ và tên:</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputName"
                            v-model="userData.name"
                            name="name"
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
                                :checked="userData.gender === true"
                                @change="userData.gender = true"
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
                                :checked="userData.gender === false"
                                @change="userData.gender = false"
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
                        <label for="inputName2" class="col-sm-2 col-form-label"
                          >SĐT:</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputName2"
                            v-model="userData.phone"
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
                            v-model="userData.email"
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
                            v-model="userData.address"
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
                    <form class="form-horizontal" id="doiMK" method="POST">
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-3 col-form-label"
                          >Mật khẩu hiện tại:</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="password"
                            name="passwordCurrent"
                            class="form-control"
                            id="inputName"
                            required
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
                            name="passwordNew"
                            class="form-control"
                            id="passwordNew"
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
                            name="passwordConfirm"
                            class="form-control"
                            id="passwordConfirm"
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

export default {
  data() {
    return {
      idUser: null,
      userData: [], // Khởi tạo biến để lưu dữ liệu trả về từ API
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
        .get(`http://localhost:8083/api/admins/${this.idUser}`)
        .then((response) => {
          this.userData = response.data.admin; // Lưu dữ liệu trả về vào biến userData
          console.log(this.idUser);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    },
  },
};
</script>