import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/db/prisma';
import type { Actions } from '@sveltejs/kit';
import { logAllFormData } from '$lib/utils/logAllFormData';
import { fail } from '@sveltejs/kit';

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
	update: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}

		if (!event.params.id) {
			return fail(401);
		}

		const jobId = parseInt(event.params.id);

		const formData = await event.request.formData();
		logAllFormData(formData);

		const title = formData.get('title');
		const company = formData.get('company');
		const url = formData.get('url');
		const status = formData.get('status');
		const jobDescription = formData.get('jobDescription');

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

		const newJob = await prisma.job.update({
			where: { id: jobId },
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

		redirect(302, `/jobs/${newJob.id}`);
	}
};
