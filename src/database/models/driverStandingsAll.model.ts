import mongoose, {Schema} from "mongoose";

export interface driverStandingsAll {
    year: number,
    pos: number,
    driver: string,
    nationality: string,
    car: string,
    pts: number,
}

const driverStandingsAllSchema: Schema<driverStandingsAll> = new mongoose.Schema({
    year: { type: Number, required: true },
    pos: { type: Number, required: true },
    driver: { type: String, required: true },
    nationality: { type: String, required: true },
    car: { type: String, required: true },
    pts: { type: Number, required: true },
}, {
    collection: "driver_standings_all"
});

export const driverStandingsAllModel = mongoose.model<driverStandingsAll>('driverStandingsAll', driverStandingsAllSchema);