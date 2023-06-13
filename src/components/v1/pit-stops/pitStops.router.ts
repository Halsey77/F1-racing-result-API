import express from "express";
import response from "../../../errors/reponses";
import * as controller from "./pitStops.controller";
import {pitStopQueryValidation} from "./pitStops.controller";

const router = express.Router();

router.get('/', pitStopQueryValidation, response(controller.getPitStops));

export default router;