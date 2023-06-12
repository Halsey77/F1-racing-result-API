import * as service from './driverStandings.service';
import {APIError, HttpCodes} from "../../../errors/api";

export interface DriverStandingQuery {
    year?: string,
    grandprix?: string,
    racepos?: string,
    pts?: string,
    car?: string,
    sort?: string,
}

export async function getDriverStandings(req, res) {
    const driver: string = req.params.driver;
    const query: DriverStandingQuery = req.query;

    // Validate query parameters
    for(const key in req.query) {
        if(!['year', 'grandprix', 'racepos', 'pts', 'car', 'sort'].includes(key)) {
            throw new APIError(HttpCodes.BAD_REQUEST, `Invalid query parameter: ${key}`);
        }
        if(key === 'sort') {
            const [sortField, sortDirection] = req.query.sort.split(':');
            if(!['date', 'grandprix', 'racepos', 'pts', 'car'].includes(sortField)) {
                throw new APIError(HttpCodes.BAD_REQUEST, `Invalid sort field: ${sortField}`);
            }
            if(!['asc', 'desc'].includes(sortDirection)) {
                throw new APIError(HttpCodes.BAD_REQUEST, `Invalid sort direction: ${sortDirection}`);
            }
        }
        if(key === 'year') {
            if(isNaN(Number(req.query.year))) {
                throw new APIError(HttpCodes.BAD_REQUEST, `Invalid year ${req.query.year}}`);
            }
        }
    }

    const driverStandings = await service.getDriverStandings(driver, query);
    res.status(HttpCodes.OK).json(driverStandings);
}

