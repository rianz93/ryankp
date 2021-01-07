<template>
	<div>
		<h3>Data Hibah Ditlitabmas</h3>
		<FormData :inputTypes="inputTypes" :url="url" :fieldId="fieldId"></FormData>
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
					label: "Tahun Kegiatan :",
					name: "tahun",
					type: "year",
					value: null,
				},
				{
					label: "Judul Penelitian :",
					name: "judul",
					type: "text",
					placeholder: "Masukkan judul penelitian..",
					value: null,
				},
				{
					label: "Personil :",
					name: "personil",
					placeholder:"Masukkan nama personil..",
					type: "text",
					value: null,
				},
				{
					label: "Jabatan :",
					name: "jabatan",
					type: "select",
					options: [
						{ value: null, text: "Pilih jabatan.." },
						"Ketua Pengusul",
						"Anggota Pengusul",
					],
					value: null,
				},
				{
					label: "Bidang Penelitian :",
					name: "bidang",
					type: "text",
					placeholder:"Masukkan bidang penelitian..",
					value: null,
				},
				{
					label: "Dana :",
					name: "dana",
					type: "currency",
					placeholder: "Masukkan Nominal Dana..",
					value: null,
				}
				
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			
			fieldId: null,
			url: "/penelitian/insertHibahditlitabmas.php",
		};
	},
	created(){
		this.editChecker();
	},

	components: {
		FormData,
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
