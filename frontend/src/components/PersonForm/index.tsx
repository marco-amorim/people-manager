import React from 'react';
import * as Yup from 'yup';
import { FormikValues, Formik, Field } from 'formik';
import FormikField from '../FormikField';

import { FormButton, FormikForm, FormField, FormActions } from './styles';
import { useHistory } from 'react-router-dom';
import { FormControl, MenuItem, TextField } from '@material-ui/core';
import { Select } from 'formik-material-ui';
import { checkIfCpfExists, validateBirthDate } from '../../utils/validations';

interface PersonFormProps {
	onSubmit: (values: FormikValues) => void;
	initialName?: string;
	initialBirthDate?: string;
	initialCpf?: string;
	initialEmail?: string;
	initialGender?: string;
	initialNativeFrom?: string;
	initialNationality?: string;
}
interface FormValues {
	birthDate: string;
	name: string;
	cpf: string;
	email: string;
	gender: string | undefined;
	nativeFrom: string;
	nationality: string;
}

const PersonForm: React.FC<PersonFormProps> = ({
	initialBirthDate,
	initialCpf,
	initialName,
	initialEmail,
	initialGender,
	initialNativeFrom,
	initialNationality,
	onSubmit,
}) => {
	const history = useHistory();

	const initialValues: FormValues = {
		birthDate: initialBirthDate || '',
		name: initialName || '',
		cpf: initialCpf || '',
		email: initialEmail || '',
		gender: initialGender || undefined,
		nativeFrom: initialNativeFrom || '',
		nationality: initialNationality || '',
	};

	const PersonValidationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Name is required')
			.test('alphabets', 'Numbers are not allowed in here', (value) => {
				return /^[A-Za-z ]+$/.test(value!);
			}),

		cpf: Yup.string()
			.required('CPF is required')
			.test(
				'cpf',
				'Invalid CPF, please follow the pattern: 000.000.000-00',
				(value) => {
					return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value!);
				}
			)
			.test('cpf', 'This CPF does not exist', (value) => {
				return checkIfCpfExists(value!);
			}),

		birthDate: Yup.string()
			.length(10, 'Invalid date format')
			.required('Birth Date is required')
			.test(
				'birthdate',
				'Invalid birth date, the person needs to be born in 2010 or before',
				(value) => {
					return validateBirthDate(value!);
				}
			),

		email: Yup.string().email('Invalid e-mail format'),

		nativeFrom: Yup.string().test(
			'alphabets',
			'Numbers are not allowed in here',
			(value) => {
				return /^[A-Za-z ]+$/.test(value!);
			}
		),

		nationality: Yup.string().test(
			'alphabets',
			'Numbers are not allowed in here',
			(value) => {
				return /^[A-Za-z ]+$/.test(value!);
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
				enableReinitialize={true}
			>
				{() => {
					return (
						<FormikForm>
							<FormField>
								<label htmlFor="name">Name: *</label>
								<FormikField
									component={TextField}
									id="name"
									name="name"
									placeholder="Type your Name"
									required
								/>
							</FormField>

							<FormField>
								<label htmlFor="cpf">CPF: *</label>
								<FormikField
									component={TextField}
									id="cpf"
									name="cpf"
									placeholder="Type your CPF"
									required
								/>
							</FormField>

							<FormField>
								<label htmlFor="birthDate">Birth Date: *</label>
								<FormikField
									id="birthDate"
									name="birthDate"
									component={TextField}
									type="date"
									required
								/>
							</FormField>

							<FormField>
								<label htmlFor="email">E-mail:</label>
								<FormikField
									component={TextField}
									id="email"
									name="email"
									placeholder="Type your E-mail"
								/>
							</FormField>

							<FormField>
								<FormControl>
									<label htmlFor="gender">Gender:</label>
									<Field
										component={Select}
										name="gender"
										id="gender"
										displayEmpty
									>
										<MenuItem value={undefined} selected disabled>
											Choose your gender
										</MenuItem>
										<MenuItem value="MALE">Male</MenuItem>
										<MenuItem value="FEMALE">Female</MenuItem>
									</Field>
								</FormControl>
							</FormField>

							<FormField>
								<label htmlFor="nativeFrom">Native From:</label>
								<FormikField
									component={TextField}
									id="nativeFrom"
									name="nativeFrom"
									placeholder="Type your Naturality"
								/>
							</FormField>

							<FormField>
								<label htmlFor="nationality">Nationality:</label>
								<FormikField
									component={TextField}
									id="nationality"
									name="nationality"
									placeholder="Type your Nationality"
								/>
							</FormField>

							<FormActions>
								<FormButton type="submit">Submit</FormButton>
								<FormButton onClick={() => history.push('/')}>
									Cancel
								</FormButton>
							</FormActions>
						</FormikForm>
					);
				}}
			</Formik>
		);
	};

	return <>{renderForm()}</>;
};

export default PersonForm;
