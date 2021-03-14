import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthService {
	executeJwtAuthenticationService(username: string, password: string) {
		return axios.post(`${API_URL}/authenticate`, {
			username,
			password,
		});
	}

	registerSuccessfulLoginForJwt(username: string, token: string) {
		sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);

		this.setupAxiosInterceptors(this.createJWTToken(token));
	}

	createJWTToken(token: string) {
		return 'Bearer ' + token;
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
				config.headers.Authorization = token;
			}
			return config;
		});
	}
}

export default new AuthService();
