import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: string;
        date?: string;
        excerpt?: string;
        img?: string;
        alt?: string;
        url?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type RoundCardProps = typeof __propDef.props;
export type RoundCardEvents = typeof __propDef.events;
export type RoundCardSlots = typeof __propDef.slots;
export default class RoundCard extends SvelteComponent<RoundCardProps, RoundCardEvents, RoundCardSlots> {
}
export {};
