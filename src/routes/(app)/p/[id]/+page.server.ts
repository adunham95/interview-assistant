import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/db/prisma';
import { error } from 'console';
import { logAllFormData } from '$lib/utils/logAllFormData';

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

export const actions: Actions = {
	update: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}

		if (!event.params.id) {
			return fail(401);
		}

		const projectId = parseInt(event.params.id);
		const formData = await event.request.formData();
		logAllFormData(formData);

		const title = formData.get('title');
		const url = formData.get('url');
		const company = formData.get('company');
		const date = formData.get('date');
		const description = formData.get('description');
		const contribution = formData.get('contribution');
		const problem = formData.get('problem');
		const solution = formData.get('solution');

		const projectData = await prisma.project.update({
			where: { id: projectId },
			data: {
				title: String(title) || '',
				date: String(date) || null,
				userId: event.locals.user.id,
				url: String(url) || null,
				company: String(company) || null,
				description: String(description) || null,
				contribution: String(contribution) || null,
				problem: String(problem) || null,
				solution: String(solution) || null
			}
		});

		console.log({ projectData });

		if (projectData) {
			redirect(302, `/p/${projectData.id}`);
		}

		return { projectData };
	},
	delete: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}

		if (!event.params.id) {
			return fail(401);
		}

		const projectId = parseInt(event.params.id);

		const deleted = await prisma.project.delete({ where: { id: projectId } });

		console.log(deleted, 'deleted');

		redirect(302, '/accomplishments');
	}
};
