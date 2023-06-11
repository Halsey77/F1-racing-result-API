import * as racesService from '../races/races.service';
import {RaceResult, raceResultModel, YearlyRaceResult} from "../../../database/models/raceResults.model";
import {Race} from "../../../database/models/races.model";
import {FlattenMaps, Types} from "mongoose";
import {APIError, HttpCodes} from "../../../errors/api";
import {sortDate, sortNumber, sortString} from "../../../util/sort";

interface GrandprixResult extends Omit<RaceResult, 'raceId'> {
}

export async function getRaceResultsOfYearAndGrandprix(year: any, grandprix: any): Promise<GrandprixResult[]> {
    const race = await racesService.findOneRace(year, grandprix);
    if (!race) return [];

    return await raceResultModel.find({raceId: race._id}).lean().select('-raceId -__v').exec();
}

export async function getRaceResultsOfYear(year: number): Promise<YearlyRaceResult[]> {
    const races = await racesService.getAllRaces(year);
    if (races.length === 0) {
        return [];
    }

    let results: YearlyRaceResult[] = [];
    for (const r of races) {
        const winner = await findWinnerOfRace(r);
        results.push(winner);
    }

    return results;
}

async function findWinnerOfRace(race: FlattenMaps<Race> & { _id: Types.ObjectId }): Promise<YearlyRaceResult & {
    _id: Types.ObjectId
}> {
    const winner = await raceResultModel.findOne({
        raceId: race._id,
        pos: '1'
    }).exec();

    return {
        _id: winner._id,
        grandprix: race.grandpix,
        date: race.date,
        winner: winner.driver,
        car: winner.car,
        laps: winner.laps,
        time: winner.time,
    };
}

const grandprixSortOptions: Map<string, string> = new Map<string, string>([
    ['pos', 'number'],
    ['no', 'number'],
    ['driver', 'string'],
    ['car', 'string'],
    ['laps', 'number'],
    ['time', 'string'],
    ['pts', 'number']
]);
export function sortGrandprixResults(results: GrandprixResult[], sort: string): GrandprixResult[] {
    const [sortOption, direction] = sort.split(':');
    if (!grandprixSortOptions.has(sortOption)) {
        throw new APIError(HttpCodes.BAD_REQUEST, `Invalid sort option: ${sortOption}`);
    }
    return sortResults(direction, results, sortOption, grandprixSortOptions.get(sortOption));
}

const yearlyResultsSortOptions: Map<string, string> = new Map<string, string>([
    ['grandprix', 'string'],
    ['date', 'date'],
    ['winner', 'string'],
    ['car', 'string'],
    ['laps', 'number'],
    ['time', 'string']
]);
export function sortYearlyResults(results: YearlyRaceResult[], sort: string): YearlyRaceResult[] {
    const [sortOption, direction] = sort.split(':');
    if (!yearlyResultsSortOptions.has(sortOption)) {
        throw new APIError(HttpCodes.BAD_REQUEST, `Invalid sort option: ${sortOption}`);
    }
    return sortResults(direction, results, sortOption, yearlyResultsSortOptions.get(sortOption));
}

function sortResults(direction: string, results: any[], sortOption: string, sortType: string): any[] {
    if (direction !== 'asc' && direction !== 'desc') {
        throw new APIError(HttpCodes.BAD_REQUEST, `Invalid sort direction: ${direction}`);
    }

    return results.sort((a, b) => {
        if(sortType === 'number') {
            return sortNumber(direction, a[sortOption], b[sortOption]);
        } else if(sortType === 'date') {
            return sortDate(direction, a[sortOption], b[sortOption]);
        }
        return sortString(direction, a[sortOption], b[sortOption]);
    });
}