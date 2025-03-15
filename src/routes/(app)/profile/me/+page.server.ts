import { logAllFormData } from '$lib/utils/logAllFormData';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { prisma } from '$lib/server/db/prisma';

export const actions: Actions = {
	profile: async (event) => {
		if (!event.locals.user) {
			return fail(401);
		}

		if (!event.locals.user.userProfileId) {
			const newUserProfile = await prisma.userProfile.create({ data: {} });
			const newUserDetails = await prisma.user.update({
				where: { id: event.locals.user.id },
				data: { userProfileId: newUserProfile.id }
			});
			event.locals.user = newUserDetails;
		}

		if (!event.locals.user.userProfileId) {
			return fail(401);
		}

		const formData = await event.request.formData();

		logAllFormData(formData);

		const currentTitle = formData.get('currentTitle');
		const website = formData.get('website');
		const linkedin = formData.get('linkedin');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const location = formData.get('location');

		const newUserProfileDetails = await prisma.userProfile.update({
			where: { id: event.locals.user.userProfileId },
			data: {
				currentTitle: String(currentTitle),
				website: String(website),
				linkedIn: String(linkedin),
				email: String(email),
				phoneNumber: String(phone),
				location: String(location)
			}
		});

		return { profile: newUserProfileDetails };
	}
};
