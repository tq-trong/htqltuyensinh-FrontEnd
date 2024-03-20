import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/admin/HomeView.vue'
import UserListView from '../views/admin/UserListView.vue'
import AddUserView from '../views/admin/AddUserView.vue'
import EditUserView from '../views/admin/EditUserView.vue'
import DataListView from '../views/admin/DataListView.vue'
import AddDataView from '../views/admin/AddDataView.vue'
import DivideDataView from '../views/admin/DivideDataView.vue'
import AssignDataView from '../views/admin/AssignDataView.vue'
import LoginTimeView from '../views/admin/LoginTimeView.vue'
import ChangeLogListView from '../views/admin/ChangeLogListView.vue'
import FileListView from '../views/admin/FileListView.vue'
import DataDetailView from '../views/admin/DataDetailView.vue'
import SearchView from '../views/user/SearchView.vue'

import AdminLayout from '../layouts/AdminLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'

import LoginPage from '../components/LoginPage.vue';



const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView,
    meta: {
      layout: BlankLayout
    }
  },
  {
    path: '/admin',
    name: 'home',
    component: HomeView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      layout: BlankLayout
    }
  },
  {
    path: '/admin/user-list',
    name: 'user-list',
    component: UserListView,
    props: route => ({
      page: parseInt(route.query.page) || 1, // Truyền tham số page từ URL vào props
      keyword: route.query.keyword || '' // Truyền tham số keyword từ query string vào props, mặc định là null nếu không có keyword
    }),
    meta: {
      layout: AdminLayout
    }

  },
  {
    path: '/admin/edit-user/:id',
    name: 'edit-user',
    component: EditUserView,
    props: route => ({
      id: parseInt(route.params.id) || null, // Truyền tham số page từ URL vào props
      page: parseInt(route.query.page) || 1, // Truyền tham số page từ URL vào props
      keyword: route.query.keyword || '' // Truyền tham số keyword từ query string vào props, mặc định là null nếu không có keyword
    }),
    meta: {
      layout: AdminLayout
    }

  },
  {
    path: '/admin/add-user',
    name: 'add-user',
    component: AddUserView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/data-list',
    name: 'data-list',
    component: DataListView,
    props: route => ({
      page: parseInt(route.query.page) || 1, // Truyền tham số page từ URL vào props
      keyword: route.query.keyword || '' // Truyền tham số keyword từ query string vào props, mặc định là null nếu không có keyword
    }),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/add-data',
    name: 'add-data',
    component: AddDataView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/divide-data',
    name: 'divide-data',
    component: DivideDataView,
    props: route => ({
      page: parseInt(route.query.page) || 1, // Truyền tham số page từ URL vào props
      keyword: route.query.keyword || '' // Truyền tham số keyword từ query string vào props, mặc định là null nếu không có keyword
    }),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/assign-data',
    name: 'assign-data',
    component: AssignDataView,
    props: route => ({
      page: parseInt(route.query.page) || 1, // Truyền tham số page từ URL vào props
      keyword: route.query.keyword || '' // Truyền tham số keyword từ query string vào props, mặc định là null nếu không có keyword
    }),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/login-time',
    name: 'login-time',
    component: LoginTimeView,
    props: route => ({
      page: parseInt(route.query.page) || 1, // Truyền tham số page từ URL vào props
      keyword: route.query.keyword || '' // Truyền tham số keyword từ query string vào props, mặc định là null nếu không có keyword
    }),
    meta: {
      layout: AdminLayout
    }
  },

  {
    path: '/admin/change-log-list',
    name: 'change-log-list',
    component: ChangeLogListView,
    props: route => ({
      page: parseInt(route.query.page) || 1, // Truyền tham số page từ URL vào props
      keyword: route.query.keyword || '' // Truyền tham số keyword từ query string vào props, mặc định là null nếu không có keyword
    }),
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/file-list',
    name: 'file-list',
    component: FileListView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/data-detail/:id',
    name: 'data-detail',
    component: DataDetailView,
    props: route => ({
      id: parseInt(route.params.id) || null, // Truyền tham số page từ URL vào props
    }),
    meta: {
      layout: AdminLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active" // active class for *exact* links.
})

export default router

