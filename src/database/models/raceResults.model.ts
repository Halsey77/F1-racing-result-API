import mongoose, {Model, Schema} from "mongoose";

export interface YearlyRaceResult {
    grandprix: string,
    date: Date,
    winner: string,
    car: string,
    laps: number,
    time: string,
}

export interface RaceResult {
    raceId: string,
    pos: string,
    no: number,
    driver: string,
    car: string,
    laps: number,
    time: string,
    pts: number,
}

const raceResultsSchema: Schema<RaceResult> = new mongoose.Schema({
    raceId: { type: String, required: true },
    pos: { type: String, required: true },
    no: { type: Number, required: true },
    driver: { type: String, required: true },
    car: { type: String, required: true },
    laps: { type: Number, required: true },
    time: { type: String, required: true },
    pts: { type: Number, required: true },
}, {
    collection: "race_results"
});

export const raceResultModel: Model<RaceResult> = mongoose.model<RaceResult>('RaceResult', raceResultsSchema);