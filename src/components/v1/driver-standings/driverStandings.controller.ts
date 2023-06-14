import * as service from './driverStandings.service';
import {APIError, HttpCodes} from "../../../errors/api";
import {FieldValidationError, matchedData, query, validationResult} from "express-validator";

export interface DriverStandingQuery {
    year?: string,
    grandprix?: string,
    racepos?: string,
    pts?: string,
    car?: string,
    sort?: string,
}

export const driverStandingsQueryValidation = [
    query('year').optional().isInt({min: 1990}).withMessage('Year must be a number greater than 1990'),
    query('grandprix').optional().escape().isString().withMessage('Grand Prix must be a string'),
    query('racepos').optional().isInt().equals('DNF').withMessage('Race position must be a number or DNF'),
    query('pts').optional().matches('^(\\[\\D+\\])?\\d+$', 'g').withMessage('invalid format'),
    query('car').optional().escape().isString().withMessage('Car must be a string'),
    query('sort').optional().escape().matches('^(year|grandprix|racepos|pts|car):(asc|desc)$', 'g').withMessage('invalid sort format'),
];

export async function getDriverStandings(req, res) {
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()) {
        const error = validationErrors.array({ onlyFirstError: true })[0] as FieldValidationError;
        const message = `Validation error for ${error.path}: ${error.msg}`;
        throw new APIError(HttpCodes.BAD_REQUEST, message);
    }

    const driver: string = req.params.driver;
    const query = matchedData(req, { includeOptionals: true }) as DriverStandingQuery;

    const driverStandings = await service.getDriverStandings(driver, query);
    res.status(HttpCodes.OK).json(driverStandings);
}

