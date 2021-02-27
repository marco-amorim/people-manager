import React from 'react';
import PageTitle from '../../components/PageTitle';
import PersonCard from '../PersonCard';
import { PeopleListContainer } from './styles';

const PeopleList = () => {
	return (
		<>
			<PageTitle title="People List" />
			<PeopleListContainer>
				<li>
					<PersonCard />
				</li>
			</PeopleListContainer>
		</>
	);
};
export default PeopleList;
