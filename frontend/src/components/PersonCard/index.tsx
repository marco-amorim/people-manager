import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Actions } from './styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			maxWidth: 345,
		},
	})
);

const PersonCard = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader title="Marco Amorim" subheader="Born in 20/09/1995" />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
			<Actions disableSpacing>
				<Button variant="contained">View</Button>
				<Button variant="contained" color="primary">
					Edit
				</Button>
				<Button variant="contained" color="secondary">
					Delete
				</Button>
			</Actions>
		</Card>
	);
};

export default PersonCard;
