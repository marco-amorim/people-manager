import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import { HeaderContainer, HeaderButton, HeaderTitle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserState } from '../../actions';
import { UserState } from '../../reducers/userReducer';

const Header = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector<UserState, UserState['user']>((state) => state.user);

	const handleLogout = () => {
		AuthService.logout();
		dispatch(changeUserState({ user: false }));
	};

	return (
		<HeaderContainer>
			<HeaderTitle to="/">
				People<span>Manager</span>
			</HeaderTitle>
			{!user ? (
				<HeaderButton onClick={() => history.push('/login')}>
					Sign in
				</HeaderButton>
			) : (
				<HeaderButton onClick={handleLogout}>Sign out</HeaderButton>
			)}
		</HeaderContainer>
	);
};

export default Header;
