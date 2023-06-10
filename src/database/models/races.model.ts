import mongoose, {Model, model, Schema} from "mongoose";

export interface Race {
    grandpix: string,
    date: string,
    place: string,
}

const racesSchema: Schema<Race> = new mongoose.Schema({
    grandpix: { type: String, required: true },
    date: { type: String, required: true },
    place: String,
}, {
    collection: "races"
});

const RaceModel: Model<Race> = model<Race>('Race', racesSchema);
export default RaceModel;