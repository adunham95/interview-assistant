<script lang="ts">
	import Accordian from '$lib/components/Accordian.svelte';
	import EditElements from './EditElements.svelte';
	import Resume from './Resume.svelte';

	let tab = $state('resume');

	let profile = $state({
		id: 1,
		name: 'Alex Johnson',
		title: 'Senior Software Engineer',
		email: 'alex.johnson@example.com',
		location: 'San Francisco, CA',
		website: 'alexjohnson.dev',
		linkedin: 'linkedin.com/in/alexjohnson',
		summary:
			'Experienced software engineer with 8+ years of experience specializing in full-stack development. Passionate about creating scalable, efficient solutions and mentoring junior developers.'
	});

	const experience = [
		{
			id: 1,
			company: 'Tech Innovations Inc.',
			position: 'Senior Software Engineer',
			startDate: '01/2020',
			endDate: null,
			location: 'San Francisco, CA',
			description:
				"Lead developer for the company's flagship product, managing a team of 5 engineers."
		},
		{
			id: 2,
			company: 'DataSoft Solutions',
			position: 'Software Engineer',
			startDate: '03/2017',
			endDate: '12/2019',
			location: 'Seattle, WA',
			description: 'Full-stack developer working on enterprise data management solutions.'
		},
		{
			id: 3,
			company: 'StartUp Ventures',
			position: 'Junior Developer',
			startDate: '06/2015',
			endDate: '02/2017',
			location: 'Portland, OR',
			description: 'Worked on front-end development for various client projects.'
		}
	];

	const education = [
		{
			institution: 'University of California, Berkeley',
			degree: 'Master of Science in Computer Science',
			duration: '2013 - 2015',
			description: 'Focused on distributed systems and machine learning.'
		},
		{
			institution: 'Oregon State University',
			degree: 'Bachelor of Science in Computer Science',
			duration: '2009 - 2013',
			description: "Minor in Mathematics. Dean's List for 6 semesters."
		}
	];
</script>

<div class="grid grid-cols-4 px-9 py-3 gap-6">
	<div class="">
		<div class="sticky top-0 space-y-2">
			<!-- <button
				onclick={() => (tab = 'resume')}
				class="btn btn-primary btn-text text-lg w-full text-center sticky top-0"
			>
				Preview Resume
			</button> -->
			<div class="card">
				<div class="card-body p-3">
					<h2 class="font-bold">Elements</h2>
					<p class="text-sm py-2">Manage all the elements of your application</p>
					<Accordian title="Details">
						{#snippet actions()}
							<button onclick={() => alert('Testing')} class="btn btn-success btn-text text-sm p-1"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class=" size-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
									/>
								</svg>
								<span class="sr-only">Edit</span>
							</button>
						{/snippet}
						<div class=" text-sm">
							<p>{profile.name}</p>
						</div>
					</Accordian>
					<Accordian title={`Experience (${experience.length})`}>
						{#snippet actions()}
							<button onclick={() => alert('Testing')} class="btn btn-success btn-text text-sm p-1"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class=" size-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
									/>
								</svg>
								<span class="sr-only">Edit</span>
							</button>
						{/snippet}
						<div class=" text-sm">
							<p>{profile.name}</p>
						</div>
					</Accordian>
					<Accordian title={`Education (${education.length})`}>
						{#snippet actions()}
							<button onclick={() => alert('Testing')} class="btn btn-success btn-text text-sm p-1"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class=" size-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
									/>
								</svg>
								<span class="sr-only">Edit</span>
							</button>
						{/snippet}
						<div class=" text-sm">
							<p>{profile.name}</p>
						</div>
					</Accordian>
				</div>
			</div>
			<!-- <div class="card">
				<div class="card-body p-3">
					<h2 class="font-bold">Resume Versions</h2>
					<p class="text-sm py-2">Manage Different Versions of your resume</p>
					<div class="space-y-2">
						<button class="btn btn-outline btn-primary w-full">General Resume</button>
						<button class="btn btn-text btn-primary w-full">Front End Resume</button>
						<button class="btn btn-success btn-text w-full">New Version</button>
					</div>
				</div>
			</div> -->
			<!-- <div class="card">
			<div class="card-body p-3">
				<h2 class="font-bold">Templates</h2>
				<p class="text-sm py-2">Choose a template for your resume</p>
				<div class="space-y-2">
					<button class="btn btn-text btn-primary w-full">Modern</button>
					<button class="btn btn-outline btn-primary w-full">Professional</button>
					<button class="btn btn-text btn-primary w-full">Classic</button>
				</div>
			</div>
		</div> -->
		</div>
	</div>
	<div class=" col-span-3">
		{#if tab === 'resume'}
			<Resume />
		{:else if tab === 'elements'}
			<EditElements />
		{/if}
	</div>
</div>
