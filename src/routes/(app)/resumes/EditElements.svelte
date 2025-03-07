<script lang="ts">
	import DetailsList from '$lib/components/DetailsList.svelte';
	import exp from 'constants';
	import { TextArea, TextInput } from 'svelte-input-components';

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

	let experience = $state([
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
	]);

	$inspect(experience);
</script>

<div class="pt-3 space-y-4">
	<h2 class="text-4xl">Edit Elements</h2>

	<DetailsList
		title="Account Details"
		onSectionEdit={() => null}
		data={[
			{ label: 'Name', value: profile.name || '' },
			{ label: 'Title', value: profile.title || '' },
			{ label: 'Location', value: profile.location || '' },
			{ label: 'Personal Website', value: profile.website || '' },
			{ label: 'Linkedin', value: profile.linkedin || '' },
			{ label: 'Email', value: profile.email || '' },
			{ label: 'Summary', value: profile.summary || '' }
		]}
	/>

	<h2 class="text-4xl">Experience</h2>

	{#each experience as exp}
		<DetailsList
			title={`${exp.company} - ${exp.position}`}
			onSectionEdit={() => null}
			data={[
				{ label: 'Company', value: exp.company || '' },
				{ label: 'Position', value: exp.position || '' },
				{ label: 'Location', value: exp.location || '' },
				{ label: 'Description', value: exp.description || '' },
				{ label: 'Duration', value: `${exp.startDate} - ${exp.endDate || 'Present'}` || '' }
			]}
		/>
	{/each}

	<!-- <h3 class="col-span-4 text-2xl">Details</h3>
	<TextInput class="col-span-2" id="name" label="Name" bind:value={profile.name} />
	<TextInput class="col-span-2" id="title" label="Title" bind:value={profile.title} />
	<TextInput class="col-span-2" id="location" label="Location" bind:value={profile.location} />
	<TextInput
		class="col-span-2"
		id="website"
		label="Personal Website"
		bind:value={profile.website}
	/>
	<TextInput class="col-span-2" id="linkedin" label="LinkedIn" bind:value={profile.linkedin} />
	<TextInput class="col-span-2" id="email" label="Email" bind:value={profile.email} />
	<TextArea class="col-span-4" id="summary" label="Summary" bind:value={profile.summary} />

	<h3 class="col-span-4 text-2xl">Experience</h3>
	{#each experience as exp}
		<TextInput
			class="col-span-2"
			id={`${exp.id}-position`}
			label="Position"
			bind:value={exp.position}
		/>
		<TextInput
			class="col-span-2"
			id={`${exp.id}-company`}
			label="Company"
			bind:value={exp.company}
		/>
	{/each} -->
</div>
