<template>
  <div id="app container">
    <div class="lnavbar">
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-icon icon="bell" class="mt-2"></b-icon>
              </template>
              <b-dropdown-item href="#" v-for="notif in notification">
                <table style="border:none">
                  <tr>
                    <td>
                      <b-icon :icon="notif.icon" class="mt-2"></b-icon>
                    </td>
                    <td>
                      <span style="margin-left:7px;width:20px;word-wrap: break-word">{{ notif.text }}</span>
                    </td>
                  </tr>
                </table>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar icon="star-fill"></b-avatar>
              </template>
              <b-dropdown-item href="#/akun">
                <div>
                  <p style="text-align:center" class="mb-2 mt-2">
                    <b-avatar variant="primary" text="CL"></b-avatar>
                  </p>
                  <p style="text-align:center" class="mb-0">
                    <b>Ryan Erlando Supit</b>
                  </p>
                  <p style="text-align:center" class="mb-2">17013047</p>
                </div>
              </b-dropdown-item>
              <b-dropdown-item href="#" variant="danger"> <b-icon icon="power" variant="danger" class="mr-2"></b-icon>Keluar </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="row mr-5" style="z-index:99">
      <div class="col-lg-3">
        <div class="sidebar">
          <div class="m-1 mt-4 ml-4">
            <p><img src="./assets/logo.png" style="width:60px" /></p>
            <h5 class="mb-4">LPPM DLSU</h5>
          </div>

          <span v-for="(item, index) in sidebar_item">
            <div class="sidebar-item" :class="item.class" @click="changeRoute(index)" v-if="item.icon">
              <!-- dropdown -->
              <div v-if="item.dropdown">
                <div>
                  
                  <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret dropright>
                    <!-- tombol dropdown -->
                    <template#button-content>
                      <b-link :class="item.class + '-text'" class="item ml-2">
                          <b-icon :icon="item.icon"></b-icon>
                          <span class="ml-3">{{item.title}}</span>
                      </b-link>
                    </template>

                    <!-- isi dropdown -->
                    <span v-for="list in item.dropdownList" >
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

              <b-link v-else :class="item.class + '-text'" class="item ml-4" :href="item.ref">
                <b-icon :icon="item.icon"></b-icon>
                <span class="ml-3">{{ item.title }}</span>
              </b-link>
            </div>

            <p v-else class="ml-2 mt-4 sidebar-title">
              <b>{{ item.title }}</b>
              <b-icon icon="arrow90deg-right" rotate="90" class="ml-2"></b-icon>
            </p>

            <!-- keterangan -->
          </span>
        </div>
      </div>
      <div class="col-lg-9">
        <div style="margin-top:90px;"></div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth_level: 1,
      sidebar_item: [
        {
          title: "Dashboard",
          icon: "house",
          ref: "/#/",
          class: "",
        },
        {
          title: "Pelaporan Penelitian",
        },
        {
          title: "Tambah Pelaporan",
          icon: "journal-plus",
          class: "",
          dropdown: true,
          dropdownList: [
            {
              title: "Peneliti Asing",
              ref: "/#/penelitian-tambah/peneliti-asing",
              icon:"arrow-bar-right",
              class:"",
            },
            {
              title: "Publikasi Jurnal",
              ref: "/#/penelitian-tambah/publikasi-jurnal",
              icon:"arrow-bar-right",
            },
            {
              title: "Pemakalah Forum Ilmiah Seminar/Lokakarya",
              ref: "/#/penelitian-tambah/pemakalah-forum",
              icon:"arrow-bar-right",
            },
            {
              title: "Hibah Ditlitabmas",
              ref: "/#/penelitian-tambah/hibah-ditlitabmas",
              icon:"arrow-bar-right",
            },
            {
              title: "Hibah nonditlitabmas",
              ref: "/#/penelitian-tambah/hibah-nonditlitabmas",
              icon:"arrow-bar-right",
            },
            {
              title: "Penyelenggaraan Forum Ilmiah Seminar/Lokakarya",
              ref: "/#/penelitian-tambah/penyelenggaraan-forum",
              icon:"arrow-bar-right",
            },
            {
              title: "Buku Ajar",
              ref: "/#/penelitian-tambah/bukuAjar",
              icon:"arrow-bar-right",
            },
            {
              title: "Hak Kekayaan Intelektual/HKI",
              ref: "/#/penelitian-tambah/hki",
              icon:"arrow-bar-right",
            },
            {
              title: "Kontrak Kerja",
              ref: "/#/penelitian-tambah/kontrak-kerja",
              icon:"arrow-bar-right",
            },
            {
              title: "Unit Bisnis Hasil Riset",
              ref: "/#/penelitian-tambah/unit-bhr",
              icon:"arrow-bar-right",
            },
            {
              title: "Luaran Lainnya",
              ref: "/#/penelitian-tambah/luaran-lainnya",
              icon:"arrow-bar-right",
            },
          ],
        },
        {
          title: "Lihat Pelaporan",
          icon: "journals",
          ref: "/#/tambah-jurnal",
          class: "",
          dropdown: true,
          dropdownList: [
            {
              title: "Peneliti Asing",
              ref: "/#/penelitian-lihat/peneliti-asing",
              icon:"arrow-bar-left",
            },
            {
              title: "Publikasi Jurnal",
              ref: "/#/penelitian-lihat/publikasi-jurnal",
              icon:"arrow-bar-left",
            },
            {
              title: "Pemakalah Forum Ilmiah Seminar/Lokakarya",
              ref: "/#/penelitian-lihat/pemakalah-forum",
              icon:"arrow-bar-left",
            },
            {
              title: "Hibah Ditlitabmas",
              ref: "/#/penelitian-lihat/hibah-ditlitabmas",
              icon:"arrow-bar-left",
            },
            {
              title: "Hibah nonditlitabmas",
              ref: "/#/penelitian-lihat/hibah-nonditlitabmas",
              icon:"arrow-bar-left",
            },
            {
              title: "Penyelenggaraan Forum Ilmiah Seminar/Lokakarya",
              ref: "/#/penelitian-lihat/penyelenggaraan-forum",
              icon:"arrow-bar-left",
            },
            {
              title: "Buku Ajar",
              ref: "/#/penelitian-lihat/buku-ajar",
              icon:"arrow-bar-left",
            },
            {
              title: "Hak Kekayaan Intelektual/HKI",
              ref: "/#/penelitian-lihat/hki",
              icon:"arrow-bar-left",
            },
            {
              title: "Kontrak Kerja",
              ref: "/#/penelitian-lihat/kontrak-kerja",
              icon:"arrow-bar-left",
            },
            {
              title: "Unit Bisnis Hasil Riset",
              ref: "/#/penelitian-lihat/unit-bhr",
              icon:"arrow-bar-left",
            },
            {
              title: "Luaran Lainnya",
              ref: "/#/penelitian-lihat/luaran-lainnya",
              icon:"arrow-bar-left",
            },
          ],

        },
        {
          title: "Pelaporan PkM",
        },
        {
          title: "Tambah Pelaporan",
          icon: "journal-plus",
          class: "",
          dropdown: true,
          dropdownList: [
            {
              title: "peneliti asing",
              ref: "/#/penelitian/peneliti-asing",
              icon:"arrow-bar-right",
            },
            {
              title: "publikasi jurnal",
              ref: "/#/petualang2",
              icon:"plus",
            },
            {
              title: "test3",
              icon:"arrow-bar-right",
            },
            {
              title: "test42",
              icon:"arrow-bar-right",
            },
            {
              title: "test5",
              icon:"arrow-bar-right",
            },
          ],
        },
        {
          title: "Lihat Pelaporan",
          icon: "Journals",
          class: "",
          dropdown: true,
          dropdownList: [
            {
              title: "peneliti asing",
              ref: "/#/penelitian/peneliti-asing",
              icon:"arrow-bar-right",
            },
            {
              title: "publikasi jurnal",
              ref: "/#/petualang2",
              icon:"plus",
            },
            {
              title: "test3",
              icon:"arrow-bar-right",
            },
            {
              title: "test42",
              icon:"arrow-bar-right",
            },
            {
              title: "test5",
              icon:"arrow-bar-right",
            },
          ],
        },
      ],

      notification: [
        {
          icon: "journals",
          text: "Jurnal Realtech Berhasil Ditambah",
        },
      ],
    };
  },
  methods: {
    changeRoute: function(index) {
      for (var i = 0; i < this.sidebar_item.length; i++) {
        if (i == index) {
          this.sidebar_item[i].class = "active";
        } else {
          this.sidebar_item[i].class = "";
        }
      }
    },
  },
};
</script>

<style>
.active::before {
  width: 4px;
  height: 20px;
  content: "1";
  color: transparent;
  background-color: #2ecc71;
  position: absolute;
}

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
</style>
