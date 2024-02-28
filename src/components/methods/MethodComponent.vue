<script>
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://localhost:8083/api";

export default {
  methods: {
    fetchData(page, searchKeyword, objectData) {
      let url = `${API_URL}/${objectData}?page=${page}`;
      if (searchKeyword) {
        url += `&keyword=${encodeURIComponent(searchKeyword)}`;
      }
      return axios.get(url);
    },
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
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
      });
    },
    showToastAlert(swal, icon, title) {
      return swal.fire({
        icon: icon,
        title: title,
      });
    },
    calculateDisplayedPages(currentPage, totalPages) {
      const maxDisplayedPages = 5;
      const middlePage = Math.ceil(maxDisplayedPages / 2);
      let startPage = currentPage - middlePage + 1;
      if (startPage < 1) {
        startPage = 1;
      }
      let endPage = startPage + maxDisplayedPages - 1;
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxDisplayedPages + 1);
      }
      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    },
  },
};
</script>