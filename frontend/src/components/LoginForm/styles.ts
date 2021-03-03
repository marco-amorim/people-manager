import { Button } from '@material-ui/core';
import { Form } from 'formik';
import styled from 'styled-components';
import { buttonStyles, containerStyles } from '../../assets/styles/utils';

export const LoginFormContainer = styled(Form)`
	${containerStyles}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LoginFormField = styled.div`
	display: flex;
	flex-direction: column;

	:not(:last-child) {
		margin-bottom: 10px;
	}
`;

export const LoginFormButton = styled(Button)`
	&& {
		${buttonStyles}
		margin-top: 30px;
	}
`;

export const InvalidCredentials = styled.div`
	margin-top: 30px;
`;
