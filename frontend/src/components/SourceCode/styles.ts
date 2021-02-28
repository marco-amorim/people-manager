import styled from 'styled-components';
import { buttonStyles } from '../../assets/styles/button';

export const SourceCodeButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
`;

export const SourceCodeButton = styled.a`
	${buttonStyles}
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 20px;

	svg {
		margin-left: 10px;
	}
`;
