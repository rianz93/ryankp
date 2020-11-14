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
                      <span style="margin-left:7px;width:20px;word-wrap: break-word">{{
                        notif.text
                      }}</span>
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
                    <b>Chrisdityra Lengkey</b>
                  </p>
                  <p style="text-align:center" class="mb-2">51099290100</p>
                </div>
              </b-dropdown-item>
              <b-dropdown-item href="#" variant="danger">
                <b-icon icon="power" variant="danger" class="mr-2"></b-icon>Keluar
              </b-dropdown-item>
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
            <div
              class="sidebar-item"
              :class="item.class"
              @click="changeRoute(index)"
              v-if="item.icon"
            >
              <b-link :class="item.class + '-text'" class="item ml-4" :href="item.ref">
                <b-icon :icon="item.icon"></b-icon>
                <span class="ml-3">{{ item.title }}</span>
          </b-link>
        </div>
        <!-- keterangan -->
        <p v-else class="ml-4" style="opacity:0.6;font-size:12px;text-transform:uppercase">
          <b>{{ item.title }}</b>
        </p>
        <!-- if have child -->
        <span v-if="item.childVisible == true">
              <span v-for="child in item.child">
                <div
                  class="sidebar-item ml-3"
                  @click="changeRoute(index)"
                  v-if="child.icon"
                >
                  <b-link class="item ml-4" :href="item.ref">
                    <b-icon :icon="child.icon"></b-icon>
                    <span class="ml-3">{{ child.title }}</span>
        </b-link>
      </div>
      </span>
      </span>
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
export default
{
  data()
  {
    return {
      auth_level: 1,
      sidebar_item: [
      {
        title: "Dashboard",
        icon: "house",
        ref: "/#/",
        class: "active",
        hasChild: true,
        childVisible: true,
        child: [
        {
          title: "....",
          icon: "house",
          ref: "/#/JlTelkomLingkarleherryan"
        },
        {
          title: "...",
          icon: "house",
          ref: "/#/JlTelkomLingkarleherryan"
        }]
      },
      {
        title: "JURNAL"
      },
      {
        title: "Jurnal",
        icon: "journals",
        hasChild: false,
        ref: "/#/jurnal",
        class: ""
      },
      {
        title: "Tambah Jurnal",
        icon: "journal-plus",
        hasChild: false,
        ref: "/#/tambah-jurnal",
        class: ""
      },
      {
        title: "Pengaturan Jurnal",
        icon: "journal-code",
        hasChild: false,
        ref: "/#",
        class: ""
      },
      {
        title: "AKUN"
      },
      {
        title: "Forum",
        icon: "chat",
        hasChild: false,
        ref: "/",
        class: ""
      },
      {
        title: "Dosen",
        icon: "people",
        hasChild: false,
        ref: "/#/dosen",
        class: ""
      }],

      notification: [
      {
        icon: "journals",
        text: "Jurnal Realtech Berhasil Ditambah"
      }]
    };
  },
  methods:
  {
    changeRoute: function(index)
    {
      if (this.sidebar_item[index].hasChild)
      {
        if (this.sidebar_item[index].childVisible)
        {
          this.sidebar_item[index].childVisible = false;
        }
        else
        {
          this.sidebar_item[index].childVisible = true;
        }
      }

      for (var i = 0; i < this.sidebar_item.length; i++)
      {
        if (i == index)
        {
          this.sidebar_item[i].class = "active";
        }
        else
        {
          this.sidebar_item[i].class = "";
          if (this.sidebar_item[i].hasChild)
          {
            this.sidebar_item[i].childVisible = false;
          }
        }
      }
    }
  }
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
