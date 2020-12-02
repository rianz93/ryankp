import Vue from "vue";
import VueRouter from "vue-router";

// PELAPORAN PENELITIAN TAMBAH
import penelitiAsingTambah from "../views/penelitian/peneliti-asing-tambah.vue";
import penelitianHkiTambah from "../views/penelitian/penelitian-hki-tambah.vue";

// PELAPORAN PENELITIAN LIHAT
import penelitiAsingLihat from "../views/penelitian/peneliti-asing-lihat.vue";
import hibahDitlitabmasLihat from "../views/penelitian/hibah-ditlitabmas-lihat.vue";
import hibahNonditlitabmasLihat from "../views/penelitian/hibah-nonditlitabmas-lihat.vue";
import penelitianJurnalLihat from "../views/penelitian/publikasi-jurnal-lihat.vue";
Vue.use(VueRouter);

const routes = [
	// PATH LIHAT
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
	]


const router = new VueRouter({
  routes
})

export default router;
