import racesModel from "../../../database/models/races.model";
import removeUndefinedKeysFromFilter from "../../../util/removeUndefinedKeysFromFilter";

export async function getAllRaces(year: number, grandpix: string, place: string) {
    const filter = removeUndefinedKeysFromFilter({
        date: !year ? undefined : {
            $gte: new Date(year, 0, 1),
            $lte: new Date(year, 11, 31)
        },
        grandpix: !grandpix ? undefined : {
            $regex: new RegExp(grandpix, 'i')
        },
        place: !place ? undefined : {
            $regex: new RegExp(place, 'i')
        }
    });

    return await racesModel.find(filter).exec();
}