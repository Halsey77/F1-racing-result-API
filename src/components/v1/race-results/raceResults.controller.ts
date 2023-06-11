import {HttpCodes} from "../../../errors/api";
import * as raceResultsService from './raceResults.service';

//TODO: add sort options
export async function getRaceResultsOfYear(req, res) {
    const { year } = req.params;
    const { grandprix, sort } = req.query;
    let result;
    if(!grandprix) {
        result = await raceResultsService.getRaceResultsOfYear(year);
    } else {
        result = await raceResultsService.getRaceResultsOfYearAndGrandprix(year, grandprix);
    }

    if(sort && grandprix) {
        result = raceResultsService.sortGrandprixResults(result, sort);
    } else if(sort && !grandprix) {
        result = raceResultsService.sortYearlyResults(result, sort);
    }

    res.status(HttpCodes.OK).send(result);
}