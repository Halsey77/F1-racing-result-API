import {driverStandingsAllModel} from "../../../database/models/driverStandingsAll.model";

export async function getDriverStandingsOfYear(year: number) {
    return await driverStandingsAllModel.find({
        year: year
    }).lean().exec();
}