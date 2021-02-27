import { Route, Switch } from 'react-router-dom';
import PeopleList from '../components/PeopleList';
import PersonView from '../components/PersonView';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={PeopleList} />
			<Route path="/view/:id" exact component={PersonView} />
		</Switch>
	);
};

export default Routes;
