<template>
	<div>
		<b-jumbotron
			header="LPPM UKDLSM "
			lead="Aplikasi Manajemen Pelaporan Penelitian & PkM"
		>
			<hr />
			<p>
				Selamat datang di aplikasi Manajemen Pelaporan penelitian & PkM
			</p>
		</b-jumbotron>
		<div>
			<b-input-group size="md" class="mb-3">
				<b-input-group-prepend is-text>
					<b-icon icon="calendar2-date" size="sm"></b-icon>
				</b-input-group-prepend>
				<b-form-select type="search" v-model="tahun">
					<option :value="''">Pilih Tahun..</option>
					<option v-for="index in 12" :value="2009 + index">
						{{ 2009 + index }}
					</option>
				</b-form-select>
			</b-input-group>
			<div class="penelitian mb-3">
				<h4 class="head-penelitian mb-3">
					<b-icon icon="journal-text"></b-icon> Rekap Pelaporan
					Penelitian {{ tahun }}
				</h4>
				<b-card-group deck>
					<b-card
						:title="penelitiAsing.title"
						header-tag="header"
						footer-tag="footer"
						v-if="isAdmin"
					>
						<b-card-text>{{ penelitiAsing.text }}</b-card-text>
						<b-button
							:href="penelitiAsing.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ penelitiAsing.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						:title="publikasiJurnal.title"
						header-tag="header"
						footer-tag="footer"
					>
						<b-card-text>{{ publikasiJurnal.text }}</b-card-text>
						<b-button
							:href="publikasiJurnal.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ publikasiJurnal.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						:title="hibahDitlitabmas.title"
						header-tag="header"
						footer-tag="footer"
					>
						<b-card-text>{{ hibahDitlitabmas.text }}</b-card-text>
						<b-button
							variant="outline-success"
							size="sm"
							:href="hibahDitlitabmas.href"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ hibahDitlitabmas.total }}</b-badge
							>
						</template>
					</b-card>
				</b-card-group>

				<b-card-group deck class="mt-4">
					<b-card
						:title="penyelenggaraanForum.title"
						header-tag="header"
						footer-tag="footer"
						v-if="isAdmin"
					>
						<b-card-text>{{
							penyelenggaraanForum.text
						}}</b-card-text>
						<b-button
							:href="penyelenggaraanForum.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ penyelenggaraanForum.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						:title="bukuAjar.title"
						header-tag="header"
						footer-tag="footer"
					>
						<b-card-text>{{ bukuAjar.text }}</b-card-text>
						<b-button
							:href="bukuAjar.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ bukuAjar.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						:title="hibahNonditlitabmas.title"
						header-tag="header"
						footer-tag="footer"
					>
						<b-card-text>{{
							hibahNonditlitabmas.text
						}}</b-card-text>
						<b-button
							:href="hibahNonditlitabmas.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ hibahNonditlitabmas.total }}</b-badge
							>
						</template>
					</b-card>
				</b-card-group>

				<b-card-group deck class="mt-4">
					<b-card
						:title="hki.title"
						header-tag="header"
						footer-tag="footer"
					>
						<b-card-text>{{ hki.text }}</b-card-text>
						<b-button
							:href="hki.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ hki.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						:title="unitBisnisHr.title"
						header-tag="header"
						footer-tag="footer"
						v-if="isAdmin"
					>
						<b-card-text>{{ unitBisnisHr.text }}</b-card-text>
						<b-button
							v-if="isAdmin"
							variant="outline-success"
							size="sm"
							:href="unitBisnisHr.href"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ unitBisnisHr.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card border-variant="white"> </b-card>
				</b-card-group>
			</div>
			<div class="penelitian mb-5">
				<h4 class="head-penelitian mb-3">
					<b-icon icon="journal-text"></b-icon> Rekap Pelaporan PKM
					{{ tahun }}
				</h4>
				<b-card-group deck>
					<b-card
						:title="unitUsahaKampus.title"
						header-tag="header"
						footer-tag="footer"
						v-if="isAdmin"
					>
						<b-card-text>{{ unitUsahaKampus.text }}</b-card-text>
						<b-button
							:href="unitUsahaKampus.href"
							variant="outline-success"
							size="sm"
							
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ unitUsahaKampus.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						:title="publikasiJurnalPkm.title"
						header-tag="header"
						footer-tag="footer"
					>
						<b-card-text>{{ publikasiJurnalPkm.text }}</b-card-text>
						<b-button
							:href="publikasiJurnalPkm.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ publikasiJurnalPkm.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						:title="publikasiMedia.title"
						header-tag="header"
						footer-tag="footer"
					>
						<b-card-text>{{ publikasiMedia.text }}</b-card-text>
						<b-button
							variant="outline-success"
							size="sm"
							:href="publikasiMedia.href"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ publikasiMedia.total }}</b-badge
							>
						</template>
					</b-card>
				</b-card-group>

				<b-card-group deck class="mt-4">
					<b-card
						:title="produkTerstandarisasi.title"
						header-tag="header"
						footer-tag="footer"
						v-if="isAdmin"
					>
						<b-card-text>{{
							produkTerstandarisasi.text
						}}</b-card-text>
						<b-button
							:href="produkTerstandarisasi.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ produkTerstandarisasi.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						v-if="isAdmin"
						:title="produkTersertifikasi.title"
						header-tag="header"
						footer-tag="footer"
					>
						<b-card-text>{{
							produkTersertifikasi.text
						}}</b-card-text>
						<b-button
							:href="produkTersertifikasi.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ produkTersertifikasi.total }}</b-badge
							>
						</template>
					</b-card>

					<b-card
						:title="mitraBerbadanHukum.title"
						header-tag="header"
						footer-tag="footer"
						v-if="isAdmin"
					>
						<b-card-text>{{ mitraBerbadanHukum.text }}</b-card-text>
						<b-button
							:href="mitraBerbadanHukum.href"
							variant="outline-success"
							size="sm"
							>Lihat Pelaporan</b-button
						>
						<template #footer>
							<b-badge variant="danger" class="p-2 adjust-badge">
								<b-icon icon="journal-text"></b-icon>
								{{ mitraBerbadanHukum.total }}</b-badge
							>
						</template>
					</b-card>
				</b-card-group>
			</div>
		</div>
	</div>
