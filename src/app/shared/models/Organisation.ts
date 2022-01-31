import { Plot } from "./Plot";
import { User } from "./User";

export interface Organisation {
    id: number,
    ownerId: number,
    name: string,

    owner?: User,
    plots?: Plot[]
}