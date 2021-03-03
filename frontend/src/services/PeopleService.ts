import axios from 'axios';
import { Person } from '../types';

const PEOPLE_API_BASE_URL = 'http://localhost:8080/api/v1/people';
const CHECK_CPF_API_BASE_URL = 'http://localhost:8080/api/v1/existCpf';

class PeopleService {
	getPeople = () => {
		return axios.get(PEOPLE_API_BASE_URL);
	};

	getPersonById = (id: Number) => {
		return axios.get(`${PEOPLE_API_BASE_URL}/${id}`);
	};

	createPerson = (person: Person) => {
		return axios.post(PEOPLE_API_BASE_URL, person);
	};

	updatePerson(id: Number, person: Person) {
		return axios.put(`${PEOPLE_API_BASE_URL}/${id}`, person);
	}

	deletePerson = (id: Number) => {
		return axios.delete(`${PEOPLE_API_BASE_URL}/${id}`);
	};

	checkCpfAlreadyRegistered = (cpf: string) => {
		return axios.get(`${CHECK_CPF_API_BASE_URL}/${cpf}`);
	};
}

export default new PeopleService();
