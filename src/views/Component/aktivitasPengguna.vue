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
			items: [
				{
					Waktu: "12",
					Aktivitas: "Menghapus Pelaporan",
					Pelaporan: "Peneliti Asing",
					Pengguna: "Melani Adrian",
					Keterangan: "Nama Peneliti : IOT makan semen",
					_rowVariant: "danger",
				},
				{
					Waktu: "12",
					Aktivitas: "Menghapus Pelaporan",
					Pelaporan: "Peneliti Asing",
					Pengguna: "Melani Adrian",
					Keterangan: "Nama Peneliti : IOT makan semen",
					_rowVariant: "success",
				},
				{
					Waktu: "12",
					Aktivitas: "Menghapus Pelaporan",
					Pelaporan: "Peneliti Asing",
					Pengguna: "Melani Adrian",
					Keterangan: "Nama Peneliti : IOT makan semen",
					_rowVariant: "warning",
				},
			],
		};
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
	},
};
</script>
<style></style>
