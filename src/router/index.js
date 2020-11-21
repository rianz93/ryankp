import Vue from "vue";
import VueRouter from "vue-router";

// PELAPORAN PENELITIAN TAMBAH
import penelitiAsingTambah from "../views/penelitian/peneliti-asing-tambah.vue";

// PELAPORAN PENELITIAN LIHAT
import penelitiAsingLihat from "../views/penelitian/peneliti-asing-lihat.vue";
import hibahDitlitabmas from "../views/penelitian/hibah-ditlitabmas-lihat.vue";
import hibahNonditlitabmas from "../views/penelitian/hibah-nonditlitabmas.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/penelitian-tambah/peneliti-asing",
		component: penelitiAsingTambah,
	},
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
	}
	]


const router = new VueRouter({
  routes
})

export default router;
