import { data } from './data.dev';
import * as racesService from '../races/races.service';
import raceResultModel from "../../../database/models/raceResults.model";

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