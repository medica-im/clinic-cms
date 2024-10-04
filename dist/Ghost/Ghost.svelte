<script>import RoundCard from "../RoundCard/RoundCard.svelte";
export let data;
const posts = data.posts;
function formatDate(datetime) {
    const event = new Date(datetime);
    return event.toLocaleDateString();
}
function colsCount() {
    let count = posts.length;
    console.log(`post count: ${count}`);
    if (count < 2)
        return 1;
    else if (count == 2)
        return 2;
    else
        return 3;
}
</script>

{#if Array.isArray(posts) && posts.length}
	<div class="!bg-transparent space-y-4 md:space-y-10">
		<div class="text-center">
			<h2 class="h2">Blog</h2>
		</div>
		<!--div class="grid grid-cols-1 lg:grid-cols-{colsCount()} justify-between gap-4 md:gap-10 p-4 place-items-top"-->
		<div class="flex flex-wrap justify-center gap-4">
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
