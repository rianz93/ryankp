<template>
	<div>
		<h3>Data Buku Ajar</h3>
		<FormData :inputTypes="inputTypes" :url="url" :fieldId="fieldId" ></FormData>
	</div>
</template>
<script>
import FormData from "../Component/FormData.vue";
export default {
	data() {
		return {
			inputTypes: [
				{
					label: "Tahun :",
					name: "tahun",
					type: "year",
					value: "",
				},
				{
					label: "Nama Dosen:",
					name: "nama",
					type: "text",
					value: "",
				},
				{
					label: "NIDN :",
					name: "nidn",
					type: "text",
					value: "",
				},
				{
					label: "Judul Buku :",
					name: "judulBuku",
					type: "text",
					value: "",
				},
				{
					label: "Penerbit :",
					name: "penerbit",
					type:"text",
					value: "",
				},
				{
					label: "ISBN :",
					name: "isbn",
					type: "text",
					value:"",
				},
				{
					label: "Jumlah Halaman :",
					name: "status",
					type:"int",
					valua:'',
				},
				
				{
					label: "Upload halaman cover",
					name: "berkas",
					type: "file",
				},
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			
			fieldId: null,
			url: "/penelitian/insertHki.php",
		};
	},
	components: {
		FormData,
	},
	methods: {},
};
</script>
