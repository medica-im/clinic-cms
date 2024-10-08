<script lang="ts">
	import Ghost from '$lib/Ghost/Ghost.svelte';
	export let data;
</script>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
		<p>...</p>
	</div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container"><Ghost data={data.ghost} /></div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
		<p>...</p>
	</div>
</section>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-8 md:py-10;
	}
	/* Blog Gradient */
	/* prettier-ignore */
	.blog-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}
</style>
