<template>
    <body class="hold-transition login-page" style="background-color: cadetblue">
    <center>
        <fieldset>
            <legend style=" margin-top:7%;"><img src="@/assets/logo.png" alt="logo" class="logoImage"></legend>
        </fieldset>
    </center>
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Đăng nhập vào trang quản lý</p>

                <form id="loginForm">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Tên đăng nhập" id="username"
                            name="username" value="">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Mật khẩu" id="password" name="password"
                            value="">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="icheck-primary">
                                <input type="checkbox" name="remember_me" value="" id="remember_me">
                                <label for="remember_me">
                                    Ghi nhớ tôi
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-6">
                            <button type="submit" class="btn btn-primary btn-block swalDefaultError" name="login">Đăng
                                nhập</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->
</body>
</template>