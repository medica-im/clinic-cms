import { SvelteComponent } from "svelte";
import 'leaflet/dist/leaflet.css';
import type { MapData } from '../interfaces/mapData.interface.ts';
declare const __propDef: {
    props: {
        data: MapData[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MapProps = typeof __propDef.props;
export type MapEvents = typeof __propDef.events;
export type MapSlots = typeof __propDef.slots;
export default class Map extends SvelteComponent<MapProps, MapEvents, MapSlots> {
}
export {};
