import { css } from 'styled-components';

export const buttonStyles = css`
	outline: none;
	border: none;
	border-radius: 5px;
	background-color: var(--purple);
	color: var(--white);
	padding: 10px 20px;
	height: 50px;
	cursor: pointer;
	font-size: 0.97rem;
	font-weight: bold;
	transition: color 0.3s ease-in-out;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: var(--green);
		color: var(--black);
	}
`;
