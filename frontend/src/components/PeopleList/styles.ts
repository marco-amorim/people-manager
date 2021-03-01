import styled from 'styled-components';
import { buttonStyles, containerStyles } from '../../assets/styles/utils';

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
	display: flex;
	align-items: center;

	svg {
		margin-left: 5px;
	}
`;

export const NewPersonButtonContainer = styled.div`
	${containerStyles}
`;
