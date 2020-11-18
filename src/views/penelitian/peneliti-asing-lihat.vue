<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col">
					<h3>Peneliti Asing</h3>
					<p>Kelola data peneliti asing.</p>
				</div>
				<div class="col mt-3 filter"">
					<b-form-input size="md" class="mr-sm-2" placeholder="Cari peneliti asing"></b-form-input>
					<b-form-select></b-form-select>	
				</div>
			</div>
		</div>
		<Tables :table_data_head = "table_data.head" :table_data_body="table_data.body"></Tables>
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
		};
	},
	components:{
		Tables
	},
	methods: {
		getData: function() {
			var app = this;
			axios
				.get(API_ENDPOINT + "/penelitian/getPenelitiAsing.php")
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
		.filter{
			display:flex;
		}
</style>
