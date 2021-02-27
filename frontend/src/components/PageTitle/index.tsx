import React from 'react';
import { TitleContainer, Title } from './styles';

interface PageTitleProps {
	title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
	return (
		<TitleContainer>
			<Title>{title}</Title>
		</TitleContainer>
	);
};

export default PageTitle;
