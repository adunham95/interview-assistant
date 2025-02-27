<script>
	import { enhance } from '$app/forms';
	import { TextInput } from 'svelte-input-components';

	const { form } = $props();

	$inspect(form);
</script>

<!-- Header -->
<section>
	<div class="relative">
		<div class="mx-auto max-w-7xl">
			<div class="relative z-10 md:pt-14 lg:w-full lg:max-w-2xl">
				<div class="relative px-6 py-12 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
					<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
						<h1 class="text-pretty text-5xl font-semibold tracking-tight text-content sm:text-7xl">
							Your Personalized Career Hub
						</h1>
						<p class="mt-8 text-pretty text-lg font-medium text-content-2 sm:text-xl/8">
							Your career is unique just like your fingerprint. Career Fingerprint helps you take
							control of your professional journey with powerful tools designed to keep you prepared
							and organized.
						</p>
						<div class="mt-10 flex items-center gap-x-6">
							<a href="#contact" class="btn btn-primary">Get started</a>
							<a href="#about" class="btn btn-text">
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
				src="/images/happy-girl.jpg"
				alt=""
			/>
		</div>
	</div>
</section>

<!-- About -->
<section id="about" class=" bg-surface-2">
	<div class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl sm:text-center">
				<h2 class="text-base/7 font-semibold text-brand">Build. Track. Ace Your Interviews.</h2>
				<p
					class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-content-1 sm:text-balance sm:text-5xl"
				>
					Your Career, Always at Your Fingertips
				</p>
				<p class="mt-6 text-lg/8 text-content-2">
					Use Career Fingerprint to create your unique career fingerprint
				</p>
			</div>
		</div>
		<div class="relative overflow-hidden pt-16">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="relative">
					<img
						src="/images/screenshot-interview.png"
						alt="App screenshot"
						class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
						width="2432"
						height="1442"
					/>
					<span class="absolute z-10 -top-6 right-2 inline opacity-25 text-sm"
						>Work in progress. Final app may look different</span
					>
				</div>
				<div class="relative" aria-hidden="true">
					<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-surface-2 pt-[7%]"></div>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
			<dl
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-content-2 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
			>
				<div class="relative pl-9">
					<dt class="inline font-semibold text-content-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="absolute left-1 top-1 size-5 text-brand"
						>
							<path
								fill-rule="evenodd"
								d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
								clip-rule="evenodd"
							/>
							<path
								d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"
							/>
						</svg>

						Create a Standout Resume
					</dt>
					<dd class="inline">
						Easily build and update your resume to showcase your skills and experience.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold text-content-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="absolute left-1 top-1 size-5 text-brand"
						>
							<path
								fill-rule="evenodd"
								d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
								clip-rule="evenodd"
							/>
						</svg>

						Save & Track Job Accomplishments
					</dt>
					<dd class="inline">
						Store responses to common questions and tailor them for each opportunity.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="inline font-semibold text-content-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="absolute left-1 top-1 size-5 text-brand"
						>
							<path
								fill-rule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
								clip-rule="evenodd"
							/>
						</svg>

						Master Your Interviews
					</dt>
					<dd class="inline">
						Access your resume, job description, and accomplishment notes in one seamless interface.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<!-- Contact -->
<section id="contact" class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div
			class="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32"
		>
			<h2
				class="max-w-xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:flex-auto"
			>
				Want to know when we launch? Sign up for our newsletter.
			</h2>
			<form class="w-full max-w-md" method="post" action="?/emailSignUp" use:enhance>
				<div class="flex flex-col md:flex-row gap-y-1 gap-x-4">
					<TextInput id="email" label="Email Address" hideLabel placeholder="Email Address" />
					<button type="submit" class="btn btn-primary">Notify me</button>
				</div>
				<p class="mt-4 text-sm/6 text-gray-300">
					We care about your data. Read our <a
						href="/privacy-policy"
						class="font-semibold text-white">privacy&nbsp;policy</a
					>.
				</p>
				{#if form?.message}
					{#if form.success}
						<p class=" text-success">{form.message}</p>
					{:else}
						<p class=" text-error">{form.message}</p>
					{/if}
				{/if}
			</form>
		</div>
	</div>
</section>

<footer class="">
	<div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
		<!-- <div class="flex justify-center gap-x-6 md:order-2">
			<a href="#" class="text-gray-600 hover:text-gray-800">
				<span class="sr-only">Facebook</span>
				<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
			<a href="#" class="text-gray-600 hover:text-gray-800">
				<span class="sr-only">Instagram</span>
				<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
			<a href="#" class="text-gray-600 hover:text-gray-800">
				<span class="sr-only">X</span>
				<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
					/>
				</svg>
			</a>
			<a href="#" class="text-gray-600 hover:text-gray-800">
				<span class="sr-only">GitHub</span>
				<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
			<a href="#" class="text-gray-600 hover:text-gray-800">
				<span class="sr-only">YouTube</span>
				<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div> -->
		<p class="mt-8 text-center text-sm/6 text-grayYour Company, Inc-600 md:order-1 md:mt-0">
			&copy; {new Date().getFullYear()} IntervuKit LLC. All rights reserved.
		</p>
	</div>
</footer>
