<template>
	<div>
		<!-- <b-button @click="coba()">coba</b-button> -->
		<h3>Data Peneliti Asing</h3>
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
	created() {
		this.editChecker();
	},
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
					label: "Nama :",
					name: "nama",
					type: "text",
					placeholder: "Nama peneliti..",
					description:"Nama lengkap beserta gelar",
					value: null,
				},
				{
					label: "Jenis Kelamin :",
					name: "jenisKelamin",
					type: "select",
					options: [
					{ 	value : null, text: "Pilih Jenis Kelamin.."},
						"Pria", 
						"Wanita"],
					value: null,
				},
				{
					label: "Akademik :",
					name: "akademik",
					type: "text",
					placeholder:"Contoh : Asisten Ahli",
					value: null,
				},
				{
					label: "Negara :",
					name: "negara",
					type: "text",
					placeholder:"Contoh : Perancis",
					value: null,
				},
				{
					label: "Tanggal Tinggal :",
					name: "tanggalTinggal",
					type: "periodic",
					value: {
						start: null,
						end: null,
					},
				},
			],

			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			fieldId: null,
			url: "/penelitian/insertPenelitiAsing.php",
		};
	},
	components: {
		FormData,
	},
	methods: {
		editChecker() {
			if (this.editData) {
				this.fieldId = this.editData[0]["title"];
				for (let index = 0; index < this.inputTypes.length; index++) {
					if (this.editData[index + 1]["type"] == "periodic") {
						this.inputTypes[index]["value"][
							"start"
						] = this.longDateToShortDate(
							this.editData[index + 1]["title"][0]
						);
						this.inputTypes[index]["value"][
							"end"
						] = this.longDateToShortDate(
							this.editData[index + 1]["title"][1]
						);
					} else {
						this.inputTypes[index]["value"] = this.editData[
							index + 1
						]["title"];
					}
				}
			}
		},
		longDateToShortDate(value) {
			let tanggal = new Date(value);
			return (
				tanggal.getMonth() +
				1 +
				"/" +
				tanggal.getDate() +
				"/" +
				tanggal.getFullYear()
			);
		},
		coba() {
			console.log(this.inputTypes);
			console.log(this.editData);
		},
	},
};
</script>
