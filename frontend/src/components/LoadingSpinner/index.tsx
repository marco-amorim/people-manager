import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { LoadingContainer } from './styles';

interface LoadingSpinnerProps {
	width: string;
	height: string;
	color: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
	width,
	height,
	color,
}) => {
	return (
		<LoadingContainer>
			<CircularProgress
				style={{
					color: color,
					textAlign: 'center',
					width: width,
					height: height,
				}}
			/>
		</LoadingContainer>
	);
};

export default LoadingSpinner;
