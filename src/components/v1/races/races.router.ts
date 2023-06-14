import express from "express";
import response from "../../../errors/reponses";
import * as controller from "./races.controller";

const racesRouter = express.Router();

racesRouter.get('/', controller.raceQueryValidator, response(controller.getAllRaces));

export default racesRouter;