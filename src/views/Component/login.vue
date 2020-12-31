<template>
	<div class="container">
			<div class="card">
				<div class="card-header">
					<p><img src="../../assets/logo.png" style="width:150px;" class="mb-2 mt-2" /></p>
					<p>
						Aplikasi Manajemen dan Pelaporan Kegiatan Penelitian dan Pengabdian Dosen
					</p>
				</div>
				<div class="card-body">
					<b-form @submit.prevent="sendLoginData">
						<b-form-group>
							<b-input-group>
								<b-input-group-prepend is-text>
							      	<b-icon icon="person-circle" variant="primary"></b-icon>
							    </b-input-group-prepend>
								<b-form-input 
									placeholder="Masukkan Nama Pengguna" 
									type="text"
									v-model="username"
								>
								</b-form-input>
							</b-input-group>
						</b-form-group>
						<b-form-group>
							<b-input-group>
								<b-input-group-prepend is-text>
							      	<b-icon icon="key-fill" variant="danger"></b-icon>
							    </b-input-group-prepend>
								<b-form-input
									placeholder="Masukkan Kata Sandi"
									type="password"
									v-model="password"
								>
								</b-form-input>
							</b-input-group>
						</b-form-group>
						<b-button type="submit" class="btn-block mt-4" variant="success">Masuk</b-button>
					</b-form>
					<p class="Copyright">Copyright &copy; 2020 17013047</p>
				</div>
			</div>
		</div>
</template>

<script>
import {API_ENDPOINT} from '../../functions/universal.js';
let md5 = require('md5');
const axios = require('axios');
export default {
	data(){
		return{
			username:'',
			password:'',
		}
	},
	created(){
		this.preventLoginBug();
	},
	methods: {
		preventLoginBug(){
			if(this.$parent.loginStatus){
				this.$router.replace("/");
			}
		},

		sendLoginData(){
			let fd = new FormData();
			fd.append("username", this.username);
			fd.append("password", md5(this.password));
			axios
			.post(API_ENDPOINT + "/login.php", fd)
			.then((response) => {
				if(response.data.status == "berhasil"){
					this.$swal("Berhasil Login", "Selamat Datang "+response.data.nama,"success");
					sessionStorage.setItem("id", 	   response.data.id);
					sessionStorage.setItem("nama", 	   response.data.nama);
					sessionStorage.setItem("nick", 	   response.data.nick);
					sessionStorage.setItem("priority", response.data.priority);
					this.$router.replace("/");
					this.$parent.loginStatus = true;
				}else{
					console.log(response.data);
					this.$swal("Login Gagal", "Nama pengguna atau kata sandi tidak sesuai", "error");
				}
				
			}).catch((error) =>{
				this.$swal("Login Gagal", "Mohon periksa koneksi internet anda", "error");
			})
			
		},
	}
};
</script>

<style scoped> 
.card {
	position: absolute;
	height: 500px;
	margin-top: auto;
	margin-bottom: auto;
	width: 500px;
	color: white;
	text-align: center;
	left: 50%;
	margin-left: -50px;
	transform: translateX(-50%);
	padding-bottom: 0;

}
.card p{
	margin: 0;
	margin-bottom: 8px;
	font-size: 22px;
	font-weight: normal;
}
.card-header{
	background-color: #28A745;
	background-image: url("../../assets/bglogin.png");
}
.card-body{
	background-color: rgba(40,167,69,0.1);
}
.card .Copyright{
	left: 50%;
	transform: translateX(-50%);
	font-size: 14px;
	color: black;
	position: absolute;
	bottom: 4px;
	opacity: 0.6;
}
</style>
