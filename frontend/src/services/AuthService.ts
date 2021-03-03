import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthService {
	executeBasicAuthenticationService(username: string, password: string) {
		return axios.get(`${API_URL}/auth`, {
			headers: { authorization: this.createBasicAuthToken(username, password) },
		});
	}

	createBasicAuthToken(username: string, password: string) {
		return 'Basic ' + window.btoa(username + ':' + password);
	}

	registerSuccessfulLogin(username: string, password: string) {
		sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
		this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
	}

	logout() {
		sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
	}

	isUserLoggedIn() {
		let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
		if (user === null) return false;
		return true;
	}

	setupAxiosInterceptors(token: string) {
		axios.interceptors.request.use((config) => {
			if (this.isUserLoggedIn()) {
				config.headers.authorization = token;
			}
			return config;
		});
	}
}

export default new AuthService();
