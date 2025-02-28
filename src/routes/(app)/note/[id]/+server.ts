import { prisma } from '$lib/server/db/prisma.js';

export async function DELETE({ params, locals }) {
	if (!locals.user) {
		return new Response(null, { status: 204 });
	}
	const userId = locals.user.id;
	const note = await prisma.note.findFirst({ where: { id: parseInt(params.id) } });

	console.log({ userId, note });

	return new Response(null, { status: 204 });
}

export async function PATCH({ params, locals, request }) {
	if (!locals.user) {
		return new Response(null, { status: 204 });
	}

	const { title, message } = await request.json();

	const userId = locals.user.id;
	const note = await prisma.note.update({
		where: { id: parseInt(params.id) },
		data: { title, message }
	});

	console.log({ userId, note });

	return new Response(null, { status: 204 });
}
