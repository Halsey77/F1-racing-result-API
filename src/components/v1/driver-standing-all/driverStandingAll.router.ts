import express from "express";
import response from "../../../errors/reponses";
import * as controller from "./driverStandingAll.controller";

const router = express.Router();

router.get('/', response(controller.getDriverStandingsOfYear));

export default router;