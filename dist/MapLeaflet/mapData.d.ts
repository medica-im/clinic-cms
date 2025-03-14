import type { MapData } from '../interfaces/mapData.interface.ts';
import type { Facility, Address } from '../interfaces/facility.interface.ts';
export declare const createMapData: (address: Address, facilityName: string) => MapData[];
export declare const createFacilitiesMapData: (facilities: Facility[], tooltip?: boolean) => MapData[];
