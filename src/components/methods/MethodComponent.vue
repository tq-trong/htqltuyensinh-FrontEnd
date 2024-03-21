<script>
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://localhost:8083/api";

export default {
  methods: {
    fetchData(page, searchKeyword, objectData) {
      // Hàm lấy dữ liệu về
      let url = `${API_URL}/${objectData}?page=${page}`;
      if (searchKeyword) {
        url += `&keyword=${encodeURIComponent(searchKeyword)}`;
      }
      return axios.get(url);
    },
    fetchDataWithoutPage(objectData) {
      let url = `${API_URL}/${objectData}`;
      return axios.get(url);
    },
    fetchProvinces() {
      // Hàm lấy dữ liệu tỉnh về
      let url = `https://vapi.vnappmob.com/api/province`;
      return axios.get(url);
    },
    formatBirthday_VN(dateString) {
      // Hàm định dạng ngày sinh
      if (!dateString) return "";
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day < 10 ? "0" + day : day}-${
        month < 10 ? "0" + month : month
      }-${year}`;
    },
    formatDateTime(dateString) {
      // Hàm định dạng ngày sinh
      if (!dateString) return "";
      const dateTime = new Date(dateString);
      const day = dateTime.getDate();
      const month = dateTime.getMonth() + 1;
      const year = dateTime.getFullYear();
      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      const seconds = dateTime.getSeconds();
      return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds} ${day < 10 ? "0" + day : day}-${
        month < 10 ? "0" + month : month
      }-${year}`;
    },
    formatBirthday_EN(dateString) {
      const parts = dateString.split("-"); // Tách chuỗi thành các phần riêng biệt (ngày, tháng, năm)
      if (parts.length !== 3) return ""; // Đảm bảo chuỗi có đúng định dạng

      const day = parts[0];
      const month = parts[1];
      const year = parts[2];

      // Đảm bảo rằng tháng và ngày có hai chữ số
      const formattedDay = day.padStart(2, "0");
      const formattedMonth = month.padStart(2, "0");

      // Trả về chuỗi theo định dạng yyyy-mm-dd
      return `${year}-${formattedMonth}-${formattedDay}`;
    },
    swalTopRight() {
      // Hàm set các props cho toast top-right
      return Swal.mixin({
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
      });
    },
    swalCenter() {
      // Hàm set các props cho toast center
      return Swal.mixin({
        showCancelButton: true,
      });
    },
    showToastAlert(swal, icon, title) {
      // Hàm gọi toast
      return swal.fire({
        icon: icon,
        title: title,
      });
    },
    calculateDisplayedPages(currentPage, totalPages) {
      //Hàm hiển thị thanh phân trang
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