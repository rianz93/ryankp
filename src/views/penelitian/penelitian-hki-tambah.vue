<template>
	<div>
		<h3>Data Hak Kekayaan Intelektual (HKI)</h3>
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
					value: null,
				},
				{
					label: "Nama :",
					name: "nama",
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
					label: "Judul :",
					name: "judul",
					type: "text",
					value: null,
				},
				{
					label: "Jenis :",
					name: "jenis",
					type:"select",
					options: ["Hak Cipta", "Hak Guna"],
					value: null,
				},
				{
					label: "No Pendaftaran :",
					name: "noPendaftaran",
					type: "text",
					value: null,
				},
				{
					label: "Status :",
					name: "status",
					type:"select",
					options:["Granted","diusulkan"],
					value:null,
				},
				{
					label: "No HKI :",
					name: "noHki",
					type: "text",
					value: null,
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
