import React from 'react';
import PageTitle from '../PageTitle';
import PersonCard from '../PersonCard';
import { PersonViewContainer } from './styles';

const PersonView = () => {
	return (
		<>
			<PageTitle title="Person Data" />
			<PersonViewContainer>
				<PersonCard fullData={true} />
			</PersonViewContainer>
		</>
	);
};

export default PersonView;
