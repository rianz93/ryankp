<template>
	<div>
		<h3>Data Hak Kekayaan Intelektual</h3>
		<FormData :inputTypes="inputTypes" :url="url" ></FormData>
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
					label: "Nama :",
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
					label: "Judul :",
					name: "judul",
					type: "text",
					value: "",
				},
				{
					label: "Jenis :",
					name: "jenis",
					options: ["Hak Cipta", "Hak Guna"],
					value: "",
				},
				{
					label: "No Pendaftaran :",
					name: "noPendaftaran",
					type: "text",
					value:"",
				},
				{
					label: "Status :",
					name: "status",
					options:["Granted","diusulkan"],
					value:"",
				},
				{
					label: "No HKI :",
					name: "noHki",
					type: "text",
					value:"",
				},
				{
					label: "Upload berkas",
					name: "berkas",
					type: "file",
				},
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			

			url: "/penelitian/insertHki.php",
		};
	},
	components: {
		FormData,
	},
	methods: {},
};
</script>
