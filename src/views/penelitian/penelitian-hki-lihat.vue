<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col">
					<h3>Hak Kekayaan Intelektual</h3>
					<p>Kelola data HKI.</p>
				</div>
				<div class="col mt-3"">
					<div class="row">
						<b-input-group size="md" class="col" >
					      <b-input-group-prepend is-text>
					        <b-icon icon="search" size="sm"></b-icon>
					      </b-input-group-prepend>
					      <b-form-input type="search" v-model= "filterJudul"placeholder="Cari Judul"></b-form-input>
					    </b-input-group>

					    <b-input-group size="md" class="col" >
					      <b-input-group-prepend is-text>
					        <b-icon icon="filter-circle" size="sm"></b-icon>
					      </b-input-group-prepend>
					      <b-form-input type="search" v-model="filterTahun" placeholder="Cari Tahun"></b-form-input>
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
			componentName: "tambah-penelitian-hki",

			filterTahun:'',
			filterJudul:'',

			// DATA YANG DIGUNAKAN UNTUK HAPUS DATA DALAM DATABASE
			tableContent: {
				namaTable: "penelitian_hki",
				namaId: "hki_id",
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
				.get(API_ENDPOINT + "/penelitian/getHki.php")
				.then(function(response) {
					app.table_data = response.data;
					console.log(app.table_data);
				})
				.catch(function(error) {});
		},
		filteredTahun(value){
				if(value == null){
					return this.table_data_body;
				}else{
				return value.filter(data=>{
					let datas = data[4].title.toLowerCase().includes(this.filterJudul);
					return datas;
				});
				}
		}

	},
	computed: {

			filteredData(){
				if(this.table_data.body==null){
					return null;
				}
				else{
				let table_data = this.filteredTahun(this.table_data.body);
				return table_data.filter(data => {
					let datas = data[1].title.toLowerCase().includes(this.filterTahun);
					console.log(datas);
					return datas;

				});
				}
			
			}

			

	},
	

	created() {
		this.getData();
	},
};
</script>


