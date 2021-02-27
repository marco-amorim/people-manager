import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 25px 0px;

	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

export const HeaderTitle = styled(Link)`
	font-size: 2rem;
	font-weight: bold;
	color: var(--purple);

	span {
		font-weight: 100;
		color: var(--black);
	}
`;

export const HeaderButton = styled.button`
	outline: none;
	border: none;
	border-radius: 4px;
	background-color: var(--purple);
	color: var(--white);
	padding: 10px 20px;
	max-width: 185px;
	height: 50px;
	position: absolute;
	right: 0;
	cursor: pointer;
	font-size: 1rem;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
	transition: color 0.3s ease-in-out;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: var(--green);
		color: var(--black);
	}

	@media (max-width: 767px) {
		position: unset;
		margin-top: 25px;
	}
`;
