import { prisma } from '$lib/server/db/prisma.js';
import { json } from '@sveltejs/kit';

export async function POST({ locals, request }) {
	if (!locals.user) {
		return new Response(null, { status: 204 });
	}
	const userId = locals.user.id;

	const { title, message } = await request.json();

	// const note = await prisma.note.findFirst({ where: { id: parseInt(params.id) } });
	const note = await prisma.note.create({
		data: {
			title,
			message,
			userId
		}
	});

	console.log({ userId, note });

	// return new Response(null, { status: 204 });
	return json({ note }, { status: 201 });
}
