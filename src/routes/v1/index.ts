import express, {Router} from "express";
import racesRouter from "../../components/v1/races/racesRouter";

const router: Router = express.Router();

router.use('races', racesRouter);

export default router;