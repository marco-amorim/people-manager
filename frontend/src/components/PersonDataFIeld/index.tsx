import React from 'react';
import { PersonDataFieldContainer } from './styles';

interface PersonDataFieldProps {
	title: string;
	data: string | Date;
}

const PersonDataField: React.FC<PersonDataFieldProps> = ({ title, data }) => {
	return (
		<PersonDataFieldContainer>
			<b>{title}</b>
			<p>{data}</p>
		</PersonDataFieldContainer>
	);
};

export default PersonDataField;
