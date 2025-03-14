<script lang="ts">
	import MapLibre from '$lib/MapLibre/MapLibre.svelte';
	import type { MapData } from '$lib/interfaces/mapData.interface.ts';
    const data: MapData[] = [
		{
			latLng: [43.926553, 4.9453706],
			zoom: 18,
			tooltip: {
				text: 'Maison de santé'
			}
		},
		{
			latLng: [43.936553, 4.9564806],
			zoom: 18,
			tooltip: {
				text: 'Pharmacie'
			}
		},
		{
			latLng: [43.946553, 4.9373906],
			zoom: 18,
			tooltip: {
                text: 'Cabinet paramédical'
			}
		}
	];
</script>
<div class="grid gap-10 p-10">
<div class="h-96">
<MapLibre data={data}/>
</div>
<div class="h-96">
<MapLibre data={data.slice(0,1)}/>
</div>
</div>