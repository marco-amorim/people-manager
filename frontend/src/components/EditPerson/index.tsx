import { FormikValues } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PeopleService from '../../services/PeopleService';
import { Person } from '../../types';
import PageTitle from '../PageTitle';
import PersonForm from '../PersonForm';
import { EditPersonContainer } from './styles';

interface Params {
	id: string;
}

const EditPerson = () => {
	const { id } = useParams<Params>();
	const personId = Number(id);
	const [person, setPerson] = useState<Person>();
	const history = useHistory();

	useEffect(() => {
		PeopleService.getPersonById(personId).then((res) => {
			setPerson(res.data);
		});
	}, [personId]);

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

		PeopleService.updatePerson(personId, newPerson)
			.then(() => {
				history.push('/');
			})
			.catch(() => {
				alert(
					'Either this CPF already exists in our database or our servers are down, please try again'
				);
			});
	};

	const renderForm = () => {
		if (person) {
			const date = new Date(person.birthDate);
			const formatedMonth =
				date.getUTCMonth() + 1 < 10
					? `0${date.getUTCMonth() + 1}`
					: `${date.getUTCMonth() + 1}`;

			const formatedDay =
				date.getUTCDate() < 10
					? `0${date.getUTCDate()}`
					: `${date.getUTCDate()}`;

			const formatedBirthDate = `${date.getUTCFullYear()}-${formatedMonth}-${formatedDay}`;

			return (
				<PersonForm
					onSubmit={handleSubmit}
					initialBirthDate={formatedBirthDate}
					initialCpf={person.cpf}
					initialEmail={person.email}
					initialGender={person.gender}
					initialName={person.name}
					initialNationality={person.nationality}
					initialNativeFrom={person.nativeFrom}
				/>
			);
		}

		return null;
	};

	return (
		<>
			<PageTitle title="Edit Person" />
			<EditPersonContainer>{renderForm()}</EditPersonContainer>
		</>
	);
};

export default EditPerson;
