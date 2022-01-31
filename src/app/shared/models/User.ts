import { Organisation } from "./Organisation";
import { Plant } from "./Plant";

export interface User {
    id: number,
    organisationId?: number,
    firstName?: string,
    lastName?: string,
    address?: string,
    email: string,
    password?: string,
    isAdmin?: boolean,

    organisation?: Organisation,
    plants?: Plant[]
}