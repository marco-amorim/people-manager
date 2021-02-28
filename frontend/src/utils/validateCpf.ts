export const checkIfCpfExists = (strCpf: string) => {
	strCpf = strCpf.replaceAll('.', '').replaceAll('-', '');
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
