import React from 'react';
import * as Yup from 'yup';
import { FormikValues, Formik } from 'formik';
import FormikField from './FormikField';

import { SubmitButton, FormikForm } from './styles';

interface PersonFormProps {
	onSubmit: (values: FormikValues) => void;
	initialName?: string;
	initialBirthDate?: string;
	initialCpf?: string;
	initialEmail?: string;
	initialGender?: string;
	initialNativeFrom?: string;
	initianNaturality?: string;
}

const PersonForm: React.FC<PersonFormProps> = ({
	initialBirthDate,
	initialCpf,
	initialName,
	initialEmail,
	initialGender,
	initialNativeFrom,
	initianNaturality,
	onSubmit,
}) => {
	interface FormValues {
		birthDate: string;
		name: string;
		cpf: string;
		email: string;
		gender: string;
		nativeFrom: string;
		naturality: string;
	}

	const initialValues: FormValues = {
		birthDate: initialBirthDate || '',
		name: initialName || '',
		cpf: initialCpf || '',
		email: initialEmail || '',
		gender: initialGender || '',
		nativeFrom: initialNativeFrom || '',
		naturality: initianNaturality || '',
	};

	const PersonValidationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		cpf: Yup.string().required('CPF is required'),
		birthDate: Yup.string().required('Birth Date is required'),
		email: Yup.string().email('Invalid e-mail format'),
	});

	const handleSubmit = (values: FormikValues) => {
		onSubmit(values);
	};

	const renderForm = () => {
		return (
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={PersonValidationSchema}
			>
				{({ dirty, isValid }) => {
					return (
						<FormikForm>
							<FormikField name="name" label="Name" required />
							<FormikField name="cpf" label="CPF" required />
							<FormikField name="birthDate" label="Birth Date" required />
							<FormikField name="email" label="E-mail" />
							<FormikField name="gender" label="Gender" />
							<FormikField name="nativeFrom" label="Native From" />
							<FormikField name="naturality" label="Naturality" />
							<SubmitButton type="submit">Submit</SubmitButton>
						</FormikForm>
					);
				}}
			</Formik>
		);
	};

	return <>{renderForm()}</>;
};

export default PersonForm;
