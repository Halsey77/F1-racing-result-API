import {HttpCodes} from "../../../errors/api";
import * as raceResultsService from './raceResults.service';

export async function insertData(req, res) {
    const result = await raceResultsService.insertData();
    res.status(HttpCodes.OK).send(result);
}