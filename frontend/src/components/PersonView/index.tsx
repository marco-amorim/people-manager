import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PeopleService from '../../services/PeopleService';
import { Person } from '../../types';
import PageTitle from '../PageTitle';
import PersonCard from '../PersonCard';
import { PersonViewContainer } from './styles';

interface Params {
	id: string;
}

const PersonView = () => {
	const { id } = useParams<Params>();
	const personId = Number(id);
	const [person, setPerson] = useState<Person>();

	useEffect(() => {
		PeopleService.getPersonById(personId).then((res) => {
			setPerson(res.data);
		});
	}, [personId]);

	return (
		<>
			<PageTitle title="Person Data" />
			<PersonViewContainer>
				{person && <PersonCard fullData={true} person={person} />}
			</PersonViewContainer>
		</>
	);
};

export default PersonView;
