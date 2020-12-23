<template>
	<div class="container">
			<div class="card">
				<div class="card-header">
					<p><img src="../../assets/logo.png" style="width:100px;" class="mb-2 mt-2" /></p>
					<p>
						Aplikasi Manajemen dan Pelaporan Kegiatan Penelitian dan Pengabdian Dosen
					</p>
				</div>
				<div class="card-body">
					<b-form>
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
									placeholder="Masukkan Password"
									type="password"
									username="passoword"
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
export default {
	data(){
		return{
			username:'',
			passowrd:''
		}
	}
};
</script>

<style scoped> 
.card {
	position: absolute;
	height: 440px;
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
	margin: 0 ;
	font-size: 20px;
	font-weight: bold
	line-
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
	bottom: 10px;
	opacity: 0.6;
}
</style>
