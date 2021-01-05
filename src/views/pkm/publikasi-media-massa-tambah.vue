<template>
	<div>
		<h3>Data Publikasi Media Massa</h3>
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
					label: "Judul :",
					name: "judul",
					type: "text",
					placeholder:"Masukkan judul..",
					value: null,
				},
				
				{
					label: "Media :",
					name: "media",
					type: "text",
					placeholder:"Masukkan Media..",
					value: null,
				},
				{
					label: "Jenis :",
					name: "jenis",
					type: "text",
					placeholder:"Masukkan jenis media massa..",
					value: null,
				},
				{
					label: "Volume :",
					name: "volume",
					type: "text",
					placeholder:"Masukkan volume..",
					value: null,
				},
				{
					label: "Nomor :",
					name: "nomor",
					type: "text",
					placeholder:"Masukkan nomor..",
					value: null,
				},
				{
					label: "Halaman :",
					name: "halaman",
					type: "text",
					placeholder:"Masukkan halaman..",
					value: null,
				},
				{
					label: "Url :",
					name: "url",
					type: "text",
					placeholder:"Masukkan url..",
					value: null,
				},
				{
					label: "Upload berkas :",
					name: "berkas",
					type: "file",
					value: null,
				},
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)

			fieldId: null,
			url: "/pkm/insertMedia.php",
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