</template>
<script>
import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");
export default {
	methods: {
		getDashboard() {
			let tahun = this.tahun;
			let isAdmin = sessionStorage.getItem("priority");
			let user_id =
				isAdmin != "admin" ? sessionStorage.getItem("id") : "";
			axios
				.get(
					API_ENDPOINT +
						"/getDashboard.php?tahun=" +
						tahun +
						"&user_id=" +
						user_id
				)
				.then((response) => {
					this.penelitiAsing.total = response.data.peneliti_asing;
					this.publikasiJurnal.total = response.data.publikasi_jurnal;
					this.hibahDitlitabmas.total =
						response.data.hibah_ditlitabmas;
					this.hibahNonditlitabmas.total =
						response.data.hibah_nonditlitabmas;
					this.bukuAjar.total = response.data.buku_ajar;
					this.penyelenggaraanForum.total =
						response.data.penyelenggaraan_forum;
					this.hki.total = response.data.hki;
					this.unitBisnisHr.total = response.data.unit_bisnis_hr;
					this.produkTerstandarisasi.total =
						response.data.produk_terstandarisasi;
					this.produkTersertifikasi.total =
						response.data.produk_tersertifikasi;
					this.publikasiJurnalPkm.total = response.data.pkm_jurnal;
					this.publikasiMedia.total = response.data.publikasi_media;
					this.unitUsahaKampus.total = response.data.pkm_uhk;
					this.mitraBerbadanHukum.total = response.data.pkm_mbh;

					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},

	watch: {
		tahun() {
			this.getDashboard();
		},
	},

	created() {
		this.getDashboard();
		this.isAdmin =
			sessionStorage.getItem("priority") == "admin" ? true : false;
	},

	data() {
		return {
			isAdmin: "",
			tahun: "",
			penelitiAsing: {
				total: 0,
				href: "#/penelitian-lihat/peneliti-asing",
				title: "Peneliti Asing",
				text: "Kelola data peneliti asing",
			},

			publikasiJurnal: {
				total: 0,
				href: "#/penelitian-lihat/publikasi-jurnal",
				title: "Publikasi Jurnal",
				text: "Kelola data publikasi jurnal",
			},

			hibahDitlitabmas: {
				total: 0,
				href: "#/penelitian-lihat/hibah-ditlitabmas",
				title: "Hibah Ditlitabmas",
				text: "Kelola data hibah ditlitabmas",
			},

			penyelenggaraanForum: {
				total: 0,
				href: "#/penelitian-lihat/penyelenggaraan-forum",
				title: "Penyelenggaraan Forum Lokakarya/Seminar",
				text: "Kelola data penyelenggaraan forum lokakarya/seminar",
			},

			hibahNonditlitabmas: {
				total: 0,
				href: "#/penelitian-lihat/hibah-nonditlitabmas",
				title: "Hibah Non Ditlitabmas",
				text: "Kelola data hibah non ditlitabmas",
			},

			bukuAjar: {
				total: 0,
				href: "#/penelitian-lihat/buku-ajar",
				title: "Buku Ajar",
				text: "Kelola data buku ajar",
			},

			hki: {
				total: 0,
				href: "#/penelitian-lihat/hki",
				title: "Hak Kekayaan Intelektual/HKI",
				text: "Kelola data hak kekayaan intelektual/hki",
			},

			unitBisnisHr: {
				total: 0,
				href: "#/penelitian-lihat/unit-bhr",
				title: "Unit Bisnis Hasil Riset",
				text: "Kelola data unit bisnis hasil riset",
			},

			publikasiJurnalPkm: {
				total: 0,
				href: "#/pkm-lihat/publikasi-jurnal",
				title: "Publikasi Jurnal (PKM)",
				text: "Kelola data publikasi jurnal",
			},

			unitUsahaKampus: {
				total: 0,
				href: "#/pkm-lihat/unit-usaha",
				title: "Unit Usaha Kampus",
				text: "Kelola data unit usaha kampus",
			},

			publikasiMedia: {
				total: 0,
				href: "#/pkm-lihat/publikasi-media-massa",
				title: "Publikasi Media Massa",
				text: "Kelola data publikasi media massa",
			},

			produkTerstandarisasi: {
				total: 0,
				href: "#/pkm-lihat/produk-terstandarisasi",
				title: "Produk Terstandarisasi",
				text: "Kelola data produk terstandarisasi",
			},

			produkTersertifikasi: {
				total: 0,
				href: "#/pkm-lihat/produk-tersertifikasi",
				title: "Produk Tersertifikasi",
				text: "Kelola data produk tersertifikasi",
			},

			mitraBerbadanHukum: {
				total: 0,
				href: "#/pkm-lihat/mbh",
				title: "Mitra Berbadan Hukum",
				text: "Kelola data mitra berbadan hukum",
			},
		};
	},
};
</script>
<style scoped>
.adjust-badge {
	float: right;
	font-size: 14px;
}
.penelitian {
	border: 0.5px solid #e8eae6;
	border-radius: 10px;
	padding: 10px;
}

.penelitian .head-penelitian {
	text-align: center;
}
</style>
