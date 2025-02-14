<script lang="ts">
	import { enhance } from '$app/forms';
	import { TextInput } from 'svelte-input-components';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	let type: 'login' | 'register' = $state('login');
</script>

<div class="flex justify-center items-center h-screen w-screen">
	<div>
		<h1 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-content">
			{#if type === 'login'}
				Login
			{:else if type === 'register'}
				Register
			{/if}
		</h1>
		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form method="post" action="?/login" use:enhance class="grid grid-cols-2 gap-3">
				{#if type === 'register'}
					<TextInput class="col-span-1" label="First Name" id="firstName" />
					<TextInput class="col-span-1" label="Last Name" id="lastName" />
				{/if}
				<TextInput class="col-span-2" label="Email" id="username" />
				<TextInput class="col-span-2" label="Password" id="password" />
				<div class="flex justify-between col-span-2">
					{#if type === 'login'}
						<button
							type="button"
							onclick={() => (type = 'register')}
							class="btn btn-primary btn-text">Create Account</button
						>
						<button class="btn btn-primary">Login</button>
					{/if}
					{#if type === 'register'}
						<button type="button" onclick={() => (type = 'login')} class="btn btn-primary btn-text"
							>Login</button
						>
						<button class="btn btn-primary" formaction="?/register">Register</button>
					{/if}
				</div>
			</form>
		</div>
	</div>
</div>
<p style="color: red">{form?.message ?? ''}</p>
