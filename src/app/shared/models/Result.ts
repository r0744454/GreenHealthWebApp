export interface Result {
    id: number;
    growthStage: number;

    accuracy?: number;
    correctedGrowthStage?: number;
    species?: string;
    correctedSpecies?: string;
}