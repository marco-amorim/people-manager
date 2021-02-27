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

interface PersonCardProps {
	fullData?: boolean;
}

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: 345,
		},
	})
);

const PersonCard: React.FC<PersonCardProps> = ({ fullData }) => {
	const classes = useStyles();
	const history = useHistory();

	const handleViewPerson = () => {
		history.push(`/view`);
	};

	return (
		<Card className={classes.root}>
			<CardHeader title="Marco Antonio Amorim Filho" />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					<PersonDataField title="CPF:" data="075.039.859-09" />
					<PersonDataField title="Birth Date:" data="20/09/1995" />

					{fullData && (
						<PersonDataField title="Birth Date:" data="20/09/1995" />
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
