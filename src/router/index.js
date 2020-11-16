import Vue from "vue";
import VueRouter from "vue-router";

// PELAPORAN PENELITIAN TAMBAH
import penelitiAsingTambah from "../views/penelitian/peneliti-asing-tambah.vue";

// PELAPORAN PENELITIAN LIHAT
import penelitiAsingLihat from "../views/penelitian/peneliti-asing-lihat.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/penelitian-tambah/peneliti-asing",
		component: penelitiAsingTambah,
	},
	{
		path: "/penelitian-lihat/peneliti-asing",
		component: penelitiAsingLihat,
	}
	]


const router = new VueRouter({
  routes
})

export default router;
