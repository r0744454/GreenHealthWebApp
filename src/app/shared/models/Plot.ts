import { Organisation } from "./Organisation";

export interface Plot {
    id: number,
    organisationId: number,
    location: string

    organisation?: Organisation
}