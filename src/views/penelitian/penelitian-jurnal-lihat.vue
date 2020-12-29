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
					      <b-form-input type="search" v-model= "filterJudul" placeholder="Cari Judul"></b-form-input>
					    </b-input-group>

					    <b-input-group size="md" class="col" >
					      <b-input-group-prepend is-text>
					        <b-icon icon="filter-circle" size="sm"></b-icon>
					      </b-input-group-prepend>
					      <b-form-select type="search" v-model="filterTahun">
					      	<option :value="''">Pilih Tahun</option>
					      	<option v-for="index in 21" :value="2000+index"> {{ 2000+index }} </option>
					      </b-form-select>
					    </b-input-group>
					</div>
				</div>
			</div>
		</div>
		<Tables :table_data_head = "table_data.head" :table_data_body="filteredData" :table_content="tableContent" :export_body="filteredDataExport"></Tables>
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
				namaTable: "penelitian_jurnal",
				namaId: "jurnal_id",
				componentName: "tambah-penelitian-jurnal"
			},
		};
	},
	components:{
		Tables
	},

	computed:{
		filteredDataExport(){
				if(this.table_data.bodyExport==null){
					return null;
				}
				else{
					let table_export = this.filteredTahunExport(this.table_data.bodyExport);
					return table_export.filter(data => {
						let datas = data[1].title.toLowerCase().includes(this.filterTahun);
						console.log(datas);
						return datas;
					});
				}
			},
	

		filteredData(){
				if(this.table_data.body==null){
					return null;
				}
				else{
					let table_data = this.filteredTahun(this.table_data.body);
					return table_data.filter(data => {
						let datas = data[2].title.toLowerCase().includes(this.filterTahun);
						console.log(datas);
						return datas;
					});
				}
			}
	},

	methods: {
		filteredTahun(value){ 
			if(value == null){ 
				return table_data.body; 
			}
			else{
				return value.filter(data=>{ let datas =
				data[3].title.toLowerCase().includes(this.filterJudul.toLowerCase()); return datas; }); 
			} 
		},

		filteredTahunExport(value){ 
			if(value == null){ 
				return this.table_data.bodyExport; 
			}
			else{
				return value.filter(data=>{ let datas =
				data[2].title.toLowerCase().includes(this.filterJudul.toLowerCase()); return datas; }); 
			} 
		},

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
