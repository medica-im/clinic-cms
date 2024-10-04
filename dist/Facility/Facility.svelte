<script>import FacilityCarousel from "./FacilityCarousel.svelte";
import Map from "../Map/Map.svelte";
import { createFacilitiesMapData } from "../Map/mapData";
import { scale } from "svelte/transition";
export let data;
function filterFacilities(facilities2) {
    const f = facilities2.filter((facility) => facility.organizations.includes(data.organization.uid));
    return f;
}
const facilities = filterFacilities(data.facilities);
const carouselFacilities = filterFacilities(data.carousel);
function title() {
    const title2 = data?.facilities?.length > 1 ? "Sites" : "Site";
    return title2;
}
function compareFn(a, b) {
    return b.effectors.length - a.effectors.length;
}
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
	<div class="space-y-4 text-center">
		<h2 class="h2">{title()}</h2>
		{#each facilities.sort(compareFn) as facility}
			<div>
				<a
					href="/sites/{facility.slug}"
					title={facility.name}
					class="btn variant-ghost-primary w-fit">{facility.label || facility.name}</a
				>
			</div>
		{/each}
	</div>
	<div in:scale class="h-64">
		<Map data={createFacilitiesMapData(facilities, true)} />
	</div>
	{#if carouselFacilities.length}
		<div class="place-items-center items-center justify-center content-center">
			<FacilityCarousel data={carouselFacilities} />
		</div>
	{/if}
</div>
