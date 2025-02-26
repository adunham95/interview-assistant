<script lang="ts">
	const { status }: { status: string } = $props();

	const badgeColor = $derived.by(() => {
		switch (status) {
			case 'interviewing':
			case 'applied':
				return 'badge-warning';
			case 'rejected':
				return 'badge-error';
			default:
				return 'badge-info';
		}
	});

	const badgeText = $derived.by(() => {
		switch (status) {
			case 'interviewing':
				return 'Interviewing';
			case 'applied':
				return 'Applied';
			case 'rejected':
				return 'Rejected';
			default:
				return '';
		}
	});
</script>

<span class={`badge ${badgeColor}`}>
	{badgeText}
</span>
