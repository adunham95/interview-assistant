<script lang="ts">
	import { base } from '$app/paths';
	let expanded = $state('');

	function toggleExpanded(name: string) {
		if (expanded === name) {
			expanded = '';
		} else {
			expanded = name;
		}
	}

	const links = [
		{ name: 'Install', href: '/' },
		{
			name: 'Components',
			id: 'components',
			links: [
				{ name: 'Address', href: '/components/address' },
				{ name: 'Checklist', href: '/components/checklist' },
				{ name: 'Colorlist', href: '/components/colorlist' },
				{ name: 'DateInput', href: '/components/dateinput' },
				{ name: 'Label', href: '/components/label' },
				{ name: 'RadioBox', href: '/components/radiobox' },
				{ name: 'RadioList', href: '/components/radioboxlist' },
				{ name: 'Select', href: '/components/select' },
				{ name: 'TextArea', href: '/components/textarea' },
				{ name: 'TextInput', href: '/components/textinput' },
				{ name: 'Toggle', href: '/components/toggle' }
			]
		}
	];
</script>

<ul role="list" class="-mx-2 space-y-1">
	{#each links as link}
		{#if link.href}
			<li>
				<a
					href={`${base}${link.href}`}
					class="block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50"
				>
					{link.name}
				</a>
			</li>
		{/if}
		{#if link.id}
			<li>
				<div>
					<button
						type="button"
						class="flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 hover:bg-gray-50"
						aria-controls="sub-menu-1"
						aria-expanded="false"
						onclick={() => toggleExpanded(link.id)}
					>
						<!-- Expanded: "rotate-90 text-gray-500", Collapsed: "text-gray-400" -->
						<svg
							class={`size-5 shrink-0 ${link.id === expanded ? 'rotate-90 text-gray-500' : 'text-gray-400'}`}
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
								clip-rule="evenodd"
							></path>
						</svg>
						{link.name}
					</button>
					<!-- Expandable link section, show/hide based on state. -->
					<ul class={`mt-1 px-2 ${link.id === expanded ? 'block' : 'hidden'}`} id="sub-menu-1">
						{#if link.links}
							{#each link.links as sublink}
								<li>
									<a
										href={`${base}${sublink.href}`}
										class="block rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700 hover:bg-gray-50"
									>
										{sublink.name}
									</a>
								</li>
							{/each}
						{/if}
					</ul>
				</div>
			</li>
		{/if}
	{/each}
</ul>
