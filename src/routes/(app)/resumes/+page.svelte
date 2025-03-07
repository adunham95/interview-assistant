<script lang="ts">
	import EditElements from './EditElements.svelte';
	import Resume from './Resume.svelte';

	let tab = $state('resume');

	const previewResume = {
		name: 'John Doe',
		contact: {
			address: '123 Main Street, City, State, 12345',
			phone: '(123) 456-7890',
			email: 'johndoe@email.com',
			linkedin: 'linkedin.com/in/johndoe'
		},
		professionalSummary:
			'Results-driven professional with X years of experience in [Industry/Field]. Adept at [Key Skills]. Proven ability to [Notable Achievements]. Passionate about driving success and delivering measurable results.',
		skills: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5'],
		experience: [
			{
				jobTitle: 'Job Title',
				company: 'Company Name',
				location: 'Location',
				startDate: 'MM/YYYY',
				endDate: 'Present',
				currentJob: true,
				responsibilities: [
					'responsibilityOrAchievement1',
					'responsibilityOrAchievement2',
					'responsibilityOrAchievement3'
				]
			},
			{
				jobTitle: 'Job Title',
				company: 'Company Name',
				location: 'Location',
				startDate: 'MM/YYYY',
				endDate: 'MM/YYYY',
				currentJob: false,
				responsibilities: [
					'responsibilityOrAchievement1',
					'responsibilityOrAchievement2',
					'responsibilityOrAchievement3'
				]
			}
		],
		education: {
			degree: 'Degree Earned',
			institution: 'Institution Name',
			location: 'Location',
			graduationYear: 'Graduation Year'
		},
		certifications: [
			{
				name: 'Certification Name',
				organization: 'Issuing Organization',
				year: 'Year'
			},
			{
				name: 'Certification Name',
				organization: 'Issuing Organization',
				year: 'Year'
			}
		],
		projects: [
			{
				name: 'Project Name',
				description: 'Brief Description of the project and impact.'
			}
		],
		additionalInformation: {
			languages: {
				language1: 'Fluent',
				language2: 'Intermediate'
			},
			volunteerWork: {
				organization: 'Organization Name',
				role: 'Role',
				year: 'Year'
			},
			interests: ['hobby1', 'hobby2']
		}
	};

	// const gridTypes = {
	// 	modern: ['a a a', 'b c c', 'b c c']
	// };
</script>

<div class="grid grid-cols-4 px-9 py-3 gap-6">
	<div class="">
		<div class="sticky top-0 space-y-2">
			<button
				onclick={() => (tab = 'resume')}
				class="btn btn-primary btn-text text-lg w-full text-center sticky top-0"
			>
				Preview Resume
			</button>
			<div class="card">
				<div class="card-body p-3">
					<h2 class="font-bold">Elements</h2>
					<p class="text-sm py-2">Manage all the elements of your application</p>
					<button
						onclick={() => (tab = 'elements')}
						class="btn btn-info btn-text w-full justify-start flex">Details</button
					>
					<button
						onclick={() => (tab = 'elements')}
						class="btn btn-info btn-text w-full justify-start flex">Experience</button
					>
					<button
						onclick={() => (tab = 'elements')}
						class="btn btn-info btn-text w-full justify-start flex">Education</button
					>
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
