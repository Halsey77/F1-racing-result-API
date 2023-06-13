import {APIError, HttpCodes} from "../../../errors/api";
import * as service from "./pitStops.service";
import {FieldValidationError, matchedData, query, validationResult} from "express-validator";

export interface PitStopsQuery {
    grandprix?: string;
    year?: number;
    stops?: number;
    no?: number;
    driver?: string;
    car?: string;
    lap?: number;
    timeOfDay?: string;
    time?: string;
    total?: string;
}

export const pitStopQueryValidation = [
    query('grandprix').optional().escape().isString().withMessage('Grandprix must be a string').toLowerCase(),
    query('year').optional().escape().isInt().withMessage('Year must be an integer'),
    query('stops').optional().escape().isInt().withMessage('Stops must be an integer'),
    query('no').optional().escape().isInt().withMessage('No must be an integer'),
    query('driver').optional().escape().isString().withMessage('Driver name must be a string').toLowerCase(),
    query('car').optional().escape().isString().withMessage('Car name must be a string').toLowerCase(),
    query('lap').optional().escape().isInt().withMessage('Lap must be an integer'),
    query('timeOfDay').optional().escape().isString().withMessage('Time of day must be a string'),
    query('time').optional().escape().isString().withMessage('Time must be a string'),
    query('total').optional().escape().isString().withMessage('Total must be a string'),
];

export async function getPitStops(req, res) {
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()) {
        const error = validationErrors.array({ onlyFirstError: true })[0] as FieldValidationError;
        const message = `Validation error for ${error.path}: ${error.msg}`;
        throw new APIError(HttpCodes.BAD_REQUEST, message);
    }

    const data = matchedData(req, { includeOptionals: true }) as PitStopsQuery;
    const results = await service.getPitStopsFromDB(data);
    res.status(HttpCodes.OK).json(results);
}