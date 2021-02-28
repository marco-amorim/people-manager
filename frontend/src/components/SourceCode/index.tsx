import { GitHub } from '@material-ui/icons';
import React from 'react';
import PageTitle from '../PageTitle';
import { SourceCodeButton, SourceCodeButtonContainer } from './styles';

const SourceCode = () => {
	return (
		<>
			<PageTitle title="Check the source code in the button below :)" />
			<SourceCodeButtonContainer>
				<SourceCodeButton
					href="https://github.com/marco-amorim/people-manager"
					target="_blank"
					rel="noopener noreferrer"
				>
					Source Code
					<GitHub />
				</SourceCodeButton>
			</SourceCodeButtonContainer>
		</>
	);
};

export default SourceCode;
