<template>
	<b-form >

		<!-- data TEXT -->
		<b-form-group 
			v-for="(data, index) in inputTypes"
			v-if="data.type=='text'"
			:label-for="data.name+index"
			:label="data.label"
		>

			<b-input
			:id="data.name+index" 
			type="text"
			v-model="formData[data.name]"
			></b-input>
		</b-form-group>
			<button @click="cetak()">	</button>
	</b-form>

</template>

<script>
import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");

export default {
	props: ['inputTypes','url'],
	data() {
		return {
			formData:{},
		}
	},
	methods:{
		cetak(){
			console.log(this.formData);
		}
	}
};
</script>
