import mongoose, {Model, model, Schema} from "mongoose";

export interface Race {
    grandpix: string,
    date: Date,
    place: string,
}

const racesSchema: Schema<Race> = new mongoose.Schema({
    grandpix: { type: String, required: true },
    date: { type: Date, required: true },
    place: String,
}, {
    collection: "races"
});

const raceModel: Model<Race> = model<Race>('Race', racesSchema);
export default raceModel;