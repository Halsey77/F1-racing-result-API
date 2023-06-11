import racesModel, {Race} from "../../../database/models/races.model";
import removeUndefinedKeysFromFilter from "../../../util/removeUndefinedKeysFromFilter";
import {Types} from "mongoose";

export async function findOneRace(year: number, grandprix: string): Promise<Race & {_id: Types.ObjectId}>{
    const regexPattern = '^' + grandprix + '$';
    return await racesModel.findOne({
        date: {
            $gte: new Date(year, 0, 1),
            $lte: new Date(year, 11, 31)
        },
        grandpix: {
            $regex: new RegExp( regexPattern, 'i')
        }
    }).lean().exec();
}


export async function getAllRaces(year?: number, grandpix?: string, place?: string) {
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

    return await racesModel.find(filter).lean().exec();
}