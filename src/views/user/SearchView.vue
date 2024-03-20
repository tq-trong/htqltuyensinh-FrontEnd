<template>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <link href="@/assets/css/main.css" rel="stylesheet" type="text/css"/>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      />
      <link rel="shortcut icon" type="image/png" href="@/assets/logo.png" />
      <title>HTQL Tuyển sinh CUSC</title>
    </head>
    <body>
      <div class="body">
        <form action="./thongtinkhachhang/thongtinkhachhang.php" method="POST">
          <fieldset>
            <legend style="margin-top: 7%">
              <img src="@/assets/logo.png" alt="logo" class="logoImage" />
            </legend>
            <div class="inner-form">
              <div class="input-field">
                <button class="btn-search" type="submit" name="tracuu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    ></path>
                  </svg>
                </button>
                <input
                  name="noidungtim"
                  type="text"
                  placeholder="Vui lòng nhập số điện thoại"
                  value=""
                  required
                />
              </div>
            </div>
          </fieldset>
          <fieldset1>
            <div style="text-align: center; margin-top: 5%; color: white">
              <h3>TRUNG TÂM CÔNG NGHỆ PHẦN MỀM ĐẠI HỌC CẦN THƠ</h3>
              <p>
                <i class="fa-solid fa-location-dot"></i>&nbsp; Khu III, Đại Học
                Cần Thơ, 01 Lý Tự Trọng, Q. Ninh Kiều, TP. Cần Thơ
              </p>
              <p>
                <i class="fa-solid fa-phone"></i>&nbsp;Điện thoại: 0292 383 5581
              </p>
              <p>Zalo: 0868 952 535</p>
              <p>
                <i class="fa-solid fa-envelope"></i>&nbsp;Mail:
                tuyensinh@cusc.ctu.edu.vn
              </p>
            </div>
          </fieldset1>
        </form>
      </div>
    </body>
  </html>
</template>