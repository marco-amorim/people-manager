import React from 'react';
import * as Yup from 'yup';
import { FormikValues, Formik } from 'formik';
import FormikField from './FormikField';

import { SubmitButton, FormikForm, FormField } from './styles';

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
		name: Yup.string()
			.required('Name is required')
			.test('alphabets', 'Numbers are not allowed in here', (value) => {
				return /^[A-Za-z]+$/.test(value!);
			}),
		cpf: Yup.string()
			.length(14, 'CPF is incomplete')
			.required('CPF is required'),
		birthDate: Yup.string()
			.required('Birth Date is required')
			.length(10, 'Invalid date format'),
		email: Yup.string().email('Invalid e-mail format'),
		nativeFrom: Yup.string().test(
			'alphabets',
			'Numbers are not allowed in here',
			(value) => {
				return /^[A-Za-z]+$/.test(value!);
			}
		),
		naturality: Yup.string().test(
			'alphabets',
			'Numbers are not allowed in here',
			(value) => {
				return /^[A-Za-z]+$/.test(value!);
			}
		),
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
				{() => {
					return (
						<FormikForm>
							<FormField>
								<label htmlFor="name">Name: *</label>
								<FormikField id="name" name="name" required />
							</FormField>

							<FormField>
								<label htmlFor="cpf">CPF: *</label>
								<FormikField id="cpf" name="cpf" required />
							</FormField>

							<FormField>
								<label htmlFor="birthDate">Birth Date: *</label>
								<FormikField
									id="birthDate"
									name="birthDate"
									type="date"
									required
								/>
							</FormField>

							<FormField>
								<label htmlFor="email">E-mail:</label>
								<FormikField id="email" name="email" />
							</FormField>

							<FormField>
								<label htmlFor="gender">Gender:</label>
								<FormikField id="gender" name="gender" type="select" />
							</FormField>

							<FormField>
								<label htmlFor="nativeFrom">Native From:</label>
								<FormikField id="nativeFrom" name="nativeFrom" />
							</FormField>

							<FormField>
								<label htmlFor="naturality">Naturality:</label>
								<FormikField id="naturality" name="naturality" />
							</FormField>

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
