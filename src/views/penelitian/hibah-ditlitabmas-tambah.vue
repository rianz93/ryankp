<template>
	<div>
		<h3>Data Hibah Ditlitabmas</h3>
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
					label: "Tahun Kegiatan :",
					name: "tahun",
					type: "year",
					value: null,
				},
				{
					label: "Judul Penelitian :",
					name: "judul",
					type: "text",
					value: null,
				},
				{
					label: "Personil :",
					name: "personil",
					type: "text",
					value: null,
				},
				{
					label: "Jabatan :",
					name: "jabatan",
					type: "text",
					value: null,
				},
				{
					label: "Bidang Penelitian :",
					name: "bidang",
					type: "text",
					value: null,
				},
				{
					label: "Dana :",
					name: "dana",
					type: "currency",
					value: null,
				}
				
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			

			url: "/penelitian/insertHibahditlitabmas.php",
		};
	},
	components: {
		FormData,
	},
	methods: {},
};
</script>
