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
