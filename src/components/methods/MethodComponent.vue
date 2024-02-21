<script>
import Swal from "sweetalert2";

export default {
  methods: {
    formatBirthday(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day < 10 ? "0" + day : day}-${
        month < 10 ? "0" + month : month
      }-${year}`;
    },
    swalMixin() {
      return Swal.mixin({
        //toast: true,
        //position: "mid",
        //showConfirmButton: true,
        showCancelButton: true,
        //timer: 3000,
      });
    },
    showToastAlert(swal, icon, title) {
      return swal.fire({
        icon: icon,
        title: title,
      });
    },
  },
};
</script>