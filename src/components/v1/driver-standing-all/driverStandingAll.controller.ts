import * as service from './driverStandingAll.service';
import {APIError, HttpCodes} from "../../../errors/api";

export interface YearlyDriverStandingsQuery {
    year?: number;
    pos?: number;
    driver?: string;
    nationality?: string;
    car?: string;
    pts?: number;
    sort?: string;
}

export async function getDriverStandingsOfYear(req, res) {
    const query: YearlyDriverStandingsQuery = req.query;

    //validate query
    for(const key in req.query) {
        if(!['year', 'pos', 'driver', 'nationality', 'car', 'pts', 'sort'].includes(key)) {
            throw new APIError(HttpCodes.BAD_REQUEST, `Invalid query parameter: ${key}`);
        }
        if((key == 'year' && isNaN(query[key])) || (key == 'pos' && isNaN(query[key])) || (key == 'pts' && isNaN(query[key]))) {
            throw new APIError(HttpCodes.BAD_REQUEST, `Invalid value ${query[key]} of key ${key}`);
        }
        if(key == 'sort') {
            const [sortField, sortDirection] = req.query.sort.split(':');
            if(!['year', 'pos', 'driver', 'nationality', 'car', 'pts'].includes(sortField)) {
                throw new APIError(HttpCodes.BAD_REQUEST, `Invalid sort field: ${sortField}`);
            }
            if(!['asc', 'desc'].includes(sortDirection)) {
                throw new APIError(HttpCodes.BAD_REQUEST, `Invalid sort direction: ${sortDirection}`);
            }
        }
    }

    const driverStandings = await service.getDriverStandingsOfYear(query);
    res.status(200).json(driverStandings);
}