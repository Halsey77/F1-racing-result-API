import * as racesService from './racesService';
import {HttpCodes} from "../../../errors/api";

export async function getAllRaces(req, res) {
   const result = await racesService.getAllRaces();
    res.status(HttpCodes.OK).send(result);
}