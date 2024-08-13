<script lang="ts">
	import Ghost from '$lib/Ghost/Ghost.svelte';

	const testData = {
		posts: [
			{
				title: 'Mission: retrouve ton cap',
				custom_excerpt: 'Prévention du surpoids et de l’obésité infantile.',
				feature_image:
					'https://saint-esprit-sante.fr/blog/content/images/2024/07/obesite-infantile-1024x914.jpg',
				published_at: '2024-07-17T18:30:55.000+02:00',
				url: 'https://saint-esprit-sante.fr/blog/mission-retrouve-ton-cap/',
				feature_image_alt:
					"Un enfant pointe une fourchette vers l'objectif de l'appareil photo en faisant un clin d'œil."
			},
			{
				title: 'Les printemps de la cancérologie',
				custom_excerpt:
					"Vendredi 24 mai 2024, au Connecteur à Biarritz: journée d'information gratuite autour du cancer.",
				feature_image:
					'https://saint-esprit-sante.fr/blog/content/images/2024/04/printemps-cancerologie-24-05-2024-1.jpg',
				published_at: '2024-04-22T05:23:27.000+02:00',
				url: 'https://saint-esprit-sante.fr/blog/les-printemps-de-la-cancerologie/',
				feature_image_alt: null
			}
		],
		meta: { pagination: { page: 1, limit: 6, pages: 1, total: 2, next: null, prev: null } }
	};
</script>
<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
        <p>...</p>
    </div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container"><Ghost data={testData} /></div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
        <p>...</p>
    </div>
</section>

<style lang="postcss">
	.section-container {
		@apply mx-auto flex w-full max-w-7xl items-center justify-center p-4 py-8;
	}
	/* Blog Gradient */
	/* prettier-ignore */
	.blog-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}
</style>