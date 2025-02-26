import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { prisma } from '$lib/server/db/prisma';
import { error } from 'console';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/login');
	}

	const jobID = parseInt(event.params.id);

	const job = await prisma.job.findFirst({ where: { id: jobID }, include: { notes: true } });
	const projects = await prisma.project.findMany({ where: { userId: event.locals.user.id } });

	if (!job) {
		error(404);
		return { job: {} };
	}

	if (job.userId !== event.locals.user.id) {
		error(404);
		return { job: {} };
	}

	return { job, projects };
};
