import React from 'react';
import { ErrorMessage, Field } from 'formik';

interface FormikFieldProps {
	name: string;
	id?: string;
	type?: string;
	required?: boolean;
	component: Function;
	placeholder?: string;
}

const FormikField: React.FC<FormikFieldProps> = ({
	name,
	id,
	type = 'text',
	required = false,
	component,
	placeholder,
}) => {
	return (
		<Field
			required={required}
			as={component}
			autoComplete="off"
			id={id}
			name={name}
			type={type}
			helperText={<ErrorMessage name={name} />}
			placeholder={placeholder}
		/>
	);
};

export default FormikField;
