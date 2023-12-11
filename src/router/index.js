import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/admin/HomeView.vue'
import UserListView from '../views/admin/UserListView.vue'
import AddUserView from '../views/admin/AddUserView.vue'
import DataListView from '../views/admin/DataListView.vue'
import AddDataView from '../views/admin/AddDataView.vue'
import DivideDataView from '../views/admin/DivideDataView.vue'
import AssignDataView from '../views/admin/AssignDataView.vue'
import LoginTimeView from '../views/admin/LoginTimeView.vue'
import ChangeLogListView from '../views/admin/ChangeLogListView.vue'
import FileListView from '../views/admin/FileListView.vue'

import AdminLayout from '../layouts/AdminLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'

import LoginPage from '../components/LoginPage.vue';


const routes = [
  {
    path: '/',
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
    path: '/user-list',
    name: 'user-list',
    component: UserListView,
    meta: {
      layout: AdminLayout
    }
    
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: AddUserView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/data-list',
    name: 'data-list',
    component: DataListView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/add-data',
    name: 'add-data',
    component: AddDataView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/divide-data',
    name: 'divide-data',
    component: DivideDataView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/assign-data',
    name: 'assign-data',
    component: AssignDataView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/login-time',
    name: 'login-time',
    component: LoginTimeView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/change-log-list',
    name: 'change-log-list',
    component: ChangeLogListView,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/file-list',
    name: 'file-list',
    component: FileListView,
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

