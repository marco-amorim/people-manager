import React from 'react';
import { HeaderButton, HeaderContainer, HeaderTitle } from './styles';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle to="/">
				People<span>Manager</span>
			</HeaderTitle>
			<HeaderButton>Sign in with Google</HeaderButton>
		</HeaderContainer>
	);
};

export default Header;
