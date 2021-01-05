<template>
	<div>
		<h3>Data Unit bisnis hasil riset</h3>
		<FormData :inputTypes="inputTypes" :url="url" :fieldId="fieldId" ></FormData>
	</div>
</template>
<script>
import FormData from "../Component/FormData.vue";
export default {
	props:["editData"],
	data() {
		return {
			inputTypes: [
				{
					label: "Nama Unit Bisnis :",
					name: "nama",
					placeholder:"Masukkan Nama unit bisnis..",
					type: "text",
					value: null,
				},
				{
					label: "Lingkup Kegiatan :",
					name: "lingkup",
					placeholder:"Masukkan lingkup kegiatan..",
					type: "text",
					value: null,
				},
				{
					label: "Surat Keterangan",
					name: "berkas",
					type: "file",
					value: null,
				},
			],
			// NAMA TABLE, DAN NAMA ID DALAM TABLE (PRIMARY KEY)
			
			fieldId: null,
			url: "/penelitian/insertUnitBisnis.php",
		};
	},
	components: {
		FormData,
	},

	created(){
		this.editChecker();
	},

	methods: {
		editChecker() {
			if (this.editData) {
				this.fieldId = this.editData[0]["title"];
				for (let index = 0; index < this.inputTypes.length; index++) {
					this.inputTypes[index]["value"] = this.editData[
						index + 1
					]["title"];
				}
			}
		},
	},
};
</script>
