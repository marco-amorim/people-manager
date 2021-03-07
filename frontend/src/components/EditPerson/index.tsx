import { FormikValues } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PeopleService from '../../services/PeopleService';
import { Person } from '../../types';
import { formatDateIntoString } from '../../utils/validations';
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

	const handleSubmit = (
		values: FormikValues,
		setFieldError: (field: string, message: string | undefined) => void
	) => {
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

		if (cpf !== person?.cpf) {
			PeopleService.checkCpfAlreadyRegistered(cpf).then((res) => {
				if (res.data) {
					setFieldError('cpf', 'This CPF already exists in our database');
				}
			});
		}

		PeopleService.updatePerson(personId, newPerson).then(() => {
			history.push('/');
		});
	};

	const renderForm = () => {
		if (!person) {
			return null;
		}

		const birthDate = new Date(person.birthDate);
		const formatedBirthDate = formatDateIntoString(birthDate);

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
	};

	return (
		<>
			<PageTitle title="Edit Person" />
			<EditPersonContainer>{renderForm()}</EditPersonContainer>
		</>
	);
};

export default EditPerson;
