<template>
  <div id="app container">
    <div class="overlay" v-if="!loginStatus"></div>
    <div class="lnavbar" v-if="loginStatus">
      <b-navbar toggleable="lg" type="dark" variant="success">
        <h4 class="namaApp">
          Aplikasi Manajemen dan Pelaporan Kegiatan Penelitian dan Pengabdian
          Dosen
        </h4>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar icon="person-fill"></b-avatar>
              </template>
              <b-dropdown-item href="#/akun">
                <div>
                  <p style="text-align:center" class="mb-2 mt-2">
                    <b-avatar
                      variant="primary"
                      :text="userData.nick"
                    ></b-avatar>
                  </p>
                  <p style="text-align:center" class="mb-0">
                    <b>{{ userData.nama }}</b>
                  </p>
                </div>
              </b-dropdown-item>
              <b-dropdown-item @click="keluar">
                <b-button class="btn-block btn-sm" variant="danger">
                  Keluar
                  <b-icon icon="power" class="ml-2"></b-icon>
                </b-button>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="row mr-5" style="z-index:99">
      <div class="col-lg-3" style="max-width: 20%;" v-if="loginStatus">
        <div class="sidebar">
          <div class=" mt-4 ml-4 mb-2">
            <p>
              <img src="./assets/logo.png" style="width:80px;" class="ml-5 " />
            </p>
            <b-badge
              class="ml-5 p-2"
              pill
              :variant="userData.priority == 'admin' ? 'primary' : 'secondary'"
              style="width:80px;"
              >{{ userData.priority == "admin" ? "Admin" : "Dosen" }}
              <b-icon icon="person-fill"></b-icon
            ></b-badge>
          </div>

          <hr />
          <span v-for="(item, index) in sidebar_item">
            <div
              class="sidebar-item"
              :class="item.class"
              @click="changeRoute(index)"
              v-if="item.icon"
            >
              <!-- dropdown -->
              <div v-if="item.dropdown">
                <div>
                  <b-dropdown
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                    dropright
                  >
                    <!-- tombol dropdown -->
                    <template #button-content>
                      <b-link :class="item.class + '-text'" class="item ml-2">
                        <b-icon :icon="item.icon"></b-icon>
                        <span class="ml-3">{{ item.title }}</span>
                      </b-link>
                    </template>

                    <!-- isi dropdown -->
                    <span v-for="list in item.dropdownList">
                      <b-dropdown-item :href="list.ref" style="z-index: 100;">
                        <b-link class="-text item" :href="list.ref">
                          <b-icon :icon="list.icon"></b-icon>
                          <span class="ml-3">{{ list.title }}</span>
                        </b-link>
                      </b-dropdown-item>
                    </span>
                  </b-dropdown>
                </div>
              </div>

              <b-link
                v-else
                :class="item.class + '-text'"
                class="item ml-4"
                :href="item.ref"
              >
                <b-icon :icon="item.icon" class="first-child"></b-icon>
                <span class="ml-3">{{ item.title }}</span>
              </b-link>
            </div>

            <p v-else class="ml-2 mt-4 sidebar-title">
              <b>{{ item.title }}</b>
              <b-icon icon="arrow90deg-right" rotate="90" class="ml-2"></b-icon>
            </p>

            <!-- keterangan -->
          </span>
          <!-- MANAJEMEN PENGGUNA -->
          <p
            class="ml-2 mt-4 sidebar-title"
            v-if="userData.priority == 'admin'"
          >
            <b>Manajemen Pengguna</b>
            <b-icon icon="gear" class="ml-2"></b-icon>
          </p>
          <span class="sidebar-item" v-if="userData.priority == 'admin'">
            <div>
              <b-link
                class="item ml-4"
                href="/#/daftar-pengguna"
                @click="changeRoute('manajemen')"
                :class="manajemen"
              >
                <b-icon
                  icon="file-earmark-person-fill"
                  class="first-child"
                ></b-icon>
                <span class="ml-3">Daftar Pengguna</span>
              </b-link>
            </div>
            <div class="mt-3">
              <b-link
                class="item ml-4"
                href="/#/aktivitas-pengguna"
                @click="changeRoute('aktivitas')"
                :class="aktivitas"
              >
                <b-icon
                  icon="person-lines-fill"
                  class="first-child"
                ></b-icon>
                <span class="ml-3">Aktivitas Pengguna</span>
              </b-link>
            </div>
          </span>
        </div>
      </div>
      <div
        :class="loginStatus ? 'col-lg-10' : 'absolute-center'"
        :style="loginStatus ? 'margin-left: 280px;' : ''"
      >
        <div style="margin-top:90px;" v-if="loginStatus"></div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {
  API_ENDPOINT,
  validateLogin,
  loginStatus,
} from "./functions/universal.js";
import {sidebarAdmin, sidebarUser} from "./functions/data.js";
export default {
  data() {
    return {
      auth_level: 1,
      loginStatus: false,
      manajemen: "-text",
      aktivitas: "-text",
      userData: {
        nama: "",
        nick: "",
        priority: "",
        password: "",
      },
      sidebar_item: [],
    };
  },
  methods: {
    // untuk membatasi dropdown dosen
    isAdminSidebar(){
      if(sessionStorage.getItem("priority") == 'admin'){
        this.sidebar_item = sidebarAdmin;
      }else{
        this.sidebar_item = sidebarUser;
      }
    },

    changeRoute(index) {
      if (index == "manajemen") {
        this.manajemen = "active-text";
        this.aktivitas = "-text";
      }
      else if(index == "aktivitas"){
        this.aktivitas = "active-text";
        this.manajemen = "-text";
      }
      for (var i = 0; i < this.sidebar_item.length; i++) {
        if (i == index) {
          this.sidebar_item[i].class = "active";
          this.aktivitas = "-text";
          this.manajemen = "-text";
        } else {
          this.sidebar_item[i].class = "";
        }
      }
    },

    passUserData() {
      this.userData.nama = sessionStorage.getItem("nama");
      this.userData.nick = sessionStorage.getItem("nick");
      this.userData.priority = sessionStorage.getItem("priority");
      this.userData.password = sessionStorage.getItem("password");
    },

    keluar() {
      sessionStorage.clear();
      this.loginStatus = loginStatus();
      validateLogin(this.$router);
    },
  },

  created() {
    this.passUserData();
    validateLogin(this.$router);
    this.loginStatus = loginStatus();
    this.isAdminSidebar();
  },


  updated() {
    console.log(this.userData)
    this.passUserData();
    validateLogin(this.$router);
  },
};
</script>

