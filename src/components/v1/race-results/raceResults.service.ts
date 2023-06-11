import {data} from './data.dev';
import * as racesService from '../races/races.service';
import {raceResultModel, RaceResult, YearlyRaceResult} from "../../../database/models/raceResults.model";
import {Race} from "../../../database/models/races.model";
import {FlattenMaps, Types} from "mongoose";

interface GrandpixResult extends Omit<RaceResult, 'raceId'> {}

export async function getRaceResultsOfYearAndGrandprix(year: any, grandprix: any): Promise<GrandpixResult[]> {
    const races = await racesService.getAllRaces(year, grandprix);
    const race = races.find(r => {
        return r.grandpix.toLowerCase().trim() === grandprix;
    })
    if(race === undefined) return [];

    return await raceResultModel.find({ raceId: race._id }).lean().select('-raceId -__v').exec();
}

export async function getRaceResultsOfYear(year: number): Promise<YearlyRaceResult[]> {
    const races = await racesService.getAllRaces(year);
    if(races.length === 0) {
        return [];
    }

    let results: YearlyRaceResult[] = [];
    for(const r of races) {
        const winner = await findWinnerOfRace(r);
        results.push(winner);
    }

    return results;
}

async function findWinnerOfRace(race:  FlattenMaps<Race> & {_id: Types.ObjectId}): Promise<YearlyRaceResult & {_id: Types.ObjectId}> {
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


//TODO: remove this function
export async function insertData() {
    const resultDocs = [];
    for(const d of data) {
        //find raceId
        const race = await racesService.getAllRaces(d.year, d.grandpix);
        const raceId = race[0]._id;

        //insert results with raceId
        const results = d.results.map(r => {
            return {
                raceId: raceId,
                ...r
            }
        });
        const inserted = await raceResultModel.insertMany(results);
        resultDocs.push(...inserted);
    }
    return resultDocs;
}