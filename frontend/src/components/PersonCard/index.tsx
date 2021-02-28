import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Actions } from './styles';
import { useHistory } from 'react-router-dom';
import PersonDataField from '../PersonDataFIeld';
import { Person } from '../../types';

interface PersonCardProps {
	fullData?: boolean;
	person: Person;
}

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: 345,
		},
	})
);

const PersonCard: React.FC<PersonCardProps> = ({ fullData, person }) => {
	const classes = useStyles();
	const history = useHistory();

	const {
		birthDate,
		cpf,
		name,
		email,
		gender,
		nationality,
		nativeFrom,
		id,
	} = person;

	const date = new Date(birthDate);

	const genderFormated = gender === 'MALE' ? 'Male' : 'Female';

	const formatedBirthDate = `${date.getUTCDate()}/${
		date.getUTCMonth() + 1
	}/${date.getUTCFullYear()}`;

	const handleViewPerson = () => {
		history.push(`/person/view/${id}`);
	};

	return (
		<Card className={classes.root}>
			<CardHeader title={name} />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="div">
					<PersonDataField title="CPF:" data={cpf} />
					<PersonDataField title="Birth Date:" data={formatedBirthDate} />

					{fullData && (
						<>
							{email && <PersonDataField title="E-mail:" data={email} />}
							{nationality && (
								<PersonDataField title="Nationality:" data={nationality} />
							)}
							{nativeFrom && (
								<PersonDataField title="Native From:" data={nativeFrom} />
							)}
							{gender && (
								<PersonDataField title="Gender:" data={genderFormated} />
							)}
						</>
					)}
				</Typography>
			</CardContent>
			<Actions disableSpacing>
				{fullData ? (
					<Button
						variant="contained"
						color="primary"
						onClick={() => history.push('/')}
					>
						Go Back
					</Button>
				) : (
					<>
						<Button variant="contained" onClick={() => handleViewPerson()}>
							View
						</Button>
						<Button variant="contained" color="primary">
							Edit
						</Button>
						<Button variant="contained" color="secondary">
							Delete
						</Button>
					</>
				)}
			</Actions>
		</Card>
	);
};

export default PersonCard;
