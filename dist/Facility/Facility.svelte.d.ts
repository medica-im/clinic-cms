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
export type FacilityProps = typeof __propDef.props;
export type FacilityEvents = typeof __propDef.events;
export type FacilitySlots = typeof __propDef.slots;
export default class Facility extends SvelteComponent<FacilityProps, FacilityEvents, FacilitySlots> {
}
export {};
