import Vue from "vue";
import VueRouter from "vue-router";

// PELAPORAN PENELITIAN TAMBAH
import penelitiAsingTambah from "../views/penelitian/peneliti-asing-tambah.vue";

// PELAPORAN PENELITIAN LIHAT
import penelitiAsingLihat from "../views/penelitian/peneliti-asing-lihat.vue";
import hibahDitlitabmas from "../views/penelitian/hibah-ditlitabmas-lihat.vue";
import hibahNonditlitabmas from "../views/penelitian/hibah-nonditlitabmas.vue";
import penelitianJurnal from "../views/penelitian/publikasi-jurnal-lihat.vue";
Vue.use(VueRouter);

const routes = [
	// PATH LIHAT
	{
		path: "/penelitian-lihat/peneliti-asing",
		component: penelitiAsingLihat,
	},
	{
		path:"/penelitian-lihat/hibah-ditlitabmas",
		component: hibahDitlitabmas,
	},
	{
		path:"/penelitian-lihat/hibah-nonditlitabmas",
		component: hibahNonditlitabmas
	},
	{
		path: "/penelitian-lihat/publikasi-jurnal",
		component: penelitianJurnal
	},

	// PATH TAMBAH
	{
		path: "/penelitian-tambah/peneliti-asing",
		name: "tambah-peneliti-asing",
		component: penelitiAsingTambah,
		props: true,
	},
	]


const router = new VueRouter({
  routes
})

export default router;
