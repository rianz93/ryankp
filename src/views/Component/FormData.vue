<template>
	<div>
		<!-- ALERT JIKA DATA GAGAL DI SIMPAN -->
		<span>
			<b-alert
				variant="danger"
				:show="alertStatus"
				dismissible
				@dismissed="dismissAlert()"
			>
				Data Gagal di Simpan!
			</b-alert>

			<!-- ALERT JIKA DATA BERHASIL DI SIMPAN -->
			<b-alert
				variant="success"
				:show="sucessStatus"
				dismissible
				@dismissed="dismissSuccess()"
			>
				Data Berhasil di Simpan!
			</b-alert>
		</span>

		<!-- FORM -->
		<b-form @submit.prevent="onSubmit">
			<span v-for="(data, index) in inputTypes">
				<!-- DATA TAHUN -->
				<b-form-group
					v-if="data.type == 'year'"
					:label-for="data.name + index"
					:label="data.label"
					required
				>
					<b-input
						:id="data.name + index"
						type="text"
						pattern="\d*"
						v-model="formData[data.name]"
						maxlength="4"
						placeholder="YYYY"
					>
					</b-input>
				</b-form-group>

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
						required
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
						required
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
									placeholder="Pilih range tanggal .. s/d .."
									class="bg-white"
									required
									@click="
										togglePopover({
											placement: 'auto-start',
										})
									"
									readonly
								></b-input>
							</div>
						</template>
					</v-date-picker>
				</b-form-group>

				<!-- DATA FILE UPLOAD-->
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
			<b-button variant="success" type="submit" @click="sendDataPost"
				>Submit <b-icon icon="box-arrow-in-up-right"></b-icon>
			</b-button>
			<!-- JIKA INGIN CEK DATA AKTIFKAN INI -->
			<button @click="cetak()" icon="box-arrow-in-up-right">test</button>
		</b-form>
	</div>
</template>

<script>
import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");

export default {
	props: ["inputTypes", "url"],
	data() {
		return {
			formData: {},
			alertStatus: false,
			sucessStatus: false,
		};
	},

	created(){
		console.log(this.inputTypes);
		for(var data in this.inputTypes){
			this.formData[this.inputTypes[data]['name']] = this.inputTypes[data]['value'];
		}
	},

	methods: {
			
	
		// JIKA INGIN CEK DATA AKTIFKAN INI
		cetak() {
			console.log(this.formData);
			console.log(this.inputTypes);
		},

		dismissAlert() {
			this.alertStatus = false;
		},

		dismissSuccess() {
			this.sucessStatus = false;
		},

		// HIRAUKAN INI HANYA UNTUK PAGE TIDAK RELOAD
		onSubmit() {
			this.sendDataPost;
		},

		// CONVERT TANGGAL (STRING) KE FORMAT YYYY-MM-DD
		convertTanggalToString(str) {

			var date = new Date(str),
				mnth = ("0" + (date.getMonth() + 1)).slice(-2),
				day = ("0" + date.getDate()).slice(-2);

			// MASUKKAN KE DALAM ARRAY DAN JOIN LEWAT '-'
			return [date.getFullYear(), mnth, day].join("-");
		},

		// FORMAT TANGGAL SD
		tanggalSampaiDengan(value) {
			console.log(value);
			if (value.start != null) return value.start + " s/d " + value.end;
		},

		// SIMPAN FILE DALAM OBJECT
		onChangeFileSelected(event, modelName) {
			this.formData[modelName] = event.target.files[0];
		},

		// KIRIM DATA
		sendDataPost() {
			let fd = new FormData();
			for (var item in this.formData) {
				// CEK JIKA DATA ADALAH TANGGAL TINGGAL (RANGE)
				if (item == "tanggalTinggal") {
					for (var list in this.formData[item]) {
						// CONVERT TANGGAL (STRING) KE FORMAT YYYY-MM-DD
						fd.append(
							"tanggal" + list,
							this.convertTanggalToString(
								this.formData[item][list]
							)
						);
					}
				}

				// JIKA DATA SINGLE ITEM
				else {
					fd.append(item, this.formData[item]);
				}
			}

			axios
				.post(API_ENDPOINT + this.url, fd, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					console.log(response.data);
					if (response.data.status == "berhasil") {
						this.alertStatus = false;
						this.sucessStatus = true;
						// this.formData = {};
					} else {
						this.sucessStatus = false;
						this.alertStatus = true;
					}
				});
		},
	},
};
</script>

<style></style>
