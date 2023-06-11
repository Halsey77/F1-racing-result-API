import mongoose, {Schema} from "mongoose";

export interface DriverStanding {
    grandprix: string,
    driver: string,
    date: Date,
    car: string,
    racePos: string,
    pts: number,
}

const driverStandingSchema: Schema<DriverStanding> = new mongoose.Schema({
    grandprix: { type: String, required: true },
    date: { type: Date, required: true },
    car: { type: String, required: true },
    racePos: { type: String, required: true },
    pts: { type: Number, required: true },
}, {
    collection: "driver_standings"
});

export const driverStandingModel = mongoose.model<DriverStanding>('driverStanding', driverStandingSchema);