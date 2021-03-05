export function isLoggedIn() {
	//We assume that if the local storage has the user token, the user is authenticated
	return JSON.parse(localStorage.getItem('userAuth'));
}