import Vue from "vue";
import VueRouter from "vue-router";

// KOMPONEN UTAMA
import dashboard from "../views/Component/Dashboard.vue";

// PELAPORAN PENELITIAN TAMBAH
import penelitiAsingTambah from "../views/penelitian/peneliti-asing-tambah.vue";
import penelitianHkiTambah from "../views/penelitian/penelitian-hki-tambah.vue";
import penelitianBukuAjarTambah from "../views/penelitian/penelitian-bukuAjar-tambah.vue";
// PELAPORAN PENELITIAN LIHAT
import penelitianHkiLihat from "../views/penelitian/penelitian-hki-lihat.vue";
import penelitiAsingLihat from "../views/penelitian/peneliti-asing-lihat.vue";
import hibahDitlitabmasLihat from "../views/penelitian/hibah-ditlitabmas-lihat.vue";
import hibahNonditlitabmasLihat from "../views/penelitian/hibah-nonditlitabmas-lihat.vue";
import penelitianJurnalLihat from "../views/penelitian/publikasi-jurnal-lihat.vue";
Vue.use(VueRouter);

const routes = [
	// PATH LIHAT
	{
		path:"/",
		component: dashboard,
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

	// PATH TAMBAH
	{
		path: "/penelitian-tambah/peneliti-asing",
		name: "tambah-peneliti-asing",
		component: penelitiAsingTambah,
		props: true,
	},
	{
		path: "/penelitian-tambah/hki",
		name: "tambah-penelitian-hki",
		component:penelitianHkiTambah,
		props:true
	},
	{
		path: "/penelitian-tambah/bukuAjar",
		name: "tambah-penelitian-bukuAjar",
		component:penelitianBukuAjarTambah,
		props:true
	},
	]


const router = new VueRouter({
  routes
})

export default router;
