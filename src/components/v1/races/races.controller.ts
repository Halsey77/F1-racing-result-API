import * as racesService from './races.service';
import {APIError, HttpCodes} from "../../../errors/api";

export async function getAllRaces(req, res) {
    const { year, grandprix, place } = req.query;

    if (year && isNaN(year)) {
        throw new APIError(HttpCodes.BAD_REQUEST, `Invalid year value ${year}`);
    }

    const result = await racesService.getAllRaces(year, grandprix, place);
    res.status(HttpCodes.OK).send(result);
}