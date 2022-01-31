import { Plant } from "./Plant";

export interface Season {
    id: number,
    name: string,
    startDate: string,
    endDate: string,

    plants: Plant[]
}