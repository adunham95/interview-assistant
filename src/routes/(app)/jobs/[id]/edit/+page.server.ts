import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/db/prisma';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/login');
	}

	const jobID = parseInt(event.params.id);

	const job = await prisma.job.findFirst({ where: { id: jobID } });

	if (!job) {
		error(404);
	}

	if (job.userId !== event.locals.user.id) {
		return;
	}

	return { job };
};
