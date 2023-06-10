import express from "express";
import response from "../../../errors/reponses";
import * as racesController from "./racesController";

const racesRouter = express.Router();

racesRouter.get('/', response(racesController.getAllRaces));

export default racesRouter;