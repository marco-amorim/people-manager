import React, { useEffect, useState } from 'react';
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

	useEffect(() => {
		PeopleService.getPeople().then((res) => {
			setPeople(res.data);
		});
	}, []);

	return (
		<>
			<PageTitle title="People List" />
			<NewPersonButtonContainer>
				<NewPersonButton>New Person</NewPersonButton>
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
