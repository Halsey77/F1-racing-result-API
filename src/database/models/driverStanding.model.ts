import mongoose, {Schema} from "mongoose";

export interface DriverStanding {
    driver: string,
    grandprix: string,
    date: Date,
    car: string,
    racepos: string,
    pts: number,
}

const driverStandingSchema: Schema<DriverStanding> = new mongoose.Schema({
    driver: { type: String, required: true },
    grandprix: { type: String, required: true },
    date: { type: Date, required: true },
    car: { type: String, required: true },
    racepos: { type: String, required: true },
    pts: { type: Number, required: true },
}, {
    collection: "driver_standings"
});

export const driverStandingModel = mongoose.model<DriverStanding>('driverStanding', driverStandingSchema);