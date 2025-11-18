import { getData } from '../../../testData/data';

export function load({ url }) {
	const sortOrder = [];
	const sortDirection = {};
	const queryInfo = { sortOrder, sortDirection };
	console.log(Date.now());
	return { ...getData(), queryInfo };
}

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
	}
};
