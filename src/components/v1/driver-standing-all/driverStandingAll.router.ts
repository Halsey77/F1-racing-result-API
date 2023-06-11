import express from "express";
import response from "../../../errors/reponses";
import * as controller from "./driverStandingAll.controller";

const router = express.Router();

router.get('/:year', response(controller.getDriverStandingsOfYear));

export default router;