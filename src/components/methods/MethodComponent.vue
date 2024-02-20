<script>
//import Swal from "sweetalert2";

export default {
//   data() {
//     return {
//       Toast: Swal.mixin({
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 3000,
//       })
//     };
//   },
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
    // showToastError(title) {
    //   this.Toast.fire({
    //     icon: "error",
    //     title: title,
    //   });
      
    // },
    // showToastSuccess(title) {
    //   this.Toast.fire({
    //     icon: "success",
    //     title: title,
    //   });
    //   console.log(this.toast);
    // },
  },
};
</script>