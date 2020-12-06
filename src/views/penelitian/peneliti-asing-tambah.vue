<template>
	<div>
		<h3>Data Peneliti Asing</h3>
		<FormData :inputTypes="inputTypes" :url="url" :fieldId="fieldId"></FormData>
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
					label: "Jenis Kelamin :",
					name: "jenisKelamin",
					type: "select",
					options: ["Pria", "Wanita"],
					value: null,
				},
				{
					label: "Akademik :",
					name: "akademik",
					type: "text",
					value: null,
				},
				{
					label: "Negara :",
					name: "negara",
					type: "text",
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
				// {
				// 	label: "upload berkas",
				// 	name: "berkas",
				// 	type: "file",
				// },
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			
			fieldId: null,
			url: "/penelitian/insertPenelitiAsing.php",
		};
	},
	components: {
		FormData,
	},
	methods: {},
};
</script>
