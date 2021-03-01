import { Route, Switch } from 'react-router-dom';
import EditPerson from '../components/EditPerson';
import NewPerson from '../components/NewPerson';
import PeopleList from '../components/PeopleList';
import PersonView from '../components/PersonView';
import SourceCode from '../components/SourceCode';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={PeopleList} />
			<Route path="/source" exact component={SourceCode} />
			<Route path="/person/view/:id" exact component={PersonView} />
			<Route path="/person/edit/:id" exact component={EditPerson} />
			<Route path="/person/new" exact component={NewPerson} />
		</Switch>
	);
};

export default Routes;
