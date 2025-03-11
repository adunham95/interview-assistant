import { prisma } from '$lib/server/db/prisma';
import { logAllFormData } from '$lib/utils/logAllFormData';
import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}
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

		const newProject = await prisma.project.create({
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

		console.log({ newProject });

		if (newProject) {
			redirect(302, `/p/${newProject.id}`);
		}

		return { newProject };
	}
};
