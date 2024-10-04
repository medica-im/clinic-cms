<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import Map from '$lib/Map/Map.svelte';
	import type { MapData } from '$lib/interfaces/mapData.interface.ts';
    import Select from 'svelte-select';
	
	let items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
	let value: string|null = null;

    const data: MapData[] = [{"latLng":[43.926553,4.9453706],"zoom":17,"tooltip":{"text":"Maison de santé de Gadagne","permanent":true,"direction":"auto","opacity":0.7}}]
</script>
<Select --list-z-index=2000 {items} bind:value />
<div in:scale class="h-48 w-96">
<Map data={data}/>
</div>