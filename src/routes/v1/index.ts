import express, {Router} from "express";
import racesRouter from "./races"

const router: Router = express.Router();

router.use('races', racesRouter);

export default router;