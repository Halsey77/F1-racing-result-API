import express, {Router} from "express";
import racesRouter from "../../components/v1/races/races.router";
import raceResultsRouter from "../../components/v1/race-results/raceResults.router";
import driverStandingAllRouter from "../../components/v1/driver-standing-all/driverStandingAll.router";
import driverStandingRouter from "../../components/v1/driver-standings/driverStandings.router";
const router: Router = express.Router();

router.use('/races', racesRouter);
router.use('/race-results', raceResultsRouter);
router.use('/driver-standings-year', driverStandingAllRouter);
router.use('/driver-standings', driverStandingRouter);
export default router;