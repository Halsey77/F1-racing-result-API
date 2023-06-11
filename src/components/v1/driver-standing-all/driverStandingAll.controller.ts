import * as service from './driverStandingAll.service';

export async function getDriverStandingsOfYear(req, res) {
    const year = req.params.year;
    const driverStandings = await service.getDriverStandingsOfYear(year);
    res.status(200).json(driverStandings);
}