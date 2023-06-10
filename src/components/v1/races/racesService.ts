import racesModel from "../../../database/models/races.model";

export async function getAllRaces() {
    return racesModel.find();
}