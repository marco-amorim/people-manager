import { Action } from '../actions';
import AuthService from '../services/AuthService';

export interface UserState {
	user: boolean;
}

const initialState = {
	user: AuthService.isUserLoggedIn(),
};

export const userReducer = (
	state: UserState = initialState,
	action: Action
) => {
	switch (action.type) {
		case 'CHANGE_USER_STATE':
			return action.payload;

		default:
			return state;
	}
};
