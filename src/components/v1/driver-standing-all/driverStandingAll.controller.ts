import * as service from './driverStandingAll.service';
import {HttpCodes} from "../../../errors/api";

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
            res.status(400).json({
                error: `Query parameter '${key}' is invalid.`
            });
            return;
        }
        if((key == 'year' && isNaN(query[key])) || (key == 'pos' && isNaN(query[key])) || (key == 'pts' && isNaN(query[key]))) {
            res.status(400).json({
                error: `Query parameter '${key}' must be a number.`
            });
            return;
        }
        if(key == 'sort') {
            const [sortField, sortDirection] = req.query.sort.split(':');
            if(!['year', 'pos', 'driver', 'nationality', 'car', 'pts'].includes(sortField)) {
                res.status(HttpCodes.BAD_REQUEST).json({
                    message: `Invalid sort field: ${sortField}`
                });
                return;
            }
            if(!['asc', 'desc'].includes(sortDirection)) {
                res.status(HttpCodes.BAD_REQUEST).json({
                    message: `Invalid sort direction: ${sortDirection}`
                });
                return;
            }
        }
    }

    const driverStandings = await service.getDriverStandingsOfYear(query);
    res.status(200).json(driverStandings);
}