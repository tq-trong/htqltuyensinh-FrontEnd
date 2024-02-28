<script>
import { ref } from 'vue';
import axios from 'axios';

export function usePagination() {
  const admins = ref([]);
  const totalPages = ref(0);
  const currentPage = ref(1);
  const showEllipsisAfter = ref(false);
  const searchKeyword = ref('');

  async function fetchData(url, page) {
    try {
      let apiUrl = `${url}?page=${page}`;
      if (searchKeyword.value) {
        apiUrl += `&keyword=${encodeURIComponent(searchKeyword.value)}`;
      }

      const response = await axios.get(apiUrl);
      admins.value = response.data.listResult;
      totalPages.value = response.data.totalPage;
      currentPage.value = response.data.page;

      const maxDisplayedPages = 5;
      const middlePage = Math.ceil(maxDisplayedPages / 2);
      let startPage = currentPage.value - middlePage + 1;
      if (startPage < 1) {
        startPage = 1;
      }
      let endPage = startPage + maxDisplayedPages - 1;
      if (endPage > totalPages.value) {
        endPage = totalPages.value;
        startPage = Math.max(1, endPage - maxDisplayedPages + 1);
      }
      showEllipsisAfter.value = endPage < totalPages.value;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return {
    admins,
    totalPages,
    currentPage,
    showEllipsisAfter,
    searchKeyword,
    fetchData
  };
}
</script>