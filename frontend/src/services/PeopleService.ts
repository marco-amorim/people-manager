import axios from 'axios';

const PEOPLE_API_BASE_URL = 'http://localhost:8080/api/v1/people';

class PeopleService {
	getPeople = () => {
		return axios.get(PEOPLE_API_BASE_URL);
	};

	getPersonById = (id: Number) => {
		return axios.get(`${PEOPLE_API_BASE_URL}/${id}`);
	};

	deletePerson = (id: Number) => {
		return axios.delete(`${PEOPLE_API_BASE_URL}/${id}`);
	};
}

export default new PeopleService();
