<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col">
					<h3>Peneliti Asing</h3>
					<p>Kelola data peneliti asing.</p>
				</div>
				<div class="col mt-3"">
					<div class="row">
					    <b-input-group size="md" class="col" >
					      <b-input-group-prepend is-text>
					        <b-icon icon="filter-circle" size="sm"></b-icon>
					      </b-input-group-prepend>
					      <b-form-select type="search" placeholder="Cari Tahun" v-model="filterTahun">
					      	<option :value="''">Pilih Tahun</option>
					      	<option v-for="index in 21" :value="2000+index"> {{ 2000+index }} </option>
					      </b-form-select>
					    </b-input-group>
					</div>
				</div>
			</div>
		</div>
		
		<Tables :table_data_head = "table_data.head" :table_data_body="filteredData" :table_content="tableContent" ></Tables>
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

			// DATA YANG DIGUNAKAN UNTUK HAPUS DATA DALAM DATABASE
			tableContent: {
				namaTable: "peneliti_asing",
				namaId: "peneliti_id",
				componentName: "tambah-peneliti-asing",
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
				.get(API_ENDPOINT + "/penelitian/getPenelitiAsing.php")
				.then(function(response) {
					console.log(response);
					
					app.table_data = response.data;
					console.log(app.table_data);
					
				})
				.catch(function(error) {});
		},

	},
	computed: {

			filteredData(){
				if(this.table_data.body==null){
					return null;
				}else
				return this.table_data.body.filter(data => {

					let datas = data[1].title.toLowerCase().includes(this.filterTahun);

					return datas;
				});
			
			}

	},
	

	created() {
		this.getData();
	},
};
</script>


