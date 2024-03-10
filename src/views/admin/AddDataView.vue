<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Thêm dữ liệu</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Layout</a></li>
              <li class="breadcrumb-item active">Fixed Layout</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"></h3>
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                    title="Collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="remove"
                    title="Remove"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputFile">Nhập file dữ liệu:</label>
                  <div class="input-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="exampleInputFile"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        @change="handleFileUpload"
                      />
                      <label class="custom-file-label" for="exampleInputFile">{{
                        selectedFileName
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer">
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click="uploadFile"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import MethodComponent from "@/components/methods/MethodComponent.vue";

export default {
  computed: {
    getSwalTopRight() {
      return MethodComponent.methods.swalTopRight();
    }, 
  },
  data() {
    return {
      selectedFileName: "Chọn file",
      file: "",
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      if (this.file) {
        if (
          this.file.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          this.file.type === "application/vnd.ms-excel"
        ) {
          const fileNameLabel = document.querySelector(".custom-file-label");
          fileNameLabel.textContent = this.file.name;
          this.selectedFileName = this.file.name;
        } else {
          // Hiển thị thông báo lỗi khi chọn file không hợp lệ
          this.toastAlert("error", "Vui lòng chọn file excel");
        }
      }
    },
    uploadFile() {
      const formData = new FormData();
      formData.append("file", this.file);

      axios
        .post("http://localhost:8083/api/users", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.toastAlert("success", "Thêm dữ liệu thành công !!!");
        })
        .catch(() => {
          this.toastAlert("error", "Vui lòng kiểm tra lại file đã upload !!!");
        });
    },
    toastAlert(icon, title) {
      MethodComponent.methods.showToastAlert(this.getSwalTopRight, icon, title);
    },
  },
};
</script>

