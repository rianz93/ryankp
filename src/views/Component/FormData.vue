<template>
	<div>
		<!-- ALERT JIKA DATA GAGAL DI SIMPAN -->
		<span>
			<b-alert
				variant="danger"
				:show="alertStatus"
				dismissible
				fade
				@dismissed="dismissAlert()"
				ref="alert"
			>
				{{ alertText }}
			</b-alert>

			<!-- ALERT JIKA DATA BERHASIL DI SIMPAN -->
			<b-alert
				variant="success"
				:show="sucessStatus"
				dismissible
				fade
				@dismissed="dismissSuccess()"
			>
				Data Berhasil di Simpan!
			</b-alert>
		</span>

		<!-- FORM -->
		<b-form @submit.prevent="onSubmit" ref="formAny">
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
						placeholder="TTTT"
					>
					</b-input>
				</b-form-group>

				<!-- DATA PENULIS -->
				<div v-if="data.type == 'penulis'" class="mb-3">
					<b-form-group
						:label-for="data.name + index"
						:label="data.label"
						v-for="j in penulisCounter"
						class="fadeInput"
					>
					
						<span style="display: flex">
							<b-input
								:id="data.name + index"
								type="text"
								v-model="formData[data.name][j-1]"
								required
								:placeholder="'Penulis ' + j"
							></b-input>
						</span>
					</b-form-group>
					<b-button
						variant="success"
						class="btn-sm"
						@click="++penulisCounter"
						>Tambah Penulis <b-icon icon="plus-circle"></b-icon
					></b-button>
					<b-button
						variant="danger"
						class="btn-sm ml-2"
						@click="resetPenulis"
						>Reset Penulis
						<b-icon icon="arrow-counterclockwise"></b-icon
					></b-button>
				</div>

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

				<!-- DATA INT -->
				<b-form-group
					v-if="data.type == 'int'"
					:label-for="data.name + index"
					:label="data.label"
				>
					<b-input
						:id="data.name + index"
						type="number"
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

				<!-- DATA CURRENCY -->
				<span v-if="data.type == 'currency'">
					<b-form-group
						:label-for="data.name + index"
						:label="data.label"
					>
						<b-form-input
							:id="data.name + index"
							v-model="formData[data.name]"
							required
							type="number"
							@change="numberWithCommas(formData[data.name])"
							@keyup="numberWithCommas(formData[data.name])"
						>
						</b-form-input>
					</b-form-group>
					<!-- DISABLED INPUT UNTUK MENAMPILKAN RUPIAH -->
					<b-form-group>
						<b-form-input :value="currency" type="text" disabled>
						</b-form-input>
					</b-form-group>
				</span>

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
									placeholder="Pilih jarak tanggal .. s/d .."
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
						ref="file"
						:placeholder="getExt(formData['berkas'])"
						:id="data.name + index"
						@change="onChangeFileSelected($event, data.name)"
					>
					</b-form-file>
					<div class="errorText mt-1">
						<i>{{ errorText }}</i>
					</div>
				</b-form-group>
			</span>
			<b-button
				variant="success"
				type="submit"
				class="mb-4 btn-block"
				@click="sendDataPost"
				>Simpan Data <b-icon icon="box-arrow-in-up-right"></b-icon>
			</b-button>
			<!-- JIKA INGIN CEK DATA AKTIFKAN INI -->
			
		</b-form>
		<b-button @click="cetak()" icon="box-arrow-in-up-right">test</b-button>
	</div>
</template>

<script>
import { API_ENDPOINT } from "../../functions/universal.js";
const axios = require("axios");

