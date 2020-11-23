<template>
	<b-form>
		<span v-for="(data, index) in inputTypes">
			<!-- DATA TEXT -->
			<b-form-group
				v-if="data.type == 'text'"
				:label-for="data.name + index"
				:label="data.label"
			>
				<b-input
					:id="data.name + index"
					type="text"
					v-model="formData[data.name]"
				></b-input>
			</b-form-group>

			<!-- DATA SELECT -->
			<b-form-group
				v-if="data.type == 'select'"
				:label-for="data.name + index"
				:label="data.label"
			>
				<b-form-select
					:id="data.name + index"
					v-model="formData[data.name]"
					:options="data.options"
				>
				</b-form-select>
			</b-form-group>

			<!-- DATA PERIODIC .. SAMPAI DENGAN .. -->
			<b-form-group
				v-if="data.type == 'periodic'"
				:label-for="data.name + index"
				:label="data.label"
			>
				<v-date-picker
					:id="data.name + index"
					v-model="formData[data.name]"
					is-range
					mode="date"
				>
					<template v-slot="{ inputValue, togglePopover }">
						<div class="flex items-center">
							<b-input
								:value="tanggalSampaiDengan(inputValue)"
								placeholder="Pilih range tanggal .. SD .."
								class="bg-white"
								@click="
									togglePopover({ placement: 'auto-start' })
								"
								readonly
							></b-input>
						</div>
					</template>
				</v-date-picker>
				<button @click="cetak()">test</button>
			</b-form-group>

			<b-form-group
				v-if="data.type == 'file'"
				:label-for="data.name + index"
				:label="data.label"
			>
				<b-form-file
					:id="data.name + index"
					@change="onChangeFileSelected($event, data.name)"
				>
				</b-form-file>
			</b-form-group>
		</span>
		<b-button variant="success" @click="sendDataPost()">Submit</b-button>
	</b-form>
</template>

<script>
import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");

export default {
	props: ["inputTypes", "url"],
	data() {
		return {
			formData: {},
		};
	},
	methods: {
		cetak() {
			console.log(this.formData);
		},

		// FORMAT TANGGAL SD
		tanggalSampaiDengan(value) {
			if (value.start != null) return value.start + " SD " + value.end;
		},

		// SIMPAN FILE DALAM OBJECT
		onChangeFileSelected(event, modelName) {
			this.formData[modelName] = event.target.files[0];
		},

		// KIRIM DATA
		sendDataPost() {
			let fd = new FormData();
			for (var item in this.formData) {
				fd.append(item, this.formData[item]);
			}

			
			axios
				.post(API_ENDPOINT + this.url, fd, {
					headers:{
						'Content-Type': 'multipart/form-data'
					}
				})
				.then((response) => console.log(response));
		},
	},
};
</script>

<style></style>
