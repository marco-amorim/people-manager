import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PeopleList from '../components/PeopleList';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={PeopleList} />
		</Switch>
	);
};

export default Routes;
