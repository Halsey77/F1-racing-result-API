import * as racesService from './races.service';
import {HttpCodes} from "../../../errors/api";

export async function getAllRaces(req, res) {
    const { year, grandpix, place } = req.query;

    const result = await racesService.getAllRaces(year, grandpix, place);
    res.status(HttpCodes.OK).send(result);
}