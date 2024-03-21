<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Trang chủ</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item active">Trang chủ</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Info boxes -->
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-info elevation-1"
                ><i class="fas fa-light fa-database"></i
              ></span>

              <div class="info-box-content">
                <a href=""><span class="info-box-text">Dữ liệu</span></a>
                <span class="info-box-number">
                  <!-- <?php echo countDuLieuKhachHang()?> -->
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-danger elevation-1"
                ><i class="fas fa-light fa-book"></i
              ></span>

              <div class="info-box-content">
                <a href=""><span class="info-box-text">Chuyên đề</span></a>
                <span class="info-box-number">
                  <!-- <?php echo countChuyenDe()?> -->
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->

          <!-- fix for small devices only -->
          <div class="clearfix hidden-md-up"></div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-success elevation-1"
                ><i class="fas fa-light fa-school"></i
              ></span>

              <div class="info-box-content">
                <a href=""><span class="info-box-text">Trường</span></a>
                <span class="info-box-number">
                  <!-- <?php echo countTruong()?> -->
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-warning elevation-1"
                ><i class="fas fa-users"></i
              ></span>

              <div class="info-box-content">
                <a href=""><span class="info-box-text">Người dùng</span></a>
                <span class="info-box-number">
                  <!-- <?php echo countUser()?> -->
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title"><b>Ghi chú</b></h5>

                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="row">
                  <!-- /.col -->
                  <div class="col-md-3">
                    <p class="text-center">
                      <strong>Số phiếu</strong>
                    </p>

                    <div class="progress-group">
                      <span class="progress-text">Đã xử lý</span>
                      <span class="float-right"><b>160</b>/200</span>
                      <div class="progress">
                        <div
                          class="progress-bar bg-primary"
                          style="width: 80%"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <p class="text-center">
                      <strong>Gọi nhỡ</strong>
                    </p>
                    <div class="card-body">
                      <!-- Conversations are loaded here -->
                      <div class="direct-chat-messages">
                        <div v-if="misscalls.length > 0">
                          <div
                            class="direct-chat-msg"
                            v-for="misscall in misscalls"
                            :key="misscall.id"
                          >
                            <div class="direct-chat-infos clearfix">
                              <span class="direct-chat-timestamp float-left">{{
                                formattedDatetime(misscall.time)
                              }}</span>
                              <span class="direct-chat-name float-right"
                                ><a
                                  href="#"
                                  style="color: red; font-style: italic"
                                  @click="deleteMissCall(misscall.id)"
                                  ><u>Xóa</u></a
                                ></span
                              >
                            </div>
                            <!-- .direct-chat-infos -->
                            <img
                              class="direct-chat-img"
                              src="@/assets/user.jpg"
                              alt="message user image"
                            />
                            <!-- /.direct-chat-img -->
                            <div class="direct-chat-text">
                              {{ misscall.user }}
                            </div>
                            <!-- /.direct-chat-text -->
                          </div>
                          <!-- /.direct-chat-msg -->
                        </div>
                        <div v-else>
                          <center>
                            <h1 style="margin-top: 2em">
                              Chưa có gọi nhỡ nào!
                            </h1>
                          </center>
                        </div>
                      </div>
                      <!--/.direct-chat-messages-->
                    </div>
                    <!--/.card-body-->

                    <div class="card-footer">
                      <form @submit.prevent="createMissCall">
                        <div class="input-group">
                          <input
                            type="text"
                            name="sdtmisscall"
                            placeholder="Nhập SĐT"
                            class="form-control"
                            style="width: 20%"
                            v-model="phone"
                          />
                          <input
                            type="datetime-local"
                            name="tgmisscall"
                            class="form-control"
                            style="width: 25%"
                            v-model="time"
                          />
                          <span class="input-group-append">
                            <button type="submit" class="btn btn-warning">
                              <b>Thêm</b>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <!-- /.col -->

                  <div class="col-md-5">
                    <p class="text-center">
                      <strong>Ghi chú</strong>
                    </p>
                    <div class="card-body">
                      <!-- Conversations are loaded here -->
                      <div class="direct-chat-messages">
                        <div v-if="notes.length > 0">
                          <div
                            class="direct-chat-msg"
                            v-for="note in notes"
                            :key="note.id"
                          >
                            <div class="direct-chat-infos clearfix">
                              <span class="direct-chat-timestamp float-left">{{
                                formattedDatetime(note.time)
                              }}</span>

                              <span class="direct-chat-name float-right"
                                ><a
                                  href="#"
                                  style="color: red; font-style: italic"
                                  @click="deleteNote(note.id)"
                                  ><u>Xóa</u></a
                                ></span
                              >
                            </div>
                            <!-- /.direct-chat-infos -->
                            <img
                              class="direct-chat-img"
                              src="@/assets/user.jpg"
                              alt="message user image"
                            />
                            <!-- /.direct-chat-img -->
                            <div class="direct-chat-text">
                              {{ note.description }}
                            </div>
                            <!-- /.direct-chat-text -->
                          </div>
                          <!-- /.direct-chat-msg -->
                        </div>
                        <div v-else>
                          <center>
                            <h1 style="margin-top: 2em">
                              Chưa có ghi chú nào!
                            </h1>
                          </center>
                        </div>
                      </div>
                      <!--/.direct-chat-messages-->
                    </div>
                    <!--/.card-body-->

                    <div class="card-footer">
                      <form @submit.prevent="createNote">
                        <div class="input-group">
                          <input
                            type="text"
                            name="ghichu"
                            placeholder="Viết ghi chú ..."
                            class="form-control"
                            v-model="noteDescription"
                          />
                          <span class="input-group-append">
                            <button type="submit" class="btn btn-warning">
                              <b>Thêm ghi chú</b>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
              </div>
              <!-- ./card-body -->

              <!-- /.card-footer -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Tiến trình liên hệ</h3>

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
              <div class="card-body p-0">
                <table class="table table-striped projects">
                  <thead>
                    <tr>
                      <th style="width: 1%">STT</th>
                      <th>Usermanager</th>
                      <th>Liên hệ lần 1</th>
                      <th>Liên hệ lần 2</th>
                      <th>Liên hệ lần 3</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!--/. container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
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
      userData: JSON.parse(localStorage.getItem("userData")) || {},
      notes: [],
      misscalls: [],
      phone: "",
      time: "",
      noteDescription: "",
      Toast: null,
    };
  },
  methods: {
    toastAlert(icon, title) {
      MethodComponent.methods.showToastAlert(this.getSwalTopRight, icon, title);
    },
    fetchNote(idAdmin) {
      idAdmin = this.userData.id;
      MethodComponent.methods
        .fetchDataWithoutPage(`notes/${idAdmin}`)
        .then((response) => {
          this.notes = response.data.listResult;
        })
        .catch((error) => {
          console.error("Error fetching notes:", error);
        });
    },
    fetchMissCall() {
      MethodComponent.methods
        .fetchDataWithoutPage(`misscalls`)
        .then((response) => {
          this.misscalls = response.data.listResult;
        })
        .catch((error) => {
          console.error("Error fetching misscalls:", error);
        });
    },
    formattedDatetime(dateString) {
      return MethodComponent.methods.formatDateTime(dateString);
    },
    async createNote() {
      axios
        .post("http://localhost:8083/api/notes", {
          admin: this.userData.code,
          time: new Date(),
          description: this.noteDescription,
        })
        .then(() => {
          this.fetchNote();
          this.noteDescription = "";
        })
        .catch(() => {
          console.log("Lỗi");
        });
    },
    async createMissCall() {
      try {
        await axios.post("http://localhost:8083/api/misscalls", {
          user: this.phone,
          time: this.time,
        });
        this.fetchMissCall();
      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.toastAlert("error", "Không tìm thấy SĐT trong hệ thống!");
        } else {
          this.toastAlert("error", "Đã xảy ra lỗi khi gửi yêu cầu.");
        }
      }
    },
    async deleteNote(idNote) {
      axios
        .delete(`http://localhost:8083/api/notes/${idNote}`, {})
        .then(() => {
          this.fetchNote();
        })
        .catch(() => {
          console.log(idNote);
        });
    },
    async deleteMissCall(idMissCall) {
      axios
        .delete(`http://localhost:8083/api/misscalls/${idMissCall}`, {})
        .then(() => {
          this.fetchMissCall();
        })
        .catch(() => {
          console.log("Lỗi");
        });
    },
  },
  mounted() {
    this.fetchNote();
    this.fetchMissCall();
  },
};
</script>
