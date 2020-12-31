<template>
	<div>
		<div>
			<b-jumbotron class="adjust-jumbotron" border-variant="light">
				<template #lead>
					<h3 style="font-weight: normal;">
						Manajemen Daftar Pengguna
						<b-icon icon="file-earmark-person"></b-icon>
					</h3>
				</template>

				<hr class="mb-3" />

				<p style="margin:0;">Kelola Data Daftar Pengguna disini</p>
				<span style="display: flex; float: right;">
					<b-input
						class="search-input"
						v-model="filterNama"
						placeholder="Cari Nama Lengkap.."
					></b-input>
					<router-link :to="'/tambah-pengguna'">
						<b-button
							size="sm"
							class="tambah-button"
							text-variant="white"
							variant="success"
							style=" font-size: 15px;"
							>Tambah Pengguna <b-icon icon="plus-circle"></b-icon
						></b-button>
					</router-link>
				</span>
			</b-jumbotron>
		</div>
		<table class="table table-striped mt-4">
			<thead>
				<th v-for="head in head">{{ head }}</th>
			</thead>
			<tbody>
				<tr v-for="(data, index) in filteredNama">
					<td>{{ index + 1 }}</td>
					<td>{{ data.nama }}</td>
					<td>{{ data.nick }}</td>
					<td>
						<b-badge
							pill
							class="py-1 priority-badge"
							:variant="
								data.priority == 'admin'
									? 'primary'
									: 'secondary'
							"
						>
							{{ data.priority }}</b-badge
						>
					</td>
					<td>
						<router-link
							:to="{
								name: 'tambah-pengguna',
								params: {
									editData: userList[index],
								},
							}"
							><b-icon
								:id="'edit' + index"
								variant="success"
								icon="arrow-up-right-square-fill"
							></b-icon
						></router-link>
						<b-icon
							v-if="data.priority != 'admin'"
							:id="'hapus' + index"
							icon="trash-fill"
							variant="danger"
							class="icon-clickable ml-1"
							@click="hapusData(data.id)"
						></b-icon>

						<b-tooltip :target="'edit' + index" placement="top">
							<i>Edit</i>
						</b-tooltip>
						<b-tooltip :target="'hapus' + index" placement="top">
							<i>Hapus</i>
						</b-tooltip>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
const axios = require("axios");
import { API_ENDPOINT } from "../../functions/universal.js";
export default {
	data() {
		return {
			filterNama: "",
			head: [
				"No",
				"Nama Lengkap",
				"Nama Pengguna",
				"Tingkat Pengguna",
				"Aksi",
			],
			userList: [],
		};
	},
	computed: {
		filteredNama() {
			if (this.userList == null) {
				return null;
			} else
				return this.userList.filter((data) => {
					let datas = data.nama
						.toLowerCase()
						.includes(this.filterNama.toLowerCase());

					return datas;
				});
		},
	},
	methods: {
		getUserList() {
			axios
				.get(API_ENDPOINT + "/getUser.php")
				.then((response) => {
					this.userList = response.data.userData;
				})
				.catch((error) => {});
		},
		hapusData(value) {
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
					axios
						.get(
							API_ENDPOINT +
								"/deleteData.php?id=" +
								value +
								"&namaId=user_id&namaTable=user"
						)
						.then((response) => console.log(response.data));
					this.$swal("Sukses", "Data telah terhapus", "success");
					setTimeout(() => this.getUserList(), 300);
				}
			});
		},
	},
	created() {
		this.getUserList();
		if (this.$parent.userData.priority != "admin") {
			this.$swal(
				"Akses Ditolak",
				"Anda tidak memiliki akses halaman ini",
				"error"
			);
			this.$router.replace("/");
		}
	},
};
</script>
<style scoped>
table {
	font-size: 0.875rem;
}
.icon-clickable {
	cursor: pointer;
}
.adjust-jumbotron {
	padding: 1rem, 2rem;
}
.priority-badge {
	font-size: 12px;
	width: 75px;
}
.search-input {
	display: inline-block;
	width: 200px;
	margin-right: 20px;
}
.tambah-button {
	padding: 0.4rem;
}
</style>
