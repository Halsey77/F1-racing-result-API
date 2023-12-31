import pitStopModel, {PitStop} from "../../../database/models/pitStop.model";
import {PitStopsQuery} from "./pitStops.controller";
import * as racesService from "../races/races.service";
import {Types} from "mongoose";
import removeUndefinedKeysFromFilter from "../../../util/removeUndefinedKeysFromFilter";
import {createCompareSortOptionForNumber, createCompareSortOptionForTime} from "../../../util/sort";

interface PitStopResult extends Omit<PitStop, 'raceId'>{
    grandprix: string;
    year: number;
}

interface PaginatedPitStops {
    data: PitStopResult[];
    limit: number;
    totalPages: number;
    totalResults: number;
}

export async function getPitStopsFromDB(query: PitStopsQuery): Promise<PitStopResult[] | PaginatedPitStops> {
    const races = await racesService.getAllRaces(query.year, query.grandprix);
    if(races.length === 0) return [];

    let results: PitStopResult[] = [];
    for(const race of races) {
        const pitStops = await findPitStopsByRaceId(race._id, query);
        if(pitStops.length === 0) continue;

        const pitStopResults: PitStopResult[] = pitStops.map(pitStop => {
            return {
                ...pitStop,
                grandprix: race.grandpix,
                year: race.date.getFullYear()
            }
        });
        results.push(...pitStopResults);
    }

    if(query.page && query.limit) {
        const start = (parseInt(query.page) - 1) * parseInt(query.limit);
        const end = start + parseInt(query.limit);
        const totalPages = Math.ceil(results.length / parseInt(query.limit));
        const totalResults = results.length;
        results = results.slice(start, end);

        return {
            data: results,
            limit: parseInt(query.limit),
            totalPages,
            totalResults
        };
    }

    return results;
}

async function findPitStopsByRaceId(raceId: Types.ObjectId, query: PitStopsQuery) {
    const filter = removeUndefinedKeysFromFilter({
        raceId: raceId,
        stops: query.stops && createCompareSortOptionForNumber(query.stops),
        no: query.no && createCompareSortOptionForNumber(query.no),
        driver: query.driver && {
            $regex: new RegExp(query.driver.split('-').join(' '), 'i'),
        } ,
        car: query.car && {
            $regex: new RegExp(query.car.split('-').join(' '), 'i'),
        },
        lap: query.lap && createCompareSortOptionForNumber(query.lap),
        timeOfDay: query.timeOfDay && createCompareSortOptionForTime(query.timeOfDay),
        time: query.time && createCompareSortOptionForNumber(query.time),
        total: query.total
    });

    return await pitStopModel.find(filter).lean().select('-raceId -__v').exec();
}