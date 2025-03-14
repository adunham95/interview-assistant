import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/db/prisma';
import { logAllFormData } from '$lib/utils/logAllFormData';

const statusOrder = {
	applied: 1,
	interviewing: 2,
	offer: 3,
	accepted: 4,
	rejected: 5
};

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/login');
	}

	const jobs = await prisma.job.findMany({ where: { userId: event.locals.user.id } });

	const sortedJobs = jobs.sort((a, b) => {
		return (
			(statusOrder[a.status as keyof typeof statusOrder] || 99) -
			(statusOrder[b.status as keyof typeof statusOrder] || 99)
		);
	});

	return { jobs: sortedJobs };
};

export const actions: Actions = {
	newNote: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}
		const formData = await event.request.formData();
		logAllFormData(formData);

		const message = formData.get('note');

		if (typeof message !== 'string') {
			return '';
		}

		const newJob = await prisma.note.create({
			data: {
				message: message || '',
				userId: event.locals.user.id
			}
		});

		console.log({ newJob });

		return true;
	}
};
