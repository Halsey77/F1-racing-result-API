import express from "express";
import * as raceResultsController from "./raceResults.controller";
import response from "../../../errors/reponses";

const router = express.Router();

router.get('/:year', response(raceResultsController.getRaceResultsOfYear));

export default router;