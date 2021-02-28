import React from 'react';
import PageTitle from '../PageTitle';
import PersonForm from '../PersonForm';
import { NewPersonContainer } from './styles';
import { FormikValues } from 'formik';

const NewPerson = () => {
	const handleSubmit = (values: FormikValues) => {
		alert(JSON.stringify(values));
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
