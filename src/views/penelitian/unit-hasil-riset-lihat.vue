<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col">
					<h3>Unit Bisnis Hasil Riset</h3>
					<p>Kelola data unit bisnis hasil riset.</p>
				</div>
			</div>
		</div>

		<Tables :table_data_head = "table_data.head" :table_data_body="table_data.body" :table_content="tableContent" ></Tables>
	</div>

</template>

<script>
import { API_ENDPOINT } from "../../functions/universal.js";
import Tables from "../Component/Tables.vue";
const axios = require("axios");

export default {
	data() {
		return {
			table_data: [],

			filterTahun:'',
			filterJudul:'',

			// DATA YANG DIGUNAKAN UNTUK HAPUS DATA DALAM DATABASE
			tableContent: {
				namaTable: 	"unit_bisnis_hr",
				namaId: 	"unit_bisnis_hr_id",
				componentName: "tambah-unit-hasil-riset",
			},
		};
	},
	components:{
		Tables
	},
	methods: {
		getData() {
			let app = this;
			let id  = sessionStorage.getItem("id");
			let isAdmin = sessionStorage.getItem("priority")
			let idParam = isAdmin != 'admin' ? '?id=' + id : '';
			axios
				.get(API_ENDPOINT + "/penelitian/getUnitBisnis.php" + idParam)
				.then(function(response) {
					app.table_data = response.data;
					console.log(app.table_data);
				})
				.catch(function(error) {});
		},
	},

	created() {
		this.getData();
	},
};
</script>


