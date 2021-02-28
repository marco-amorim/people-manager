import React from 'react';
import {
	HeaderButton,
	HeaderContainer,
	HeaderLink,
	HeaderTitle,
} from './styles';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle to="/">
				People<span>Manager</span>
			</HeaderTitle>
			<HeaderLink to="/source">Source Code</HeaderLink>
			<HeaderButton>Sign in with Google</HeaderButton>
		</HeaderContainer>
	);
};

export default Header;
