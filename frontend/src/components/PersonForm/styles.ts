import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Form } from 'formik';
import { buttonStyles } from '../../assets/styles/button';

export const FormikForm = styled(Form)`
	margin: 3rem 0;
	display: flex;
	flex-direction: column;
	width: 50%;

	@media (max-width: 767px) {
		width: 80%;
	}
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;

	:not(:last-child) {
		margin-bottom: 10px;
	}
`;

export const SubmitButton = styled(Button)`
	&& {
		${buttonStyles}
		margin: 40px auto 0px auto;
	}
`;
