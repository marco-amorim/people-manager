import styled from 'styled-components';

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
