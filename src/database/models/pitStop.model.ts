import mongoose, {Schema} from "mongoose";

export interface PitStop {
    raceId: string;
    stops: number;
    no: number;
    driver: string;
    car: string;
    lap: number;
    timeOfDay: string;
    time: string;
    total: string;
}

const pitStopSchema: Schema<PitStop> = new mongoose.Schema({
    raceId: {type: String, required: true},
    stops: {type: Number, required: true},
    no: {type: Number, required: true},
    driver: {type: String, required: true},
    car: {type: String, required: true},
    lap: {type: Number, required: true},
    timeOfDay: {type: String, required: true},
    time: {type: String, required: true},
    total: {type: String, required: true},
}, {
    collection: "pit_stops"
});

export default mongoose.model<PitStop>('PitStop', pitStopSchema);