import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import PeopleService from '../../services/PeopleService';
import { Person } from '../../types';
import PersonCard from '../PersonCard';
import {
	NewPersonButton,
	NewPersonButtonContainer,
	PeopleListContainer,
	PersonItem,
} from './styles';

const PeopleList = () => {
	const [people, setPeople] = useState<Person[]>([]);
	const history = useHistory();

	useEffect(() => {
		PeopleService.getPeople().then((res) => {
			setPeople(res.data);
		});
	}, []);

	const handleNewPerson = () => {
		history.push('/person/new');
	};

	return (
		<>
			<PageTitle title="People List" />
			<NewPersonButtonContainer>
				<NewPersonButton onClick={handleNewPerson}>New Person</NewPersonButton>
			</NewPersonButtonContainer>
			<PeopleListContainer>
				{people.map((person, index) => {
					return (
						<PersonItem key={index}>
							<PersonCard person={person} />
						</PersonItem>
					);
				})}
			</PeopleListContainer>
		</>
	);
};

export default PeopleList;