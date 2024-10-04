import { SvelteComponent } from "svelte";
import type { Facility } from '../interfaces/facility.interface';
declare const __propDef: {
    props: {
        data: Facility;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FacilityLinkProps = typeof __propDef.props;
export type FacilityLinkEvents = typeof __propDef.events;
export type FacilityLinkSlots = typeof __propDef.slots;
export default class FacilityLink extends SvelteComponent<FacilityLinkProps, FacilityLinkEvents, FacilityLinkSlots> {
}
export {};
