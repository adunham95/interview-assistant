<script lang="ts">
	import { enhance } from '$app/forms';
	import type { UserProfile } from '@prisma/client';
	import { TextInput } from 'svelte-input-components';
	let error: null | string = $state(null);

	const {
		onSuccess,
		currentTitle = ''
	}: {
		currentTitle?: string | null;
		onSuccess?: (profile: UserProfile) => null;
	} = $props();
</script>

<form
	class="grid grid-cols-1 md:grid-cols-2 gap-4"
	method="post"
	action="/profile/me?/profile"
	use:enhance={({ formElement }) => {
		return async ({ result }) => {
			console.log({ result, type: result.type });
			if (result.type === 'success') {
				formElement.reset();
				if (onSuccess && result?.data?.profile) {
					onSuccess(result.data.profile as UserProfile);
				}
			}
			if (result.type === 'error') {
				error = 'There was an error saving your profile';
			}
		};
	}}
>
	<TextInput label="Current Title" id="currentTitle" value={currentTitle} />
	<TextInput label="Website" id="website" />
	<TextInput label="Linkedin" id="linkedin" />
	<TextInput label="Location" id="location" />
	<TextInput label="Email" id="email" />
	<TextInput label="Phone" id="phone" />
	<p class="text-sm text-error">
		{error}
	</p>
	<button class="btn btn-primary md:col-start-2 block">Save</button>
</form>
