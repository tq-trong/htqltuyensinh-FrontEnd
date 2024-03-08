<template>
  <aside class="main-sidebar elevation-4 sidebar-light-warning">
    <!-- Brand Logo -->
    <router-link to="/admin" class="brand-link">
      <img
        src="@/assets/logo.png"
        alt="AdminLTE Logo"
        class="brand-image img-size-50"
        style="opacity: 0.8"
      />
      <span class="brand-text fontawesome" style="font-size: 0.75em"
        ><b>HTQL TUYỂN SINH</b></span
      >
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="@/assets/logo.png"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="" class="d-block">{{ upperCaseName }}</a>
        </div>
      </div>
      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Tìm kiếm"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
          id="menu"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <!-- menu-is-opening menu-open -->
            <a
              href="#"
              class="nav-link"
              :class="{ active: menuOpened === 'user' }"
              @click="toggleMenu('user')"
            >
              <i class="nav-icon fas fa-light fa-users"></i>
              <p>
                Quản lý người dùng
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/admin/user-list" class="nav-link">
                  <!-- active -->
                  <i class="far fa-circle nav-icon"></i>
                  <p>Danh sách người dùng</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/add-user" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Thêm người dùng</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              :class="{ active: menuOpened === 'data' }"
              @click="toggleMenu('data')"
            >
              <i class="nav-icon fas fa-light fa-database"></i>
              <p>
                Quản lý dữ liệu
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/admin/data-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Danh sách dữ liệu</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/add-data" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Thêm dữ liệu</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/divide-data" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Phân đoạn dữ liệu</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/assign-data" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Phân chia dữ liệu</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-light fa-calculator"></i>
              <p>
                Thống kê dữ liệu
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Theo ngày</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Theo kết quả khai thác</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Theo trạng thái</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Theo liên hệ</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Theo chuyên đề</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/admin/login-time" class="nav-link">
              <i class="nav-icon fas fa-light fa-clock"></i>
              <p>Thời gian đăng nhập</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/change-log-list" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>Xem nhật ký thay đổi</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/file-list" class="nav-link">
              <i class="nav-icon fas fa-light fa-file"></i>
              <p>Xem danh sách hồ sơ</p>
            </router-link>
          </li>
          <div class="user-panel mt-3 pb-3 mb-3 d-flex"></div>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="logout">
              <i class="nav-icon fas fa-light fa-arrow-left"></i>
              <p>Đăng xuất</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userData: JSON.parse(localStorage.getItem("userData")) || {},
      loginTimeCreated: JSON.parse(localStorage.getItem("loginTimeCreated")) || {},
      start: localStorage.getItem("start") || {},
      menuOpened: null, // Biến để theo dõi trạng thái mở/closed của menu
    };
  },

  computed: {
    // Tạo computed property để chuyển đổi userData.name thành chữ in hoa
    upperCaseName() {
      return this.userData.name ? this.userData.name.toUpperCase() : "";
    },
  },
  methods: {
    logout() {
      axios.post(`http://localhost:8083/api/login-time`, {
        admin: this.userData,
        start: new Date(this.start),
      });
      // console.log(this.loginTimeCreated.id);
      // console.log(this.loginTimeCreated);
      console.log(this.start);
      // Xóa trạng thái đăng nhập khỏi localStorage khi đăng xuất
      localStorage.removeItem("loginTimeCreated");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
      localStorage.removeItem("userData");
      this.isLoggedIn = false;
      // Điều hướng người dùng đến trang đăng nhập sau khi đăng xuất

      this.$router.push("/login");
    },
    toggleMenu(menuType) {
      if (this.menuOpened === menuType) {
        this.menuOpened = null;
      } else {
        this.menuOpened = menuType;
      }
    },
  },
};
</script>