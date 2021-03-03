import { UserState } from '../reducers/userReducer';

export type Action = { type: 'CHANGE_USER_STATE'; payload: UserState };

export const changeUserState = (user: UserState): Action => ({
	type: 'CHANGE_USER_STATE',
	payload: user,
});
