import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { prisma } from '$lib/server/db/prisma';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/login');
	}

	const projectId = parseInt(event.params.id);

	const project = await prisma.project.findFirst({ where: { id: projectId } });

	if (!project) {
		return error(404);
	}

	if (project && project.userId !== event.locals.user.id) {
		return error(404);
	}

	return { project };
};
