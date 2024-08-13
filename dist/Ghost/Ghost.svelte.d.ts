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
export type GhostProps = typeof __propDef.props;
export type GhostEvents = typeof __propDef.events;
export type GhostSlots = typeof __propDef.slots;
export default class Ghost extends SvelteComponent<GhostProps, GhostEvents, GhostSlots> {
}
export {};
