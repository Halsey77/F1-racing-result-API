import * as service from './driverStandingAll.service';
import {APIError, HttpCodes} from "../../../errors/api";
import {FieldValidationError, matchedData, query, validationResult} from "express-validator";

export interface YearlyDriverStandingsQuery {
    year?: number;
    pos?: string;
    driver?: string;
    nationality?: string;
    car?: string;
    pts?: string;
    sort?: string;
}

export const yearlyDriverStandingsQueryValidation = [
    query('year').optional().escape().isInt({min: 1990}).withMessage('Year must be a number greater than 1990'),
    query('pos').optional().escape().matches('^(\\[\\D+\\])?\\d+$', 'g').withMessage('invalid format'),
    query('driver').optional().escape().isString().withMessage('Driver name must be a string').toLowerCase(),
    query('nationality').optional().escape().isString().withMessage('Nationality must be a string').toLowerCase(),
    query('car').optional().escape().isString().withMessage('Car name must be a string').toLowerCase(),
    query('pts').optional().escape().matches('^(\\[\\D+\\])?\\d+$', 'g').withMessage('invalid format'),
    query('sort').optional().escape().matches('^(year|pos|driver|nationality|car|pts):(asc|desc)$', 'g').withMessage('invalid sort format')
];

export async function getDriverStandingsOfYear(req, res) {
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()) {
        const error = validationErrors.array({ onlyFirstError: true })[0] as FieldValidationError;
        const message = `Validation error for ${error.path}: ${error.msg}`;
        throw new APIError(HttpCodes.BAD_REQUEST, message);
    }

    const query = matchedData(req, { includeOptionals: true }) as YearlyDriverStandingsQuery;
    const driverStandings = await service.getDriverStandingsOfYear(query);
    res.status(200).json(driverStandings);
}