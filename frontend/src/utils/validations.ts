export const checkIfCpfExists = (strCpf: string) => {
	if (strCpf) {
		strCpf = strCpf.replaceAll('.', '').replaceAll('-', '');
	} else {
		return true;
	}
	let sum;
	let rest;
	sum = 0;

	if (strCpf === '00000000000') return false;

	for (let i = 1; i <= 9; i++)
		sum = sum + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
	rest = (sum * 10) % 11;

	if (rest === 10 || rest === 11) rest = 0;
	if (rest !== parseInt(strCpf.substring(9, 10))) return false;

	sum = 0;
	for (let i = 1; i <= 10; i++)
		sum = sum + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
	rest = (sum * 10) % 11;

	if (rest === 10 || rest === 11) rest = 0;
	if (rest !== parseInt(strCpf.substring(10, 11))) return false;
	return true;
};

export const validateBirthDate = (birthDate: string) => {
	if (birthDate) {
		const birthYear = Number(birthDate.substr(0, 4));

		if (birthYear > 2010) {
			return false;
		} else {
			return true;
		}
	} else {
		return true;
	}
};

export const formatDateIntoString = (date: Date, isCardDate?: boolean) => {
	const twoDigitsDate = 10;

	const formatedMonth =
		date.getUTCMonth() + 1 < twoDigitsDate
			? `0${date.getUTCMonth() + 1}`
			: `${date.getUTCMonth() + 1}`;

	const formatedDay =
		date.getUTCDate() < twoDigitsDate
			? `0${date.getUTCDate()}`
			: `${date.getUTCDate()}`;

	const dateString = `${date.getUTCFullYear()}-${formatedMonth}-${formatedDay}`;
	const dateCardString = `${formatedMonth}/${formatedDay}/${date.getUTCFullYear()}`;

	if (isCardDate) {
		return dateCardString;
	}

	return dateString;
};
