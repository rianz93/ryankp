import Vue 		 from "vue";
import VueRouter from "vue-router";

// KOMPONEN UTAMA
import dashboard 	  from "../views/Component/Dashboard.vue";
import Akun 		  from "../views/Component/akun.vue";
import Login 		  from "../views/Component/login.vue";
import DaftarPengguna from "../views/Component/daftarPengguna.vue";

// PELAPORAN PENELITIAN TAMBAH
import penelitianJurnalTambah 	  from "../views/penelitian/penelitian-jurnal-tambah.vue";
import penelitiAsingTambah 		  from "../views/penelitian/peneliti-asing-tambah.vue";
import penelitianHkiTambah 		  from "../views/penelitian/penelitian-hki-tambah.vue";
import penelitianBukuAjarTambah   from "../views/penelitian/penelitian-bukuajar-tambah.vue";
import hibahDitlitabmasTambah 	  from "../views/penelitian/hibah-ditlitabmas-tambah.vue";
import penyelenggaraanForumTambah from "../views/penelitian/penyelenggaraan-forum-tambah.vue";

// PELAPORAN PENELITIAN LIHAT
import penelitianHkiLihat 		 from "../views/penelitian/penelitian-hki-lihat.vue";
import penelitiAsingLihat 		 from "../views/penelitian/peneliti-asing-lihat.vue";
import hibahDitlitabmasLihat 	 from "../views/penelitian/hibah-ditlitabmas-lihat.vue";
import hibahNonditlitabmasLihat  from "../views/penelitian/hibah-nonditlitabmas-lihat.vue";
import penelitianJurnalLihat 	 from "../views/penelitian/penelitian-jurnal-lihat.vue";
import penelitianBukuAjarLihat 	 from "../views/penelitian/penelitian-bukuajar-lihat.vue";
import penyelenggaraanForumLihat from "../views/penelitian/penyelenggaraan-forum-lihat.vue";
Vue.use(VueRouter);

const routes = [
	{
		path:"/",
		component: dashboard,
	},
	{
		path:"/akun",
		component: Akun,
	},
	{
		path:"/login",
		component: Login,
	},
	{
		path:'/daftar-pengguna',
		component: DaftarPengguna,
	},
	// PATH LIHAT
	{
		path:"/penelitian-lihat/penyelenggaraan-forum",
		component: penyelenggaraanForumLihat,
	},
	{
		path:"/penelitian-lihat/hki",
		component: penelitianHkiLihat,
	},
	{
		path: "/penelitian-lihat/peneliti-asing",
		component: penelitiAsingLihat,
	},
	{
		path:"/penelitian-lihat/hibah-ditlitabmas",
		component: hibahDitlitabmasLihat,
	},
	{
		path:"/penelitian-lihat/hibah-nonditlitabmas",
		component: hibahNonditlitabmasLihat,
	},
	{
		path: "/penelitian-lihat/publikasi-jurnal",
		component: penelitianJurnalLihat,
	},
	{
		path: "/penelitian-lihat/buku-ajar",
		component: penelitianBukuAjarLihat,
	},

	// PATH TAMBAH
	{
		path: "/penelitian-tambah/penyelenggaraan-forum",
		name: "tambah-penyelenggaraan-forum",
		component: penyelenggaraanForumTambah,
		props: true,
	},
	{
		path: "/penelitian-tambah/hibah-ditlitabmas",
		name: "tambah-hibah-ditlitabmas",
		component: hibahDitlitabmasTambah,
		props: true,
	},
	{
		path: "/penelitian-tambah/peneliti-asing",
		name: "tambah-peneliti-asing",
		component: penelitiAsingTambah,
		props: true,
	},
	{
		path: "/penelitian-tambah/hki",
		name: "tambah-penelitian-hki",
		component: penelitianHkiTambah,
		props:true,
	},
	{
		path: "/penelitian-tambah/bukuAjar",
		name: "tambah-penelitian-bukuajar",
		component: penelitianBukuAjarTambah,
		props:true,
	},
	{
		path: "/penelitian-tambah/publikasi-jurnal",
		name: "tambah-penelitian-jurnal",
		component: penelitianJurnalTambah,
		props:true,
	}
	]


const router = new VueRouter({
  routes
})

export default router;
