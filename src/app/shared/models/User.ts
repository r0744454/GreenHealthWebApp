import { Plant } from "./Plant";

export interface User {
    id: number,
    firstName?: string,
    lastName?: string,
    address?: string,
    email: string,
    password?: string,
    isAdmin?: boolean

    plants?: Plant[];
}