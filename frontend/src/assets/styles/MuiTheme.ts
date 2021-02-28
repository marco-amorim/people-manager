import { createMuiTheme } from '@material-ui/core';

export const MuiTheme = createMuiTheme({
	overrides: {
		MuiInputBase: {
			input: {
				color: 'var(--black)',
				fontFamily: 'Nunito Sans',
			},
		},

		MuiFormHelperText: {
			root: {
				color: 'var(--error)',
				fontFamily: 'Nunito Sans',
			},
		},

		MuiInput: {
			underline: {
				'&:after': {
					borderBottom: '2px solid var(--purple)',
				},
			},
		},
		MuiFormLabel: {
			root: {
				fontFamily: 'Nunito Sans',
				'&$focused': {
					color: 'var(--purple)',
				},
			},
		},
	},
});
