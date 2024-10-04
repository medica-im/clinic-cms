<script lang="ts">
	import Ghost from '$lib/Ghost/Ghost.svelte';
	const testData1 = {
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
			}
		],
		meta: { pagination: { page: 1, limit: 6, pages: 1, total: 1, next: null, prev: null } }
	};
	const testData2 = {
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
	const testData3 = {
		posts: [
			{
				title: 'Atelier autosurveillance mammaire',
				custom_excerpt:
					'🎀 Octobre rose. Surveiller soi-même ses seins: ateliers à Vedène, lundi 7 & mardi 15 octobre 2024.',
				feature_image:
					'https://msp-vedene.fr/blog/content/images/2024/09/illustration-of-a-woman-looking-in-the-mirror.webp',
				published_at: '2024-09-13T15:40:00.000+02:00',
				url: 'https://msp-vedene.fr/blog/atelier-autosurveillance-surveiller-soi-meme-ses-seins/',
				feature_image_alt: 'Femme dévêtue, devant un miroir, observant ses seins.'
			},
			{
				title: "L'activité physique adaptée à Vedène?",
				custom_excerpt:
					"Découvrez l'activité physique adaptée avec l'association KAPA Vedène et la maison de santé!",
				feature_image: 'https://msp-vedene.fr/blog/content/images/2024/07/athletes_nus.png',
				published_at: '2024-07-23T06:25:22.000+02:00',
				url: 'https://msp-vedene.fr/blog/lactivite-physique-adaptee-a-vedene/',
				feature_image_alt: 'Cinq individus masculins pratiquent la course à pied.'
			},
			{
				title: 'Novembre : moi(s) sans tabac',
				custom_excerpt: 'En novembre, on arrête ensemble! 🚭',
				feature_image: 'https://msp-vedene.fr/blog/content/images/2023/11/mst_feature_image.png',
				published_at: '2023-11-08T02:14:33.000+01:00',
				url: 'https://msp-vedene.fr/blog/novembre-2023-mois-sans-tabac/',
				feature_image_alt: "photo d'une personne brisant une cigarette, logo du mois sans tabac"
			},
			{
				title: '🎀 Atelier autopalpation: palper soi-même ses seins',
				custom_excerpt:
					'🎀 Octobre rose. Ateliers autopalpation (palper soi-même ses seins) à Vedène. Jeudi 5 et mardi 17 octobre 2023.',
				feature_image: 'https://msp-vedene.fr/blog/content/images/2023/10/autopalpation.jpg',
				published_at: '2023-10-03T13:00:32.000+02:00',
				url: 'https://msp-vedene.fr/blog/atelier-autopalpation/',
				feature_image_alt: null
			},
			{
				title: '🎀 Exposition photos: projet INVICTUS',
				custom_excerpt:
					'Le Projet INVICTUS est un outil de sensibilisation au dépistage du cancer du sein sous la forme de 27 portraits grandeur nature de femmes atteintes du cancer du sein.',
				feature_image:
					'https://msp-vedene.fr/blog/content/images/2023/09/56c176_b48d23c13bee462bbd010b3899d972d8.webp',
				published_at: '2023-09-27T16:11:52.000+02:00',
				url: 'https://msp-vedene.fr/blog/exposition-photos-projet-invictus/',
				feature_image_alt: null
			},
			{
				title: 'Conférence Octobre rose le 27/10 à Vedène',
				custom_excerpt:
					'Une conférence sur le cancer du sein aura lieu à la Maison des Associations de Vedène le vendredi 27 octobre 2023 à 18h30.',
				feature_image:
					'https://msp-vedene.fr/blog/content/images/2023/09/article-1110x338-octobrerose_big.jpg',
				published_at: '2023-09-17T21:15:26.000+02:00',
				url: 'https://msp-vedene.fr/blog/conference-octobre-rose/',
				feature_image_alt: null
			},
			{
				title: 'Novembre : Mois sans tabac',
				custom_excerpt: 'En novembre, on arrête ensemble!',
				feature_image: 'https://msp-vedene.fr/blog/content/images/2022/09/j-arrete-de-fumer-1.png',
				published_at: '2022-09-22T15:04:38.000+02:00',
				url: 'https://msp-vedene.fr/blog/mois-sans-tabac/',
				feature_image_alt: 'Cigarette brisée.'
			},
			{
				title: 'Séminaire de la Maison de Santé de Vedène',
				custom_excerpt: "Compte-rendu du séminaire d'avril 2022.",
				feature_image:
					'https://msp-vedene.fr/blog/content/images/2022/05/WhatsApp-Image-2022-04-25-at-11.32.59.jpeg',
				published_at: '2022-05-31T12:56:53.000+02:00',
				url: 'https://msp-vedene.fr/blog/seminaire-msp-vedene/',
				feature_image_alt: null
			}
		],
		meta: { pagination: { page: 1, limit: 10, pages: 1, total: 8, next: null, prev: null } }
	};
</script>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
		<p>...</p>
	</div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container"><Ghost data={testData1} /></div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
		<p>...</p>
	</div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
		<p>...</p>
	</div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container"><Ghost data={testData2} /></div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
		<p>...</p>
	</div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container">
		<p>...</p>
	</div>
</section>

<section class="bg-surface-100-800-token blog-gradient">
	<div class="section-container"><Ghost data={testData3} /></div>
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
