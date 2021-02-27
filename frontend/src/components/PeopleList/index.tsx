import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import PeopleService from '../../services/PeopleService';
import { Person } from '../../types';
import PersonCard from '../PersonCard';
import { PeopleListContainer, PersonItem } from './styles';

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
