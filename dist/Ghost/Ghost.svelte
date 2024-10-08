<script>import RoundCard from "../RoundCard/RoundCard.svelte";
export let data;
const posts = data.posts;
function formatDate(datetime) {
    const event = new Date(datetime);
    return event.toLocaleDateString();
}
</script>

{#if Array.isArray(posts) && posts.length}
	<div class="!bg-transparent space-y-4 md:space-y-10">
		<div class="text-center">
			<h2 class="h2">Blog</h2>
		</div>
		<div class="flex flex-wrap justify-center gap-6 md:gap-10">
			{#each posts as post}
				<RoundCard
					url={post.url}
					img={post.feature_image}
					alt={post.feature_image_alt}
					title={post.title}
					date={formatDate(post.published_at)}
					excerpt={post.custom_excerpt}
				/>
			{/each}
		</div>
	</div>
{/if}
