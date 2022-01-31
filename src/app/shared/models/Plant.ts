import { Plot } from "./Plot";
import { Result } from "./Result";
import { Season } from "./Season";
import { User } from "./User";

export interface Plant {
    id: number,
    plotId: number,

    resultId?: number,
    seasonId?: number,
    location?: string,
    imagePath?: string,
    timestamp?: string,

    season?: Season,
    plot?: Plot,
    result?: Result
}