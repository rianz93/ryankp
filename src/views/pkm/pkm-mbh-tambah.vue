<template>
	<div>
		<h3>Data Mitra Berbadan Hukum</h3>
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
					label: "Nama Mitra : ",
					name: "nama",
					placeholder: "Masukkan Nama Mitra..",
					type: "text",
					value: null,
				},
				{
					label: "Bidang Usaha :",
					name: "bidang",
					placeholder: "Masukkan Bidang Usaha..",
					type: "text",
					value: null,
				},
				{
					label: "Upload Berkas MOU",
					name: "berkas",
					type: "file",
					value: null,
				},
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			
			fieldId: null,
			url: "/pkm/insertMbh.php",
		};
	},
	components: {
		FormData,
	},

	created(){
		console.log(this.editData);
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
