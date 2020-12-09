<template>
<div>
	<h3> Data Publikasi Jurnal </h3>
	<FormData :inputTypes="inputTypes" :url="url"></FormData>
</div>	
</template>

<script>
	import FormData from "../Component/FormData.vue";
	export default{
		props:['editData'],
		data(){
			return{
					inputTypes: [
					{
						label: "Jenis Jurnal",
						name: "jenisJurnal",
						type: "select",
						options:['Jurnal Internasional', 'Jurnal Nasional Terakreditasi', 'Jurnal Nasional tidak Terakreditasi'],
						value: null,
					},
					{
						label: "Tahun Kegiatan :",
						name: "tahun",
						type: "year",
						value: null,
					},
					{
						label: "Judul Publikasi :",
						name: "judul",
						type: "text",
						value: null,
					},
					{
						label: "Nama Penulis :",
						name: "penulis",
						type: "penulis",
						value: null,
					},
					{
						label: "Nama Jurnal :",
						name: "namaJurnal",
						type: "text",
						value: null,
					},
					{
						label: "ISSN :",
						name: "issn",
						type: "text",
						value: null,
					},
					{
						label: "Volume :",
						name: "volume",
						type: "text",
						value: null,
					},
					{
						label: "Nomor :",
						name: "nomor",
						type: "text",
						value: null,
					},
					{
						label: "Halaman :",
						name: "halaman",
						type: "text",
						value: null,
					},
					{
						label : "URL :",
						name: "url",
						type: "text",
						value: null,
					},
					{
						label : "Berkas : ",
						name: "berkas",
						type: "file",
						value: null,
					}
					
				],
			}
		},
		components: {
			FormData,
		}
	};
</script>