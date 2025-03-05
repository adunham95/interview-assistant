<script lang="ts">
	const { status }: { status: string } = $props();

	const badgeColor = $derived.by(() => {
		switch (status) {
			case 'interviewing':
			case 'applied':
				return 'badge-warning';
			case 'rejected':
				return 'badge-error';
			case 'accepted':
			case 'offer':
				return 'badge-success';
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
			case 'accepted':
				return 'Accepted';
			case 'offer':
				return 'Offer';
			default:
				return '';
		}
	});
</script>

<span class={`badge ${badgeColor}`}>
	{badgeText}
</span>
