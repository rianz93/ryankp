<template>
	<div>
		<!-- <b-button @click="check">Check</b-button> -->
		<h3>Data Publikasi Jurnal</h3>
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
					label: "Jenis Jurnal :",
					name: "jenisJurnal",
					type: "select",
					options: [
						{ value: null, text: "Pilih Jenis Jurnal.." },
						"Jurnal Internasional",
						"Jurnal Nasional Terakreditasi",
						"Jurnal Nasional tidak Terakreditasi",
					],
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
					placeholder: "Judul jurnal...",
					type: "text",
					value: null,
				},
				{
					label: "Nama Penulis ",
					name: "penulis",
					type: "penulis",
					value: [],
				},

				// TOTAL JURNAL
				{
					label: "Nama Jurnal :",
					name: "namaJurnal",
					placeholder: "Contoh : Journal of Physics: Conference Series",
					type: "text",
					value: null,
				},
				{
					label: "ISSN :",
					name: "issn",
					type: "text",
					placeholder: "Contoh : 2889-4433",
					value: null,
				},
				{
					label: "Volume :",
					name: "volume",
					type: "text",
					placeholder: "Contoh : 1317",
					value: null,
				},
				{
					label: "Nomor :",
					name: "nomor",
					type: "text",
					placeholder: "Contoh : 012070",
					value: null,
				},
				{
					label: "Halaman :",
					name: "halaman",
					type: "text",
					placeholder: "Contoh : 1 s/d 5",
					value: null,
				},
				// TOTAL JURNAL

				{
					label: "URL :",
					name: "url",
					type: "text",
					placeholder: "Contoh : unikadelasalle.ac.id",
					value: null,
				},
				{
					label: "Berkas : ",
					name: "berkas",
					type: "file",
					value: null,
				},
			],
			fieldId: null,
			url: "/penelitian/insertJurnal.php",
		};
	},

	components: {
		FormData,
	},

	created() {
		this.editChecker();
	},

	methods: {
		check() {
			console.log(this.editData);
			console.log(this.fieldId);
		},
		editChecker() {
			if (this.editData) {
				this.fieldId = this.editData[0]["title"];
				let j = 0;
				for (let index = 0; index < this.inputTypes.length; index++) {
					if (this.editData[index + 1]["type"] == "jurnal") {
						this.inputTypes[4]["value"] = this.editData[index + 1][
							"title"
						]["nama"];
						this.inputTypes[5]["value"] = this.editData[index + 1][
							"title"
						]["issn"];
						this.inputTypes[6]["value"] = this.editData[index + 1][
							"title"
						]["volume"];
						this.inputTypes[7]["value"] = this.editData[index + 1][
							"title"
						]["nomor"];
						this.inputTypes[8]["value"] = this.editData[index + 1][
							"title"
						]["halaman"];
						j += 5;
					} else {
						this.inputTypes[j]["value"] = this.editData[index + 1][
							"title"
						];
						j++;
					}
				}
			}
		},
	},
};
</script>