<style>
.active-text {
  color: #2ecc71;
}

.-text {
  color: #000;
}

.lnavbar {
  background-color: #27ae60;
  width: 100%;
  height: 60px;
  position: absolute;
  z-index: 1;
  box-shadow: 0px 7px 21px 0px rgba(50, 50, 50, 0.1);
}

.sidebar {
  height: 100vh;
  width: 250px;
  position: fixed;
  box-shadow: 7px 0px 21px 0px rgba(50, 50, 50, 0.1);
  z-index: 99;
  background-color: #fff;
}

.sidebar-title {
  opacity: 0.8;
  font-size: 12px;
  text-transform: uppercase;
}

.sidebar .sidebar-item {
  margin-bottom: 15px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.sidebar .sidebar-item .item {
  text-decoration: none;
  transition: all 0.2s ease;
}

.sidebar .sidebar-item .item:hover {
  color: #2ecc71;
}

.sidebar .sidebar-item:hover {
  transform: translateX(5px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.first-child {
  width: 20px;
  height: 20px;
}

.namaApp {
  margin-left: 270px;
  color: white;
  padding: 5px 0 0;
  font-weight: normal;
}

.absolute-center {
  top: 15%;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  position: absolute;
  z-index: 1001;
}
.overlay {
  background-image: url("assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
}
</style>
