<template>
	<div>
		<h3>Data Hak Kekayaan Intelektual (HKI)</h3>
		<FormData
			:inputTypes="inputTypes"
			:url="url"
			:fieldId="fieldId"
		></FormData>
	</div>
</template>
<script>
import FormData from "../Component/FormData.vue";
export default {
	props: ["editData"],
	data() {
		return {
			inputTypes: [
				{
					label: "Tahun Pelaksanaan:",
					name: "tahun",
					type: "year",
					value: null,
				},
				{
					label: "Nama :",
					name: "nama",
					type: "text",
					placeholder: "Nama Dosen..",
					description: "Nama lengkap beserta gelar",
					value: null,
				},
				{
					label: "NIDN :",
					name: "nidn",
					type: "text",
					placeholder: "Masukkan NIDN..",
					value: null,
				},
				{
					label: "Judul :",
					name: "judul",
					type: "text",
					placeholder:"Masukkan Judul..",
					value: null,
				},
				{
					label: "Jenis :",
					name: "jenis",
					type: "select",
					options: [
						{ value: null, text: "Pilih Jenis HKI.." },
						"Hak Cipta",
						"Hak Guna",
					],
					value: null,
				},
				{
					label: "No Pendaftaran :",
					name: "noPendaftaran",
					type: "text",
					placeholder:"Contoh : EC00201931157",
					value: null,
				},
				{
					label: "Status :",
					name: "status",
					type: "select",
					options: [
						{ value: null, text: "Pilih Status HKI.." },
						"Granted",
						"diusulkan",
					],
					value: null,
				},
				{
					label: "No HKI :",
					name: "noHki",
					type: "text",
					placeholder:"Contoh : 000136079",
					value: null,
				},
				{
					label: "Upload berkas",
					name: "berkas",
					type: "file",
					value: null,
				},
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)

			fieldId: null,
			url: "/penelitian/insertHki.php",
		};
	},
	created() {
		this.editChecker();
	},
	components: {
		FormData,
	},
	methods: {
		check() {
			console.log(this.editData);
			// console.log(this.inputTypes);
		},
		editChecker() {
			if (this.editData) {
				this.fieldId = this.editData[0]["title"];
				for (let index = 0; index < this.inputTypes.length; index++) {
					this.inputTypes[index]["value"] = this.editData[index + 1][
						"title"
					];
				}
			}
		},
	},
};
</script>
