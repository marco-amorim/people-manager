import { Route } from 'react-router-dom';
import EditPerson from '../components/EditPerson';
import LoginForm from '../components/LoginForm';
import NewPerson from '../components/NewPerson';
import PeopleList from '../components/PeopleList';
import PersonView from '../components/PersonView';
import { useSelector } from 'react-redux';
import { UserState } from '../reducers/userReducer';

const Routes = () => {
	const user = useSelector<UserState, UserState['user']>((state) => state.user);

	return (
		<>
			{user && (
				<>
					<Route path="/" exact component={PeopleList} />
					<Route path="/person/view/:id" exact component={PersonView} />
					<Route path="/person/edit/:id" exact component={EditPerson} />
					<Route path="/person/new" exact component={NewPerson} />
				</>
			)}
			<Route path="/login" exact component={LoginForm} />
		</>
	);
};

export default Routes;
