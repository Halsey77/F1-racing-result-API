import express, {Router} from "express";
import racesRouter from "../../components/v1/races/races.router";
import raceResultsRouter from "../../components/v1/race-results/raceResults.router";
import driverStandingAllRouter from "../../components/v1/driver-standing-all/driverStandingAll.router";
import driverStandingRouter from "../../components/v1/driver-standings/driverStandings.router";
import pitStopsRouter from "../../components/v1/pit-stops/pitStops.router";

const router: Router = express.Router();

router.use('/races', racesRouter);
router.use('/race-results', raceResultsRouter);
router.use('/yearly-driver-standings', driverStandingAllRouter);
router.use('/driver-standings', driverStandingRouter);
router.use('/pit-stops', pitStopsRouter);

export default router;