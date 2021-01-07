import Vue 		 from "vue";
import VueRouter from "vue-router";

// KOMPONEN UTAMA
import dashboard 	  from "../views/Component/Dashboard.vue";
import Akun 		  from "../views/Component/akun.vue";
import Login 		  from "../views/Component/login.vue";
import DaftarPengguna from "../views/Component/daftarPengguna.vue";
import tambahPengguna from "../views/Component/tambahPengguna.vue";

// PELAPORAN PENELITIAN TAMBAH
import penelitianJurnalTambah 	  from "../views/penelitian/penelitian-jurnal-tambah.vue";
import penelitiAsingTambah 		  from "../views/penelitian/peneliti-asing-tambah.vue";
import penelitianHkiTambah 		  from "../views/penelitian/penelitian-hki-tambah.vue";
import penelitianBukuAjarTambah   from "../views/penelitian/penelitian-bukuajar-tambah.vue";
import hibahDitlitabmasTambah 	  from "../views/penelitian/hibah-ditlitabmas-tambah.vue";
import penyelenggaraanForumTambah from "../views/penelitian/penyelenggaraan-forum-tambah.vue";
import penelitianLuaranTambah	  from "../views/penelitian/penelitian-luaran-tambah.vue";

//PELAPORAN PKM TAMBAH
import pkmUnitUsahaTambah 		  	from "../views/pkm/pkm-unit-usaha-kampus-tambah.vue";
import pkmMbhTambah		  		  	from "../views/pkm/pkm-mbh-tambah.vue";
import produkTersertifikasiTambah 	from "../views/pkm/produk-tersertifikasi-tambah.vue";
import produkTerstandarisasiTambah 	from "../views/pkm/produk-terstandarisasi-tambah.vue";
import publikasiMediaMassaTambah   	from "../views/pkm/publikasi-media-massa-tambah.vue";
import pkmJurnalTambah				from "../views/pkm/pkm-jurnal-tambah.vue";

//PELAPORAN PKM LIHAT
import publikasiMediaMassaLihat		from "../views/pkm/publikasi-media-massa-lihat.vue";
import pkmUnitUsahaLihat 		 	from "../views/pkm/pkm-unit-usaha-kampus-lihat.vue";
import pkmMbhLihat		 		 	from "../views/pkm/pkm-mbh-lihat.vue";
import produkTersertifikasiLihat 	from "../views/pkm/produk-tersertifikasi-lihat";
import produkTerstandarisasiLihat 	from "../views/pkm/produk-terstandarisasi-lihat";
import pkmJurnalLihat				from "../views/pkm/pkm-jurnal-lihat.vue";

// PELAPORAN PENELITIAN LIHAT
import unitHasilRisetLihat		 from "../views/penelitian/unit-hasil-riset-lihat.vue";
import penelitianHkiLihat 		 from "../views/penelitian/penelitian-hki-lihat.vue";
import penelitiAsingLihat 		 from "../views/penelitian/peneliti-asing-lihat.vue";
import hibahDitlitabmasLihat 	 from "../views/penelitian/hibah-ditlitabmas-lihat.vue";
import hibahNonditlitabmasLihat  from "../views/penelitian/hibah-nonditlitabmas-lihat.vue";
import penelitianJurnalLihat 	 from "../views/penelitian/penelitian-jurnal-lihat.vue";
import penelitianBukuAjarLihat 	 from "../views/penelitian/penelitian-bukuajar-lihat.vue";
import penyelenggaraanForumLihat from "../views/penelitian/penyelenggaraan-forum-lihat.vue";
import hibahNonditlitabmasTambah from "../views/penelitian/hibah-nonditlitabmas-tambah.vue";
import unitHasilRisetTambah		 from "../views/penelitian/unit-hasil-riset-tambah.vue"
import penelitianLuaranLihat	 from "../views/penelitian/penelitian-luaran-lihat.vue";
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
	{
		path:'/tambah-pengguna',
		component:tambahPengguna,
		name:'tambah-pengguna',
		props:true,
	},
	// PATH LIHAT PKM
	{
		path:"/pkm-lihat/publikasi-jurnal",
		component:pkmJurnalLihat,
	},
	{
		path:"/pkm-lihat/publikasi-media-massa",
		component: publikasiMediaMassaLihat,
	},
	{
		path:'/pkm-lihat/produk-tersertifikasi',
		component: produkTersertifikasiLihat,
	},
	{
		path:'/pkm-lihat/produk-terstandarisasi',
		component: produkTerstandarisasiLihat,
	},
	{
		path:'/pkm-lihat/unit-usaha',
		component: pkmUnitUsahaLihat,
	},
	{
		path:'/pkm-lihat/mbh',
		component: pkmMbhLihat,
	},
	// PATH LIHAT PENELITIAN
	{
		path:"/penelitian-lihat/unit-bhr",
		component:unitHasilRisetLihat,
	},
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
	// PATH TAMBAH PKM
	{
		path:"/penelitian-tambah/luaran-lainnya",
		component: penelitianLuaranTambah,
		name:"penelitian-luaran-tambah",
		props:true,
	},
	{
		path:"/pkm-tambah/publikasi-jurnal",
		component:pkmJurnalTambah,
		name:"pkm-jurnal-tambah",
		props:true
	},
	{
		path:"/pkm-tambah/publikasi-media-massa",
		component: publikasiMediaMassaTambah,
		name:"publikasi-media-massa-tambah",
		props:true,
	},
	{
		path: "/pkm-tambah/unit-usaha",
		component: pkmUnitUsahaTambah,
		name: "pkm-unit-usaha-tambah",
		props: true,
	},
	{
		path: "/pkm-tambah/produk-tersertifikasi",
		component: produkTersertifikasiTambah,
		name: "produk-tersertifikasi-tambah",
		props: true,
	},
	{
		path: "/pkm-tambah/produk-terstandarisasi",
		component: produkTerstandarisasiTambah,
		name: "produk-terstandarisasi-tambah",
		props: true,
	},
	{
		path: "/pkm-tambah/mbh",
		component: pkmMbhTambah,
		name: "pkm-mbh-tambah",
		props: true,
	},
	// PATH TAMBAH PENELITIAN
	{
		path:"/penelitian-tambah/unit-bhr",
		component: unitHasilRisetTambah,
		name:"tambah-unit-hasil-riset",
		props:true,
	},
	{
		path:"/penelitian-tambah/hibah-nonditlitabmas",
		component: hibahNonditlitabmasTambah,
		name:"tambah-hibah-nonditlitabmas",
		props:true,
	},
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
