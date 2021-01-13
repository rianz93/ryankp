<template>
	<div>
		<b-jumbotron class="adjust-jumbotron" border-variant="light">
			<template #lead>
				<h3 style="font-weight: normal;">
					Aktivitas Pengguna
					<b-icon icon="person-lines-fill"></b-icon>
				</h3>
			</template>

			<hr class="mb-3" />

			<p style="margin:0;">
				Catatan data penambahan, pengubahan, dan penghapusan pelaporan
			</p>
		</b-jumbotron>
		<div>
			<b-table hover :fields="fields" :items="items"></b-table>
		</div>
	</div>
</template>
<script>
import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");
export default {
	data() {
		return {
			field: [
				"Waktu",
				"Aktivitas",
				"Pelaporan",
				"Pengguna",
				"Keterangan",
			],
			items: [],
		};
	},
	methods: {
		getData() {
			axios.get(API_ENDPOINT + "/activity.php").then((response) => {
				this.items = response.data;
				console.log(response.data);
			}).catch((error) =>{
				console.log("error");
			});
		},
	},
	created() {
		if (this.$parent.userData.priority != "admin") {
			this.$swal(
				"Akses Ditolak",
				"Anda tidak memiliki akses halaman ini",
				"error"
			);
			this.$router.replace("/");
		}
		this.getData();
	},
};
</script>
<style></style>
