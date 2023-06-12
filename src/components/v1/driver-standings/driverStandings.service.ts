import {driverStandingModel} from "../../../database/models/driverStanding.model";
import {DriverStandingQuery} from "./driverStandings.controller";
import removeUndefinedKeysFromFilter from "../../../util/removeUndefinedKeysFromFilter";

export async function getDriverStandings(driver: string, query: DriverStandingQuery) {
    const driverName = driver.split('-').join(' ');
    const carName = query.car?.split('-').join(' ');

    const filter = removeUndefinedKeysFromFilter({
        driver: {
            $regex: new RegExp(driverName, "i")
        },
        date: !query.year ? undefined : {
            $gte: new Date(`${query.year}-01-01`),
            $lte: new Date(`${query.year}-12-31`)
        },
        grandprix: !query.grandprix ? undefined : {
            $regex: new RegExp(query.grandprix, "i")
        },
        racepos: !query.racepos ? undefined : {
            $regex: new RegExp(query.racepos, "i")
        },
        pts: !query.pts ? undefined : query.pts,
        car: !query.car ? undefined : {
            $regex: new RegExp(carName, "i")
        },
    });
    const [sortField, sortDirection] = query.sort?.split(':') || ['date', 'desc'];

    return await driverStandingModel.find(filter).lean().sort({
        [sortField]: sortDirection === 'asc' ? 1 : -1
    }).select('-__v').exec();
}

