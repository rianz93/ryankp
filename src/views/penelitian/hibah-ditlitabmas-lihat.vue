<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col">
					<h3>Hibah Ditlitabmas</h3>
					<p>Kelola data hibah ditlitabmas.</p>
				</div>
				<div class="col mt-3"">
					<div class="row">
					  	<b-input-group size="md" class="col" >
					      <b-input-group-prepend is-text>
					        <b-icon icon="search" size="sm"></b-icon>
					      </b-input-group-prepend>
					      <b-form-input type="search" placeholder="Cari Judul" v-model="filterJudul"></b-form-input>
					    </b-input-group>

					    <b-input-group size="md" class="col" >
					      <b-input-group-prepend is-text>
					        <b-icon icon="calendar2-date" size="sm"></b-icon>
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
		<Tables :table_data_head = "table_data.head" :table_data_body="filteredData" :table_content="tableContent"></Tables>
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

			tableContent: {
				namaTable: "hibah_ditlitabmas",
				namaId: "hibah_id",
				componentName: "tambah-hibah-ditlitabmas",
			},
		};
	},
	components:{
		Tables
	},
	computed:{
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
	methods: {
		filteredTahun(value){ 
			if(value == null){ 
				return this.table_data_body; 
			}
			else{
				return value.filter(data=>{ let datas =
				data[2].title.toLowerCase().includes(this.filterJudul); return datas; }); 
			} 
		},

		getData: function() {
			let app = this;
			let id  = sessionStorage.getItem("id");
			let isAdmin = sessionStorage.getItem("priority")
			let idParam = isAdmin != 'admin' ? '?id=' + id : '';
			axios
				.get(API_ENDPOINT + "/penelitian/getHibahDitlitabmas.php"+idParam)
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
