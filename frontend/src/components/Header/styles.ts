import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { buttonStyles } from '../../assets/styles/button';

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

export const HeaderLink = styled(Link)`
	${buttonStyles}
	position: absolute;
	padding: 0px 20px;
	right: 0;

	@media (max-width: 767px) {
		position: unset;
		margin-top: 25px;
	}
`;
