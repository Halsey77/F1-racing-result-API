import {HttpCodes} from "../../../errors/api";
import * as raceResultsService from './raceResults.service';

//TODO: add sort options
export async function getRaceResultsOfYear(req, res) {
    const { year } = req.params;
    const { grandprix } = req.query;
    let result;
    if(!grandprix) {
        result = await raceResultsService.getRaceResultsOfYear(year);
    } else {
        result = await raceResultsService.getRaceResultsOfYearAndGrandprix(year, grandprix);
    }

    res.status(HttpCodes.OK).send(result);
}

export async function insertData(req, res) {
    const result = await raceResultsService.insertData();
    res.status(HttpCodes.OK).send(result);
}