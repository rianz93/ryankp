<template>
	<div>
		<span>
			<!-- JIKA DATA BERHASIL DI HAPUS -->
			<b-alert
				variant="primary"
				:show="sucessStatus"
				fade
				dismissible
				@dismissed="dismissSuccess()"
			>
				Data Berhasil di Hapus!
			</b-alert>
		</span>

		<div v-if="table_data_head == null">
			<hr />
			<h3>
				<b-icon icon="arrow-return-left" class="mr-4"></b-icon
				><i>Data kosong</i
				><b-icon icon="arrow-return-right" class="ml-4"></b-icon>
			</h3>
			<hr />
		</div>
		<span v-else>
			<div style="height: 12px">
				<span style="right:20px; position: absolute;">
					<b-button
						size="sm"
						variant="danger"
						class="export-tombol"
						@click="downloadPdf"
					>
						Export PDF
						<b-icon
							icon="journal-bookmark-fill"
							class="ml-1"
						></b-icon>
					</b-button>
					<b-button
						size="sm"
						variant="info"
						class="export-tombol ml-2"
						@click="downloadXls"
					>
						Export XLS
						<b-icon
							icon="file-earmark-spreadsheet-fill"
							class="ml-1"
						></b-icon>
					</b-button>
				</span>
			</div>
			<table class="table table-striped mt-4">
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
						<th
							v-for="item in body"
							v-if="item.type != 'id' && item.type != 'file'"
						>
							<!-- JIKA DATA ARRAY -->
							<span v-if="Array.isArray(item.title)">
								<!-- JIKA DATA PERIODIC (TANGGAL SD) -->
								<span
									v-if="item.type == 'periodic'"
									class="item"
								>
									<span>{{ range(item.title) }}</span>
								</span>

								<!-- PENULIS JURNAL -->
								<span
									v-else-if="item.type == 'penulis'"
									v-for="item_data in item.title"
									class="item"
								>
									<li>
										<b-icon icon="dot"></b-icon
										>{{ item_data }}
									</li>
									<br />
								</span>
							</span>

							<span
								v-else-if="item.type == 'jurnal'"
								class="item nama-jurnal"
							>
								<b>{{ item.title.nama }}</b>
								<hr />
								<span class="item-jurnal">
									ISSN : {{ item.title.issn }}<br />
									Volume : {{ item.title.volume }}<br />
									Halaman : {{ item.title.halaman }}<br />
									Nomor : {{ item.title.nomor }}
								</span>
							</span>

							<span v-else class="item">{{
								numberWithCommas(item.title, item.type)
							}}</span>
						</th>
						<th>
							<span class="aksi">
								<!-- JIKA PELAPORAN MEMILIKI BERKAS/FILE -->
								<a
									v-if="
										table_data_body[index][
											table_data_body[index].length - 1
										]['type'] == 'file'
									"
									:href="
										table_data_body[index][
											table_data_body[index].length - 1
										]['title']
									"
									><b-icon
										:id="'download' + index"
										class="icon text-primary"
										icon="file-earmark-arrow-down-fill"
									></b-icon
								></a>

								<router-link
									:to="{
										name: table_content.componentName,
										params: {
											editData: table_data_body[index],
										},
									}"
									><b-icon
										:id="'edit' + index"
										class="icon text-success"
										icon="arrow-up-right-square-fill"
									></b-icon
								></router-link>
								<b-icon
									:id="'hapus' + index"
									class="icon text-danger"
									icon="trash-fill"
									title="Tooltip directive content"
									@click="
										hapusData(
											table_data_body[index][0]['title']
										)
									"
								></b-icon>

								<b-tooltip
									:target="'hapus' + index"
									placement="top"
								>
									<i>Hapus</i>
								</b-tooltip>
								<b-tooltip
									:target="'edit' + index"
									placement="top"
								>
									<i>Edit</i>
								</b-tooltip>
								<b-tooltip
									:target="'download' + index"
									placement="top"
								>
									<i>Unduh berkas</i>
								</b-tooltip>
							</span>
						</th>
					</tr>
				</tbody>
			</table>
		</span>
		<!-- TABLE CLONE UNTUK EXPORT -->
		<table
			class="table table-striped mt-4"
			id="my-table"
			style="display: none"
		>
			<thead>
				<tr v-if="export_body != null">
					<!-- HEADER -->
					<th scope="col" v-for="head in jurnalHeadExport">
						{{ head }}
					</th>
				</tr>

				<tr v-else>
					<th scope="col" v-for="head in table_data_head">
						{{ head }}
					</th>
				</tr>
			</thead>
			<tbody>
				<!-- DATA DALAM DATABASE -->
				<tr
					v-if="export_body != null"
					v-for="(body, index) in export_body"
				>
					<th
						v-for="item in body"
						v-if="item.type != 'id' && item.type != 'file'"
					>
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
				</tr>

				<tr
					v-if="export_body == null"
					v-for="(body, index) in table_data_body"
				>
					<th
						v-for="item in body"
						v-if="item.type != 'id' && item.type != 'file'"
					>
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
				</tr>
			</tbody>
		</table>
		<!-- TABLE CLONE UNTUK EXPORT -->
		<!-- <button @click="test"></button> -->
		<datalist id="my-list-id">
			<option v-for="nama in nama">{{ nama }}</option>
		</datalist>
	</div>
</template>

<script>
import xlsx from "xlsx";
import jspdf from "jspdf";
import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";

import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");

export default {
	props: [
		"table_data_head",
		"table_data_body",
		"table_content",
		"export_body",
	],
	data() {
		return {
			sucessStatus: false,
			jurnalHeadExport: [
				"Jenis Jurnal",
				"Tahun",
				"Judul",
				"Penulis",
				"Nama Jurnal",
				"ISSN",
				"Volume",
				"Halaman",
				"Nomor",
				"Url",
			],
		};
	},

	methods: {
		downloadPdf() {
			let doc = new jspdf("p", "pt", "a4");
			doc.autoTable({
				html: "#my-table",
				margin: {
					right: 4,
					left: 4,
				},
				styles: {
					fontSize: 9,
				},
				columnStyles: { 9: { cellWidth: 55 } },
			});
			doc.save("Generated.pdf");
		},

		downloadXls() {
			let worksheet = xlsx.utils.table_to_book(
				document.getElementById("my-table")
			);
			xlsx.writeFile(worksheet, "Generated.xls");
		},

		test(value) {
			console.log(value);
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
					setTimeout(() => this.$parent.getData(), 300);
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
body h3 {
	text-align: center;
	font-size: 1.125rem;
	margin: 10px 0 0 0;
	line-height: 1;
}
li {
	white-space: nowrap;
	display: table-cell;
}

table {
	font-size: 0.8125rem;
}

.item {
	font-weight: lighter;
}

.aksi {
	font-weight: normal;
	font-size: 1rem;
}

.icon {
	cursor: pointer;
	margin-right: 5px;
}
.export-tombol {
	font-size: 0.75rem;
}

.nama-jurnal {
	font-size: 0.6875rem;
}
.nama-jurnal hr {
	margin: 6px 0;
}
.item-jurnal {
	white-space: nowrap;
}
</style>
