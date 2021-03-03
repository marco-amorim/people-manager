import { TextField } from '@material-ui/core';
import { Formik, FormikValues } from 'formik';
import React, { useState } from 'react';
import FormikField from '../FormikField';
import PageTitle from '../PageTitle';
import * as Yup from 'yup';
import {
	InvalidCredentials,
	LoginFormButton,
	LoginFormContainer,
	LoginFormField,
} from './styles';
import AuthService from '../../services/AuthService';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserState } from '../../actions';
import { UserState } from '../../reducers/userReducer';

interface FormValues {
	username: string;
	password: string;
}

const LoginForm = () => {
	const history = useHistory();
	const [lognFailed, setLoginFailed] = useState<boolean>();
	const user = useSelector<UserState, UserState['user']>((state) => state.user);
	const dispatch = useDispatch();

	const initialValues: FormValues = {
		username: '',
		password: '',
	};

	const LoginValidationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		password: Yup.string().required('Password is required'),
	});

	const handleLogin = (values: FormikValues) => {
		const { username, password } = values;

		AuthService.executeBasicAuthenticationService(username, password)
			.then(() => {
				AuthService.registerSuccessfulLogin(username, password);
				dispatch(changeUserState({ user: true }));
				history.push('/');
			})
			.catch(() => {
				setLoginFailed(true);
			});
	};

	return (
		<>
			{!user ? (
				<>
					<PageTitle title="Enter your credentials" />
					<Formik
						initialValues={initialValues}
						onSubmit={handleLogin}
						validationSchema={LoginValidationSchema}
					>
						<LoginFormContainer>
							<LoginFormField>
								<label htmlFor="username">Username: *</label>
								<FormikField
									component={TextField}
									id="username"
									name="username"
									placeholder="admin"
									required
								/>
							</LoginFormField>

							<LoginFormField>
								<label htmlFor="password">Password: *</label>
								<FormikField
									component={TextField}
									id="password"
									name="password"
									placeholder="admin"
									required
									type="password"
								/>
							</LoginFormField>
							<LoginFormButton type="submit">Login</LoginFormButton>
							{lognFailed && (
								<InvalidCredentials>
									Invalid credentials, use admin / admin
								</InvalidCredentials>
							)}
						</LoginFormContainer>
					</Formik>
				</>
			) : (
				<PageTitle title="You are already signed in" />
			)}
		</>
	);
};

export default LoginForm;
