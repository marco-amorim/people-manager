import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PeopleList from '../components/PeopleList';
import PersonView from '../components/PersonView';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={PeopleList} />
			<Route path="/view" exact component={PersonView} />
		</Switch>
	);
};

export default Routes;
