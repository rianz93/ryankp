<template>
	<div>
		<div>
			<b-jumbotron class="adjust-jumbotron" border-variant="light">
				<template #lead>
					<h3 style="font-weight: normal;">
						Profil Pengguna
						<b-icon icon="file-earmark-person"></b-icon>
					</h3>
				</template>

				<hr class="mb-3" />

				<p style="margin:0;">Kelola akun anda disini</p>
			</b-jumbotron>
		</div>
		<div>
			<b-list-group class="list-font">
				<b-list-group-item class="p-3">
					<div class="title">
						Data diri
					</div>
				</b-list-group-item>
				<b-list-group-item class="p-3"
					><div class="label-data">Nama Lengkap</div>
					<span class="ml-4">{{
						userData.nama
					}}</span></b-list-group-item
				>
				<b-list-group-item class="p-3"
					><div class="label-data">Nama Pengguna</div>
					<span class="ml-4">{{
						userData.nick
					}}</span></b-list-group-item
				>
				<b-list-group-item class="p-3"
					><div class="label-data">Tingkat Pengguna</div>
					<span class="ml-4"
						><b-badge
							class="p-2"
							:variant="
								userData.priority == 'admin'
									? 'primary'
									: 'secondary'
							"
							>{{ userData.priority }}</b-badge
						>
					</span></b-list-group-item
				>
				<b-list-group-item class="p-3">
					<div class="title">
						Ubah Password
						<b-icon
							class="down"
							icon="caret-down"
							variant="danger"
							@click="showUbahPassword = !showUbahPassword"
							:rotate="showUbahPassword ? '' : '-90'"
						></b-icon>
					</div>
				</b-list-group-item>
				<b-list-group-item
					class="p-3 fadeInput"
					v-if="showUbahPassword"
				>
					<b-form @submit.prevent="sendDataPost" inline>
						<b-form-group label="Password Lama">
							<b-form-input
								placeholder="Password lama.."
								type="password"
								v-model="passwordLama"
								required
							></b-form-input>
						</b-form-group>
						<b-form-group class="ml-3" label="Password Baru">
							<b-form-input
								placeholder="Password baru.."
								type="password"
								v-model="passwordBaru"
								required
							></b-form-input>
						</b-form-group>
						<b-form-group>
							<b-button
								variant="danger"
								class="ml-2 button-submit"
								type="submit"
								><b-icon class="mr-1" icon="key-fill"></b-icon
								>Ubah Password</b-button
							>
						</b-form-group>
					</b-form>
				</b-list-group-item>
			</b-list-group>
		</div>
	</div>
</template>
<script>
import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");
const md5 = require("md5");
export default {
	data() {
		return {
			showUbahPassword: false,
			passwordLama: "",
			passwordBaru: "",
			userData: {
				id: "",
				nama: "",
				password: "",
				priority: "",
				nick: "",
			},
		};
	},
	methods: {
		getUserData() {
			this.userData.id = sessionStorage.getItem("id");
			this.userData.nama = sessionStorage.getItem("nama");
			this.userData.nick = sessionStorage.getItem("nick");
			this.userData.priority = sessionStorage.getItem("priority");
			this.userData.password = sessionStorage.getItem("password");
		},
		sendDataPost() {
			this.$swal({
				title: "Apa anda yakin ingin mengubah password",
				text: "Password akan diubah!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Ubah",
				cancelButtonText: "Batal",
				showCloseButton: true,
			}).then((result) => {
				if (result.value) {
					if (md5(this.passwordLama) != this.userData.password) {
						this.$swal(
							"Gagal",
							"Password Lama tidak sesuai",
							"error"
						);
					} else {
						let fd = new FormData();
						fd.append('user_id',this.userData.id);
						fd.append('password',md5(this.passwordBaru));
						console.log(fd)
						axios
							.post(API_ENDPOINT + "/ubahPassword.php", fd)
							.then((response) => {
								console.log(response.data.status)
								if (response.data.status == "berhasil") {
									this.$swal(
										"Berhasil",
										"Password berhasil di ubah",
										"success"
									);
									this.userData.password = md5(this.passwordBaru);
									this.passwordBaru = '';
									this.passwordLama = '';
								}
							}).catch((error)=>{
								this.$swal(
										"Gagal",
										"Mohon periksa koneksi anda!",
										"error"
								);
							});
					}
				}
			});
		},
	},

	mounted() {
		this.getUserData();
	},
};
</script>
<style scoped>
@keyframes showPassword {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.fadeInput {
	animation: 0.5s ease-out 0s 1 showPassword;
}
.list-font {
	font-size: 17px;
}
.label-data {
	width: 300px;
	display: inline-block;
	font-weight: 360;
}
.title {
	font-weight: 600;
}
.button-submit {
	margin-top: 31.8px;
	font-weight: 360;
}
.down{
	cursor: pointer;
}
</style>
