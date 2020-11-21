<template>
	<div>
		<table class="table table-striped mt-4">
			<thead>
				<tr>
					<!-- HEADER -->
					<th scope="col" v-for="head in table_data_head">
						{{ head }}
					</th>
					<th scope="col">Aksi</th>
				</tr>
			</thead>
			<tbody>
				<!-- DATA DALAM DATABASE -->
				<tr v-for="body in table_data_body">
					<th v-for="item in body" v-if="item.type != 'id'">
						<!-- JIKA DATA ARRAY -->
						<span v-if="Array.isArray(item.title)">
							<span v-for="item_data in item.title" class="item">
								{{ item_data }}
							</span>
						</span>
						<!-- JIKA DATA BUKAN ARRAY -->
						<span v-else class="item">{{
							numberWithCommas(item.title, item.type)
						}}</span>
					</th>
					<th>
						<span class="aksi">
							<b-icon
								class="icon text-success"
								icon="arrow-up-right-square-fill"
							></b-icon>
							<b-icon
								class="icon text-primary"
								icon="archive-fill"
							></b-icon>
						</span>
					</th>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: ["table_data_head", "table_data_body"],
	data() {
		return {};
	},
	methods: {
		// UBAH INT MENJADI RUPIAH
		numberWithCommas(title, type) {
			if (type != "int") {
				return title;
			} else {
				return (
					"Rp. " +
					title.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
				);
			}
		},
		test(){
			
		}
	},
};
</script>

<style scoped>
.item {
	font-weight: normal;
}

.aksi {
	font-weight: normal;
	font-size: 20px;
}

.icon {
	cursor: pointer;
	margin-right: 5px;
}
</style>
