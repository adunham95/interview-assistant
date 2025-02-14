import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/db/prisma';
import { logAllFormData } from '$lib/utils/logAllFormData';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/login');
	}

	const jobID = parseInt(event.params.id);

	const job = await prisma.job.findFirst({ where: { id: jobID }, include: { notes: true } });

	if (!job) {
		error(404);
	}

	if (job.userId !== event.locals.user.id) {
		return;
	}

	return { job };
};

export const actions: Actions = {
	newNote: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}
		const formData = await event.request.formData();
		logAllFormData(formData);

		const message = formData.get('note');
		const title = formData.get('title');
		const jobID = formData.get('jobID');

		const newNote = await prisma.note.create({
			data: {
				message: String(message) || '',
				title: String(title) || null,
				userId: event.locals.user.id,
				jobId: parseInt(String(jobID)) || null
			}
		});

		console.log({ newNote });

		return true;
	}
};
