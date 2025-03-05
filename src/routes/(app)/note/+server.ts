import { prisma } from '$lib/server/db/prisma.js';
import { logAllFormData } from '$lib/utils/logAllFormData';
import { json } from '@sveltejs/kit';

// TODO convert to form action

export async function POST({ locals, request }) {
	console.log('Post Message New Note');
	if (!locals.user) {
		return new Response(null, { status: 204 });
	}
	const userId = locals.user.id;

	const formData = await request.formData();
	logAllFormData(formData);

	const message = formData.get('note');
	const title = formData.get('title');
	const jobID = formData.get('jobID');

	if (!message || typeof message !== 'string') {
		return new Response(null, { status: 204 });
	}
	if (typeof title !== 'string') {
		return new Response(null, { status: 204 });
	}
	if (typeof jobID !== 'string') {
		return new Response(null, { status: 204 });
	}

	const newNote = await prisma.note.create({
		data: {
			title: title || '',
			message: message || '',
			userId,
			jobId: parseInt(jobID) || undefined
		}
	});

	console.log({ newNote });

	return json({ newNote, type: 'success' }, { status: 201 });
}
