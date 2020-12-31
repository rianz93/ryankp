<template>
	<div>
		<b-jumbotron class="adjust-jumbotron" border-variant="light">
			<template #lead>
				<h3 style="font-weight: normal;">
					{{userData.id == null ? 'Tambah Pengguna':'Ubah Data Pengguna'}}
					<b-icon icon="file-earmark-person"></b-icon>
				</h3>
			</template>
			<hr class="mb-3" />
			<span style="display: flex; float: left;">
				<router-link :to="'/daftar-pengguna'">
					<b-button
						text-variant="white"
						variant="danger"
						style=" font-size: 15px;"
						><b-icon icon="arrow-left" class="mr-1"></b-icon>
						Kembali
					</b-button>
				</router-link>
			</span>
		</b-jumbotron>
		<div>
			<b-form @submit.prevent="sendDataPost">
				<b-form-group
					label="Nama Lengkap :"
					description="Nama lengkap beserta gelar"
				>
					<b-form-input
						title="Nama tidak bisa berisi angka"
						placeholder="Masukkan nama.."
						pattern="[^0-9]*"
						type="text"
						required
						v-model="userData.namaLengkap"
					>
					</b-form-input>
				</b-form-group>
				<div
					class="row p-2 ml-1 mr-1"
					style="border: 1px solid grey; border-radius:5px;"
				>
					<b-alert
						:show="duplicationAlert"
						variant="danger"
						fade
						dismissible
						@dismissed="duplicationAlert = false"
						class="col-12"
						>Maaf Nama Pengguna Telah Digunakan
						<b-icon
							icon="exclamation-circle-fill"
							variant="danger"
						></b-icon
					></b-alert>
					<b-form-group
						class="col"
						label="Nama Pengguna :"
						description="Nama pengguna singkat untuk login"
					>
						<b-form-input
							type="text"
							placeholder="Contoh : res"
							required
							v-model="userData.namaPengguna"
						>
						</b-form-input>
					</b-form-group>
					<b-form-group class="col" label="Kata Sandi :" v-if="userData.id == null">
						<b-form-input
							:type="type ? 'password' : 'text'"
							v-model="userData.password"
							required
						>
						</b-form-input>
						<b-icon
							:icon="type ? 'eye-slash' : 'eye'"
							class="password-eye"
							@click="changeType"
						></b-icon>
					</b-form-group>
					<b-form-group class="col" label="Tingkat Pengguna :">
						<span class="row ml-1">
							<b-form-radio
								required
								class="col-sm-12"
								name="radioTP"
								value="admin"
								v-model="userData.tingkatPengguna"
							>
								<b-badge pill variant="primary" class="py-1">
									admin
								</b-badge>
							</b-form-radio>
							<b-form-radio
								required
								class="col-sm-12"
								name="radioTP"
								value="user"
								v-model="userData.tingkatPengguna"
							>
								<b-badge pill variant="secondary" class="py-1">
									user
								</b-badge>
							</b-form-radio>
						</span>
					</b-form-group>
				</div>
				<b-button type="submit" variant="success" class="mt-3 btn-block"
					>{{userData.id == null ? 'Tambah Pengguna':'Ubah Data Pengguna'}}
					<b-icon icon="box-arrow-in-up-right"></b-icon
				></b-button>
			</b-form>
		</div>
	</div>
</template>
<script>
import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");
export default {
	props:["editData"],
	data() {
		return {
			type: true,
			duplicationAlert:false,
			userData: {
				id:null,
				namaLengkap: "",
				namaPengguna: "",
				password: null,
				tingkatPengguna: "",
			},
		};
	},
	methods: {

		sendDataPost() {
			let fd = new FormData();
			console.log(this.userData);

			for (let item in this.userData) {
				fd.append(item, this.userData[item]);
			}

			axios
				.post(API_ENDPOINT + "/insertUser.php", fd)
				.then((response) => {
					console.log(response.data);
					if (response.data.status == "berhasil") {
						this.$swal(
							"Berhasil",
							"Data berhasil disimpan",
							"success"
						);
						this.userData = [];
						this.duplicationAlert = false;
					} else if (response.data.status == "duplicate") {
						this.duplicationAlert = true;
					}
				})
				.catch((error) => {
					this.$swal(
						"Koneksi Gagal",
						"Mohon periksa koneksi internet anda",
						"error"
					);
				});
		},
		preventAccess(){
			if (this.$parent.userData.priority != "admin") {
				this.$swal(
					"Akses Ditolak",
					"Anda tidak memiliki akses halaman ini",
					"error"
				);
				this.$router.replace("/");
			}
		},
		changeType() {
			this.type = !this.type;
			console.log(this.type);
		},
		preEditData(){
			let app = this;
			if(app.editData){
				app.userData.id				 = app.editData.id;
				app.userData.namaLengkap  	 = app.editData.nama;
				app.userData.namaPengguna 	 = app.editData.nick;
				app.userData.tingkatPengguna = app.editData.priority;
			}
			console.log(app.userData);
		}
	},
	created() {
		this.preventAccess();
		this.preEditData();
	},
};
</script>
<style scoped>
.password-eye {
	cursor: pointer;
}
</style>
