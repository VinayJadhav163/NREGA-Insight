import express from "express";
import { getDistrictData } from "../controllers/mgnregaController.js";

const router = express.Router();

router.get("/:state/:district", getDistrictData);


export default router;
