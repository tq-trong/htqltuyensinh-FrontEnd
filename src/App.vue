<template>
  <component :is="$route.meta.layout || 'div'"></component>
</template>

// <script>
// export default {
//   created() {
//     // Kiểm tra xem người dùng đã đăng nhập trước đó hay không
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     const role = localStorage.getItem('role');
    
//     if (isLoggedIn) {
//       // Nếu đã đăng nhập, chuyển hướng người dùng đến trang phù hợp
//       if (role === 'ADMIN') {
//         this.$router.push('/admin');
//       } else if (role === 'USERMANAGER') {
//         this.$router.push('/usermanager');
//       } else {
//         console.error('Invalid role:', role);
//       }
//     }
//   }
// }
// </script>