<template>
	<div>
		<span>
			<!-- JIKA DATA BERHASIL DI HAPUS -->
			<b-alert
				variant="primary"
				:show="sucessStatus"
				dismissible
				@dismissed="dismissSuccess()"
			>
				Data Berhasil di Hapus!
			</b-alert>
		</span>

		<table class="table table-striped mt-4" ref="exportContentPdf">
			<thead>
				<tr>
					<!-- HEADER -->
					<th scope="col" v-for="head in table_data_head">
						{{ head }}
					</th>
					<th scope="col">Aksi</th>
				</tr>
			</thead>
			<tbody>
				<!-- DATA DALAM DATABASE -->
				<tr v-for="(body, index) in table_data_body">
					<th v-for="item in body" v-if="item.type != 'id'">
						<!-- JIKA DATA ARRAY -->
						<span v-if="Array.isArray(item.title)">
							<!-- JIKA DATA PERIODIC (TANGGAL SD) -->
							<span v-if="item.type == 'periodic'" class="item">
								<span>{{ range(item.title) }}</span>
							</span>

							<!-- PENULIS JURNAL -->
							<span
								v-else
								v-for="item_data in item.title"
								class="item"
							>
								{{ item_data }}
							</span>
						</span>

						<!-- JIKA DATA BUKAN ARRAY -->
						<span v-else class="item">{{
							numberWithCommas(item.title, item.type)
						}}</span>
					</th>
					<th>
						<span class="aksi">
							<b-icon
								v-if="table_data_body[index][table_data_body[index].length-1]['type']=='file'"
								class="icon text-primary"
								icon="file-earmark-arrow-down-fill"
							></b-icon>
							<b-icon
								class="icon text-success"
								icon="arrow-up-right-square-fill"
							></b-icon>
							<b-icon
								class="icon text-danger"
								icon="trash-fill"
								@click="
									hapusData(
										table_data_body[index][0]['title']
									)
								"
							></b-icon>
						</span>
					</th>
				</tr>
			</tbody>
		</table>
		<button @click="test"></button>
	</div>
</template>

<script>
import { API_ENDPOINT } from "../../functions/universal.js";
import jspdf from "jspdf";
const axios = require("axios");

export default {
	props: ["table_data_head", "table_data_body", "table_content"],
	data() {
		return {
			sucessStatus: false,
		};
	},
	methods: {
		test(value){
			console.log(this.table_data_body[0]);
		},
		dismissSuccess() {
			this.sucessStatus = false;
		},

		// PRINT DATA PERIODIC
		range(rangeTgl) {
			return rangeTgl[0] + " s/d " + rangeTgl[1];
		},

		hapusData(dataId) {
			this.$swal({
				title: "Apa anda yakin ingin menghapus data?",
				text: "Data yang terhapus tidak bisa dikembalikan!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Hapus",
				cancelButtonText: "Batal",
				showCloseButton: true,
			}).then((result) => {
				if (result.value) {
					let valueId = dataId;
					let namaId = this.table_content["namaId"];
					let namaTable = this.table_content["namaTable"];
					axios
						.get(
							API_ENDPOINT +
								"/deleteData.php?id=" +
								valueId +
								"&namaId=" +
								namaId +
								"&namaTable=" +
								namaTable
						)
						.then((response) => console.log(response.data));
					this.sucessStatus = true;
					setTimeout(() => this.$parent.getData(), 400);
				}
			});
		},

		

		check(row) {
			console.log(row);
		},
		// UBAH INT MENJADI RUPIAH
		numberWithCommas(title, type) {
			if (type != "int") {
				return title;
			} else {
				return (
					"Rp. " +
					title.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
				);
			}
		},
	},
};
</script>

<style scoped>
table {
	font-size: 14px;
}

.item {
	font-weight: normal;
}

.aksi {
	font-weight: normal;
	font-size: 16px;
}

.icon {
	cursor: pointer;
	margin-right: 5px;
}
</style>
