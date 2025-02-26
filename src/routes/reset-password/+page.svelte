<script>
	import { enhance } from '$app/forms';
	import { TextInput } from 'svelte-input-components';
</script>

<div class="flex justify-center items-center h-screen w-screen">
	<div>
		<h1 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-content">
			Reset Password
		</h1>
		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form method="post" action="/" use:enhance class="grid grid-cols-2 gap-3">
				<TextInput class="col-span-2" label="Email" id="username" />
				<TextInput class="col-span-2" label="Password" id="password" />
				<div class="flex justify-end col-span-2">
					<button class="btn btn-primary" formaction="?/register">Reset Password</button>
				</div>
			</form>
		</div>
	</div>
</div>
