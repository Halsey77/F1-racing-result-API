import {driverStandingsAllModel} from "../../../database/models/driverStandingsAll.model";
import {YearlyDriverStandingsQuery} from "./driverStandingAll.controller";
import removeUndefinedKeysFromFilter from "../../../util/removeUndefinedKeysFromFilter";
import {createCompareSortOptionForNumber} from "../../../util/sort";

export async function getDriverStandingsOfYear(query: YearlyDriverStandingsQuery) {
    const driverName = query.driver?.split('-').join(' ');
    const carName = query.car?.split('-').join(' ');
    const [sortField, sortDirection] = query.sort?.split(':') || ['pos', 'asc'];

    const filter = removeUndefinedKeysFromFilter({
        year: query.year,
        pos: query.pos && createCompareSortOptionForNumber(query.pos),
        driver: !query.driver ? undefined : {
            $regex: new RegExp(driverName, 'i'),
        },
        nationality: !query.nationality ? undefined : {
            $regex: new RegExp(query.nationality, 'i')
        },
        car: !query.car ? undefined : {
            $regex: new RegExp(carName, 'i'),
        },
        pts: query.pts && createCompareSortOptionForNumber(query.pts),
    });

    return await driverStandingsAllModel.find(filter).sort({
        [sortField]: sortDirection === 'asc' ? 1 : -1
    }).lean().exec();
}