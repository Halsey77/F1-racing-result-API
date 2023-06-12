import * as service from './driverStandings.service';
import {HttpCodes} from "../../../errors/api";

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
            res.status(HttpCodes.BAD_REQUEST).json({
                message: `Invalid query parameter: ${key}`
            });
            return;
        }
        if(key === 'sort') {
            const [sortField, sortDirection] = req.query.sort.split(':');
            if(!['date', 'grandprix', 'racepos', 'pts', 'car'].includes(sortField)) {
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
        if(key === 'year') {
            if(isNaN(Number(req.query.year))) {
                res.status(HttpCodes.BAD_REQUEST).json({
                    message: `Invalid year: ${req.query.year}`
                });
                return;
            }
        }
    }

    const driverStandings = await service.getDriverStandings(driver, query);
    res.status(HttpCodes.OK).json(driverStandings);
}

