import styled from 'styled-components';
import { buttonStyles } from '../../assets/styles/button';

export const PeopleListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 75px 0px;
	list-style: none;
`;

export const PersonItem = styled.li`
	:not(:last-child) {
		margin-bottom: 20px;
	}
`;

export const NewPersonButton = styled.button`
	${buttonStyles}
	max-width: 150px;
`;

export const NewPersonButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
`;