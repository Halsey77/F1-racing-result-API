import express from "express";
import response from "../../../errors/reponses";
import * as controller from "./driverStandings.controller";

const router = express.Router();

router.get('/:driver', response(controller.getDriverStandings))

export default router;