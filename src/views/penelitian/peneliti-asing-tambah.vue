<template>
	<div>
		<h3>Pengaturan Akun</h3>

		<!-- nama pengguna -->
	  	<p class="mt-3 mb-1">Nama</p>
	  	<b-form-input placeholder= "Edit Nama">
	  	</b-form-input> 

	  	<!-- id pengguna -->
	  	<p class="mt-3 mb-1">ID</p>
	  	<b-form-input placeholder= "Edit ID">
	  	</b-form-input> 

	  	<!-- password -->
	  	<b-form @submit.stop.prevent>
    		<p class="mt-3 mb-1" for="text-password">Password</p>
    		<b-input type="password" aria-describedby="password-help-block"></b-input>
    		
	    	<b-form-text> Password harus berisi 8-20 panjang karakter
		    </b-form-text>
   		</b-form>

	</div>
</template>

