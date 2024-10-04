import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FacilityCarouselProps = typeof __propDef.props;
export type FacilityCarouselEvents = typeof __propDef.events;
export type FacilityCarouselSlots = typeof __propDef.slots;
export default class FacilityCarousel extends SvelteComponent<FacilityCarouselProps, FacilityCarouselEvents, FacilityCarouselSlots> {
}
export {};
