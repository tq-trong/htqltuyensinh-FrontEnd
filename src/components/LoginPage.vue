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
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import MethodComponent from "@/components/methods/MethodComponent.vue";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const isLoggedIn = ref(false);

   const currentTimeString = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const currentTime = ref(new Date(currentTimeString));

    // Thực hiện việc thêm múi giờ +7
    currentTime.value.setHours(currentTime.value.getHours() + 7);


    const swalTopRight = MethodComponent.methods.swalTopRight();
    const router = useRouter();

    const login = () => {
      
      axios
        .post("http://localhost:8083/login", {
          username: username.value,
          password: password.value,
        })
        .then((response) => {
          const userData = response.data;

          localStorage.setItem("userData", JSON.stringify(userData));

          const authorities = response.data.authorities.map(
            (auth) => auth.authority
          );

          // axios.post(`http://localhost:8083/api/login-time`, {
          //     admin: userData,
          //   }).then((response) => {
          //     const loginTimeCreated = response.data;
          //     console.log(loginTimeCreated);
          //     localStorage.setItem("loginTimeCreated", JSON.stringify(loginTimeCreated));
          //   });
console.log(currentTime.value);
localStorage.setItem("start", currentTime.value);
          if (authorities.includes("ADMIN")) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", "ADMIN");
            isLoggedIn.value = true;
            
            router.push("/admin"); // Điều hướng đến trang admin
          } else if (authorities.includes("USERMANAGER")) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", "USERMANAGER");
            isLoggedIn.value = true;
            router.push("/usermanager"); // Điều hướng đến trang usermanager
          } else {
            toastAlert("error", "Lỗi");
          }
        })
        .catch(() => {
          toastAlert("error", "Sai tên đăng nhập hoặc mật khẩu !!!");
        });
    };


    const toastAlert = (icon, title) => {
      MethodComponent.methods.showToastAlert(swalTopRight, icon, title);
    };

    return {
      username,
      password,
      isLoggedIn,
      login,
      toastAlert,
      currentTime,
    };
  },
};
</script>