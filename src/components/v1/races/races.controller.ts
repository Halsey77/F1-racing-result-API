import * as racesService from './races.service';
import {APIError, HttpCodes} from "../../../errors/api";
import {FieldValidationError, matchedData, query, validationResult} from "express-validator";

export const raceQueryValidator = [
    query('year').optional().isInt({min: 1990}).withMessage('Year must be a number greater than 1990'),
    query('grandprix').optional().isString().withMessage('Grandprix must be a string'),
    query('place').optional().isString().withMessage('Place must be a string'),
];

export async function getAllRaces(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = errors.array({ onlyFirstError: true })[0] as FieldValidationError;
        const message = `Validation error for ${error.path}: ${error.msg}`;
        throw new APIError(HttpCodes.BAD_REQUEST, message);
    }

    const { year, grandprix, place } = matchedData(req, { includeOptionals: true });
    const result = await racesService.getAllRaces(year, grandprix, place);
    res.status(HttpCodes.OK).send(result);
}