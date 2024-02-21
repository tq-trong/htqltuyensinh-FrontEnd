<template>
  <body class="hold-transition login-page" style="background-color: cadetblue">
    <center>
      <fieldset>
        <legend style="margin-top: 7%">
          <img src="@/assets/logo.png" alt="logo" class="logoImage" />
        </legend>
      </fieldset>
    </center>
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Đăng nhập vào trang quản lý</p>

          <form id="loginForm" @submit.prevent="login">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Tên đăng nhập"
                v-model="username"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Mật khẩu"
                v-model="password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="icheck-primary">
                  <input
                    type="checkbox"
                    name="remember_me"
                    value=""
                    id="remember_me"
                  />
                  <label for="remember_me"> Ghi nhớ tôi </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-6">
                <button
                  type="submit"
                  class="btn btn-primary btn-block swalDefaultError"
                >
                  Đăng nhập
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
    <!-- /.login-box -->
  </body>
</template>

<script>
import axios from "axios";
import MethodComponent from "@/components/methods/MethodComponent.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
      isLoggedIn: false,
    };
  },
  computed: {
    getSwalMixin() {
      return MethodComponent.methods.swalMixin();
    },
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8083/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          const userData = response.data;
          // Lưu toàn bộ thông tin người dùng vào localStorage
          localStorage.setItem("userData", JSON.stringify(userData));

          const authorities = response.data.authorities.map(
            (auth) => auth.authority
          );
          if (authorities.includes("ADMIN")) {
            // Đăng nhập thành công với vai trò ADMIN
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", "ADMIN");
            this.isLoggedIn = true;
            this.$router.push("/admin");
          } else if (authorities.includes("USERMANAGER")) {
            // Đăng nhập thành công với vai trò USERMANAGER
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", "USERMANAGER");
            this.isLoggedIn = true;
            this.$router.push("/usermanager");
          } else {
            // Không có vai trò nào phù hợp
           this.toastAlert("error", "Lỗi");
          }
        })
        .catch(() => {
          this.toastAlert("error", "Sai tên đăng nhập hoặc mật khẩu !!!");
        });
    },
    toastAlert(icon, title) {
      MethodComponent.methods.showToastAlert(this.getSwalMixin, icon, title);
    },
  },
};
</script>