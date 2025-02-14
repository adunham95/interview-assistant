import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { logAllFormData } from '$lib/utils/logAllFormData';
import { prisma } from '$lib/server/db/prisma';

export const actions: Actions = {
	create: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}

		const formData = await event.request.formData();
		logAllFormData(formData);

		const title = formData.get('title');
		const company = formData.get('company');
		const url = formData.get('url');
		const status = formData.get('status');
		const jobDescription = formData.get('jobDescription');

		console.log({ title, company, url, jobDescription, status });

		if (!title || typeof title !== 'string') {
			return fail(400, { message: 'Invalid job title' });
		}

		if (typeof company !== 'string') {
			return fail(400, { message: 'Invalid company' });
		}

		if (typeof url !== 'string') {
			return fail(400, { message: 'Invalid job url' });
		}

		if (!status || typeof status !== 'string') {
			return fail(400, { message: 'Invalid job status' });
		}

		if (typeof jobDescription !== 'string') {
			return fail(400, { message: 'Invalid job status' });
		}

		const newJob = await prisma.job.create({
			data: {
				title,
				company: company || null,
				url: url || null,
				status,
				jobDescription: jobDescription || null,
				userId: event.locals.user.id
			}
		});

		console.log({ newJob });

		return true;
	}
};
