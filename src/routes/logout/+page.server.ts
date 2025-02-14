import { fail, redirect, type Actions } from '@sveltejs/kit';
import * as auth from '$lib/server/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session) {
		return redirect(302, '/');
	}
	await auth.invalidateSession(event.locals.session.id);
	auth.deleteSessionTokenCookie(event);

	return redirect(302, '/');
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/');
	}
};
