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
								placeholder="Pilih tanggal"
								class="bg-white form-control text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
								@click="
									togglePopover({ placement: 'auto-start' })
								"
								readonly
							></b-input>
						</div>
					</template>
				</v-date-picker>
			</b-form-group>
			<button @click="cetak()">test</button>
		</span>
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
			
			console.log(this.formData.tanggalTinggal.start.getDate());
			console.log(typeof(this.formData.nama))
		},
		tanggalSampaiDengan(value) {
			if (value.start != null) return value.start + " SD " + value.end;
		},
	},
};
</script>
