<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col">
					<h3>Publikasi jurnal</h3>
					<p>Kelola data Publikasi jurnal.</p>
				</div>
				<div class="col mt-3"">
					<div class="row">
					  	<b-input-group size="md" class="col" >
					      <b-input-group-prepend is-text>
					        <b-icon icon="search" size="sm"></b-icon>
					      </b-input-group-prepend>
					      <b-form-input type="search" placeholder="Cari Judul"></b-form-input>
					    </b-input-group>

					    <b-input-group size="md" class="col" >
					      <b-input-group-prepend is-text>
					        <b-icon icon="filter-circle" size="sm"></b-icon>
					      </b-input-group-prepend>
					      <b-form-input type="search" placeholder="Cari Tahun"></b-form-input>
					    </b-input-group>
					</div>
				</div>
			</div>
		</div>
		<Tables :table_data_head = "table_data.head" :table_data_body="table_data.body" :table_content="tableContent"></Tables>
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
			

			// DATA YANG DIGUNAKAN UNTUK HAPUS DATA DALAM DATABASE
			tableContent: {
				namaTable: "penelitian_jurnal",
				namaId: "jurnal_id",
			},
		};
	},
	components:{
		Tables
	},
	methods: {
		getData() {
			var app = this;
			axios
				.get(API_ENDPOINT + "/penelitian/getJurnal.php")
				.then(function(response) {
					console.log(response.data);
					app.table_data = response.data;
				})
				.catch(function(error) {});
		},
	},
	

	created() {
		this.getData();
	},
};
</script>

<style scoped>	
		/*filter{
			display:flex;
		}*/
</style>
