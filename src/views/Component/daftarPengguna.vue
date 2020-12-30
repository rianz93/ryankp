<template>
	<div>
		<table class="table table-striped mt-4">
			<thead>
				<th v-for="head in head">{{ head }}</th>
			</thead>
			<tbody>
				<tr v-for="(data, index) in userList">
					<td>{{ index + 1 }}</td>
					<td>{{ data.nama }}</td>
					<td>{{ data.nick }}</td>
					<td>
						<b-badge
							pill
							style="font-size: 14px;"
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
						<router-link :to="'/tambah-pengguna'"
							><b-icon
								:id="'edit' + index"
								class="icon text-success"
								icon="arrow-up-right-square-fill"
							></b-icon
						></router-link>
						<b-tooltip :target="'edit' + index" placement="top">
							<i>Edit</i>
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
	methods: {
		getUserList() {
			axios
				.get(API_ENDPOINT + "/getUser.php")
				.then((response) => {
					this.userList = response.data.userData;
					console.log(response.data);
				})
				.catch((error) => {});
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
</style>
