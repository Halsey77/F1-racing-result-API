import express from "express";
import response from "../../../errors/reponses";
import * as racesController from "./races.controller";

const racesRouter = express.Router();

racesRouter.get('/', response(racesController.getAllRaces));

export default racesRouter;