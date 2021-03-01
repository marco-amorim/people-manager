import React from 'react';
import PageTitle from '../PageTitle';
import PersonForm from '../PersonForm';
import { NewPersonContainer } from './styles';
import { FormikValues } from 'formik';
import PeopleService from '../../services/PeopleService';
import { Person } from '../../types';
import { useHistory } from 'react-router-dom';

const NewPerson = () => {
	const history = useHistory();

	const handleSubmit = (values: FormikValues) => {
		const {
			name,
			birthDate,
			cpf,
			gender,
			email,
			nativeFrom,
			nationality,
		} = values;

		const newPerson: Person = {
			name,
			birthDate,
			cpf,
			gender,
			email,
			nativeFrom,
			nationality,
		};

		PeopleService.createPerson(newPerson)
			.then(() => {
				history.push('/');
			})
			.catch(() => {
				alert(
					'Either this CPF already exists in our database or our servers are down, please try again'
				);
			});
	};

	return (
		<>
			<PageTitle title="New Person" />
			<NewPersonContainer>
				<PersonForm onSubmit={handleSubmit} />
			</NewPersonContainer>
		</>
	);
};

export default NewPerson;
