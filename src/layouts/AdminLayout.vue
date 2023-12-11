<template>
  <div class="wrapper">
    <!--Header-->
    <Header />

    <!--Sidebar-->
    <Sidebar />

    <!--Main Form-->
    <router-view />

    <!--Footer-->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/admin/AdminHeader.vue";
import Footer from "../components/admin/AdminFooter.vue";
import Sidebar from "../components/admin/AdminSidebar.vue";

export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
};
</script>