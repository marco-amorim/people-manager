import { PersonAdd } from '@material-ui/icons';
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

	const handleDeletePerson = (personId: Number) => {
		PeopleService.deletePerson(personId)
			.then(() => {
				setPeople(people.filter((person) => person.id !== personId));
			})
			.catch(() => {
				alert(
					'Sorry, we are having trouble trying to delete this Person, try again later.'
				);
			});
	};

	const renderPeopleList = () => {
		return people.map((person, index) => {
			return (
				<PersonItem key={index}>
					<PersonCard person={person} deleteFunction={handleDeletePerson} />
				</PersonItem>
			);
		});
	};

	return (
		<>
			<PageTitle title="People List" />
			<NewPersonButtonContainer>
				<NewPersonButton onClick={handleNewPerson}>
					New Person
					<PersonAdd />
				</NewPersonButton>
			</NewPersonButtonContainer>
			<PeopleListContainer>{renderPeopleList()}</PeopleListContainer>
		</>
	);
};

export default PeopleList;
