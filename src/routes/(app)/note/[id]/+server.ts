import { prisma } from '$lib/server/db/prisma.js';
import { logAllFormData } from '$lib/utils/logAllFormData';
import { json } from '@sveltejs/kit';

// TODO convert to form action

export async function DELETE({ params, locals }) {
	if (!locals.user) {
		return new Response(null, { status: 204 });
	}
	const userId = locals.user.id;
	// const note = await prisma.note.findFirst({ where: { id: parseInt(params.id) } });
	const deleteNote = await prisma.note.delete({ where: { id: parseInt(params.id) } });

	console.log({ userId, deleteNote });

	return new Response(null, { status: 204 });
}

export async function POST({ params, locals, request }) {
	if (!locals.user) {
		return new Response(null, { status: 204 });
	}

	console.log('update note');

	const formData = await request.formData();
	logAllFormData(formData);

	const message = formData.get('note');
	const title = formData.get('title');

	if (!message || typeof message !== 'string') {
		return new Response(null, { status: 204 });
	}
	if (typeof title !== 'string') {
		return new Response(null, { status: 204 });
	}

	const userId = locals.user.id;
	const note = await prisma.note.update({
		where: { id: parseInt(params.id) },
		data: { title, message }
	});

	console.log({ userId, note });

	return json({ updatedNote: note, type: 'success' }, { status: 201 });
}
