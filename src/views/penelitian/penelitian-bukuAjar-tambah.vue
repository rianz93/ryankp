<template>
	<div>
		<h3>Data Buku Ajar</h3>
		<FormData :inputTypes="inputTypes" :url="url" :fieldId="fieldId" ></FormData>
	</div>
</template>
<script>
import FormData from "../Component/FormData.vue";
export default {
	props:["editData"],
	data() {
		return {
			inputTypes: [
				{
					label: "Tahun :",
					name: "tahun",
					type: "year",
					value: null,
				},
				{
					label: "Nama Dosen :",
					name: "nama",
					placeholder:"Nama Dosen..",	
					description:"Nama lengkap beserta gelar",
					type: "text",
					value: null,
				},
				{
					label: "NIDN :",
					name: "nidn",
					type: "text",
					value: null,
				},
				{
					label: "Judul Buku :",
					name: "judulBuku",
					type: "text",
					value: null,
				},
		
				{
					label: "Penerbit :",
					name: "penerbit",
					type:"text",
					value: null,
				},
				{
					label: "ISBN :",
					name: "isbn",
					type: "text",
					value: null,
				},
				{
					label: "Jumlah Halaman :",
					name: "jumlahHalaman",
					type: "int",
					value: null,
				},
				
				{
					label: "Upload halaman cover",
					name: "berkas",
					type: "file",
					value: null,
				},
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			
			fieldId: null,
			url: "/penelitian/insertBuku.php",
		};
	},
	components: {
		FormData,
	},

	created(){
		this.editChecker();
	},

	methods: {
		editChecker() {
			if (this.editData) {
				this.fieldId = this.editData[0]["title"];
				for (let index = 0; index < this.inputTypes.length; index++) {
					this.inputTypes[index]["value"] = this.editData[
						index + 1
					]["title"];
				}
			}
		},
	},
};
</script>
