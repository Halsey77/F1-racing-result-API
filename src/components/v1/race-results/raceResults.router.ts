import express from "express";
import * as raceResultsController from "./raceResults.controller";
import response from "../../../errors/reponses";

const router = express.Router();

router.post('/insert', response(raceResultsController.insertData));
export default router;