export default {
	props: ["inputTypes", "url", "fieldId"],
	data() {
		return {
			formData: {},
			alertStatus: false,
			sucessStatus: false,
			alertText: "Data Gagal di Simpan!",
			errorText: null,
			currency: null,
			penulisCounter: 1,
		};
	},

	created() {
		for (var data in this.inputTypes) {
			this.formData[this.inputTypes[data]["name"]] = this.inputTypes[
				data
			]["value"];
		}
	},

	mounted() {
		if (this.formData["dana"]) {
			this.numberWithCommas(this.formData["dana"]);
		}
	},

	methods: {
		resetPenulis(){
			this.formData['penulis'] = [];
			this.penulisCounter=1;
		},

		resetForm() {
			this.$refs.formAny.reset();
		},

		getExt(value) {
			if (value != null && typeof this.formData["berkas"] == "string") {
				return this.formData["berkas"].split("/").pop();
			} else {
				return "Mohon untuk mengisi berkas..";
			}
		},

		numberWithCommas(value) {
			console.log(value);
			if (value != null)
				this.currency =
					"Rp. " +
					value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		},
		// JIKA INGIN CEK DATA AKTIFKAN INI
		cetak() {
			console.log(this.formData);
			this.formData['jenisJurnal'] = null;
			this.resetForm();
			this.penulisCounter = 1;
		},

		dismissAlert() {
			if (this.alertText === "Mohon untuk melengkapi data!") {
				this.alertText = "Data Gagal di Simpan!";
			}
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
				day  = ("0" + date.getDate()).slice(-2);

			// MASUKKAN KE DALAM ARRAY DAN JOIN LEWAT '-'
			return [date.getFullYear(), mnth, day].join("-");
		},

		// FORMAT TANGGAL SD
		tanggalSampaiDengan(value) {
			if (value.start != null) return value.start + " s/d " + value.end;
		},

		// SIMPAN FILE DALAM OBJECT
		onChangeFileSelected(event, modelName) {
			this.formData[modelName] = event.target.files[0];
			if (event.target.files[0]["name"].split(".").pop() != "pdf") {
				this.formData[modelName] = null;
				this.alertText = "Hanya menerima ekstensi PDF";
				this.alertStatus = true;
				this.errorText = "Mohon untuk memasukkan file berekstensi PDF";
				document.documentElement.scrollTop = 0;

				console.log("DATA TIDAK BENAR");
			} else {
				this.errorText = null;
				this.alertStatus = false;
			}
		},

		// KIRIM DATA
		sendDataPost() {
			let fd = new FormData();
			// MELAKUKAN CEK JIKA ADA FIELD YANG BELUM TERISI

			for (let item in this.formData) {
				if (this.formData[item] == null || this.formData[item] == "") {
					this.alertText = "Mohon untuk melengkapi data!";
					this.alertStatus = true;
					document.documentElement.scrollTop = 0;
					return false;
				} else if (item == "tanggalTinggal") {
					if (
						this.formData[item]["start"] == null ||
						this.formData[item]["end"] == null
					) {
						this.alertText = "Mohon untuk melengkapi data!";
						this.alertStatus = true;
						return false;
						document.documentElement.scrollTop = 0;
					}
				}
			}

			if (this.fieldId != null) fd.append("id", this.fieldId);
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
				else if(item == "penulis"){
					for(let list in this.formData[item]){
						fd.append("penulis"+list,this.formData[item][list]);
					}
					fd.append("totalPenulis", this.formData[item].length);
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
						// SETELAH BERHASIL MEMASUKKAN DATA ALERT DAN RESET FORM
						this.alertStatus = false;
						this.sucessStatus = true;
						this.formData = {};
						if(this.fieldId != null){
							this.fieldId = null;
						}
						

						this.penulisCounter = 1;
						this.resetForm();
						document.documentElement.scrollTop = 0;
					} else {
						this.sucessStatus = false;
						this.alertStatus = true;
						document.documentElement.scrollTop = 0;
					}
				});
		},
	},
};
</script>

<style scoped>
@keyframes slideInFromLeft {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
}

.errorText {
	color: red;
}

.fadeInput{
	 animation: 0.5s ease-out 0s 1 slideInFromLeft;
}


</style>
