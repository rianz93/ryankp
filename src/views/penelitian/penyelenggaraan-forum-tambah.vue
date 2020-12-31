<template>
	<div>
		<!-- <b-button @click="coba()">coba</b-button> -->
		<h3>Data Penyelenggaraan Forum Lokakarya/Seminar</h3>
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
					label: "Tahun Kegiatan :",
					name: "tahun",
					type: "year",
					value: null,
				},
				{
					label: "Nama Kegiatan :",
					name: "namaKegiatan",
					type: "text",
					value: null,
				},
				{
					label: "Level :",
					name: "level",
					type: "select",
					options: [
						{ value: null, text: "Pilih level kegiatan.." },
						"Regional",
						"Nasional",
						"International",
					],
					value: null,
				},
				{
					label: "Pelaksana :",
					name: "pelaksana",
					type: "text",
					value: null,
				},
				{
					label: "Mitra/Sponsorship :",
					name: "mitra",
					type: "text",
					value: null,
				},
				{
					label: "Tanggal :",
					name: "tanggalTinggal",
					type: "periodic",
					value: {
						start: null,
						end: null,
					},
				},
				{
					label: "Tempat :",
					name: "tempat",
					type: "text",
					placeholder: "Contoh : Universitas Katolik De La Salle Manado",
					value: null,
				},
			],

			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			fieldId: null,
			url: "/penelitian/insertPenyelenggaraanForum.php",
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
