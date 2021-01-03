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
				<b-button @click="test">test</b-button>
			</b-jumbotron>
		</div>
		
	</div>
</template>
<script>
import {API_ENDPOINT} from "../../functions/universal.js";
const axios = require('axios');
export default{
	data(){
		return{
			userData:{
				id:'',
				nama:'',
				priority:'',
			},
		}
	},
	methods:{
		test(){
			console.log(this.$parent);
		},
		getUserData(){
			this.userData.id		= sessionStorage.getItem("id");
			this.userData.nama 		= sessionStorage.getItem("nama");
			this.userData.nick 		= sessionStorage.getItem("nick");
			this.userData.priority 	= sessionStorage.getItem("priority");
		}
	},
	mounted(){
		this.getUserData();
	}
}
</script>
<style scoped>
	
</style>