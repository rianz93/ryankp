<template>
	<div>
		<h3>Data Hibah Ditlitabmas</h3>
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
					label: "Tahun Kegiatan :",
					name: "tahun",
					type: "year",
					value: null,
				},
				{
					label: "Judul Penelitian :",
					name: "judul",
					type: "text",
					placeholder:"Contoh : Marketing and Entrepreneurship Reflection",
					value: null,
				},
				{
					label: "Personil Penelitian:",
					name: "personil",
					type: "personil",
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
					label: "Jenis Penelitian :",
					name: "jenis",
					type: "select",
					options: [
						{ value: null, text: "Pilih jenis penelitian.." },
						"Dasar",
						"Terapan",
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
					label: "Sumber Dana :",
					name: "sumber",
					type: "select",
					options: [
						{ value: null, text: "Pilih sumber dana.." },
						"Dalam Negeri",
						"Luar Negeri",
					],
					value: null,
				},
				{
					label: "Institusi :",
					name: "institusi",
					type: "select",
					options: [
						{ value: null, text: "Pilih institusi.." },
						"Internal PT",
						"Pribadi Peneliti",
					],
					value: null,
				},
				{
					label: "Dana :",
					name: "dana",
					type: "currency",
					placeholder: "Masukkan Nominal Dana..",
					value: null,
				},
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)

			fieldId: null,
			url: "/penelitian/insertHibahnonditlitabmas.php",
		};
	},
	created() {
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
					this.inputTypes[index]["value"] = this.editData[index + 1][
						"title"
					];
				}
			}
		},
	},
};
</script>
