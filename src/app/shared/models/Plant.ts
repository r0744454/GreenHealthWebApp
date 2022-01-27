import { Result } from "./Result";
import { User } from "./User";

export interface Plant {
    id: number;
    userId: number;

    resultId?: number;
    location?: string;
    imagePath?: string;

    user?: User;
    result?: Result;
    timeStampt?: string;
}