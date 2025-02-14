import { prisma } from '$lib/server/db/prisma';
import { logAllFormData } from '$lib/utils/logAllFormData';
import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	newNote: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}
		const formData = await event.request.formData();
		logAllFormData(formData);

		// const message = formData.get('note');
		// const title = formData.get('title');
		// const jobID = formData.get('jobID');

		// const newNote = await prisma.note.create({
		//     data: {
		//         message: String(message) || '',
		//         title: String(title) || null,
		//         userId: event.locals.user.id,
		//         jobId: parseInt(String(jobID)) || null
		//     }
		// });

		// console.log({ newNote });

		return true;
	}
};
