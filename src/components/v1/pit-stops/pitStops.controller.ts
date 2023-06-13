import {APIError, HttpCodes} from "../../../errors/api";
import * as service from "./pitStops.service";
import {FieldValidationError, matchedData, query, validationResult} from "express-validator";

export interface PitStopsQuery {
    grandprix?: string;
    year?: number;
    stops?: string;
    no?: string;
    driver?: string;
    car?: string;
    lap?: string;
    timeOfDay?: string;
    time?: string;
    total?: string;

    page?: string;
    limit?: string;
}

export const pitStopQueryValidation = [
    query('grandprix').optional().escape().isString().withMessage('Grandprix must be a string').toLowerCase(),
    query('year').optional().escape().isInt().withMessage('Year must be an integer'),
    query('stops').optional().escape().matches('^(\\[\\D+\\])?\\d+$', 'g').withMessage('invalid format'),
    query('no').optional().escape().matches('^(\\[\\D+\\])?\\d+$', 'g').withMessage('invalid format'),
    query('driver').optional().escape().isString().withMessage('Driver name must be a string').toLowerCase(),
    query('car').optional().escape().isString().withMessage('Car name must be a string').toLowerCase(),
    query('lap').optional().escape().matches('^(\\[\\D+\\])?\\d+$', 'g').withMessage('invalid format'),
    query('timeOfDay').optional().escape().matches('^(\\[\\D+\\])?\\d{2}:\\d{2}:\\d{2}$', 'g').withMessage('invalid format'),
    query('time').optional().escape().matches('^(\\[\\D+\\])?\\d+(.\\d+)?$', 'g').withMessage('invalid format'),
    query('total').optional().escape().isString().withMessage('Total must be a string'),
    query('page').if(query('limit').not().exists()).not().exists().withMessage('Limit must be specified').optional().isInt().withMessage('Page must be an integer').toInt(),
    query('limit').if(query('page').not().exists()).not().exists().withMessage('Page must be specified').optional().isInt().withMessage('Limit must be an integer').toInt()
];

export async function getPitStops(req, res) {
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()) {
        const error = validationErrors.array({ onlyFirstError: true })[0] as FieldValidationError;
        const message = `Validation error for ${error.path}: ${error.msg}`;
        throw new APIError(HttpCodes.BAD_REQUEST, message);
    }

    const queryData = matchedData(req, { includeOptionals: true }) as PitStopsQuery;
    const results = await service.getPitStopsFromDB(queryData);
    res.status(HttpCodes.OK).json(results);
}