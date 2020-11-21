<template>
	<div>
		<h3>Data Peneliti Asing</h3>
		<FormData :inputTypes="inputTypes" :url="url" ></FormData>
	</div>
</template>
<script>
	import FormData from '../Component/FormData.vue';
	export default{

		data(){
			return{
				inputTypes:[
					{
						label: "Tahun :",
						name: "tahun",
						type: "date",
					},
					{
						label: "Nama :",
						name: "nama",
						type:"text",
					},
					{
						label: "Jenis Kelamin :",
						name: "jenisKelamin",
						type:"select",
						option:["Pria","Perempuan"],
					},
					{
						label: "Akademik :",
						name: "akademik",
						type:"text",
					},
					{
						label: "Negara :",
						name: "negara",
						type:"text",
					},
					{	
						label: "Tanggal Tinggal :",
						name: "tanggalTinggal",
						type: "periodic",
					}
				]
				url:'/penelitian/insertPenlitiAsing.php',

			}
		},
		components:{
			FormData
		},
		methods : {
			
		}
	}
</script>
