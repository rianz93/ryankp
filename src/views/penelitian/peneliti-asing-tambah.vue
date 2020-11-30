<template>
	<div>
		<h3>Data Peneliti Asing</h3>
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
					value: "test",
				},
				{
					label: "Nama :",
					name: "nama",
					type: "text",
				},
				{
					label: "Jenis Kelamin :",
					name: "jenisKelamin",
					type: "select",
					options: ["Pria", "Wanita"],
					value: "",
				},
				{
					label: "Akademik :",
					name: "akademik",
					type: "text",
					value: "",
				},
				{
					label: "Negara :",
					name: "negara",
					type: "text",
					value: "",
				},
				{
					label: "Tanggal Tinggal :",
					name: "tanggalTinggal",
					type: "periodic",
					value: {
						start: "",
						end: "",
					},
				},
				// {
				// 	label: "upload berkas",
				// 	name: "berkas",
				// 	type: "file",
				// }
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			

			url: "/penelitian/insertPenelitiAsing.php",
		};
	},
	components: {
		FormData,
	},
	methods: {},
};
</script>
