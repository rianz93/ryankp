export let API_ENDPOINT = "http://127.0.0.1/ryankp";

export function loginStatus() {
	let status = sessionStorage.getItem("id");
	if(status == null) {
		return false;
	} else {
		return true;
	}
}

export function validateLogin(routers){
	if(!loginStatus()){
		routers.replace("/login");
	}
}
