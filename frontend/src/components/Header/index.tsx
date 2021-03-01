import React from 'react';
import { HeaderContainer, HeaderLink, HeaderTitle } from './styles';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle to="/">
				People<span>Manager</span>
			</HeaderTitle>
			<HeaderLink to="/">Sign in with Google</HeaderLink>
		</HeaderContainer>
	);
};

export default Header;
