import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { TextField } from '@material-ui/core';

interface FormikFieldProps {
	name: string;
	id?: string;
	type?: string;
	required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({
	name,
	id,
	type = 'text',
	required = false,
}) => {
	return (
		<Field
			required={required}
			as={TextField}
			autoComplete="off"
			id={id}
			name={name}
			type={type}
			helperText={<ErrorMessage name={name} />}
		/>
	);
};

export default FormikField;
