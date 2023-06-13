import pitStopModel, {PitStop} from "../../../database/models/pitStop.model";
import {PitStopsQuery} from "./pitStops.controller";
import * as racesService from "../races/races.service";
import {Types} from "mongoose";
import removeUndefinedKeysFromFilter from "../../../util/removeUndefinedKeysFromFilter";

interface PitStopResult extends Omit<PitStop, 'raceId'>{
    grandprix: string;
    year: number;
}

export async function getPitStopsFromDB(query: PitStopsQuery): Promise<PitStopResult[]> {
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
    return results;
}

async function findPitStopsByRaceId(raceId: Types.ObjectId, query: PitStopsQuery) {
    const filter = removeUndefinedKeysFromFilter({
        raceId: raceId,
        stops: query.stops,
        no: query.no,
        driver: query.driver && {
            $regex: new RegExp(query.driver.split('-').join(' '), 'i'),
        } ,
        car: query.car && {
            $regex: new RegExp(query.car.split('-').join(' '), 'i'),
        },
        lap: query.lap,
        timeOfDay: query.timeOfDay,
        time: query.time,
        total: query.total
    });

    return await pitStopModel.find(filter).lean().select('-raceId -__v').exec();
}