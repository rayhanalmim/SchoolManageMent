import express from "express";
import { HeaderController } from "./header.controller";
import upload from "../../config/multerConfig";
const router = express.Router();

router.get("/get-data", HeaderController.getData);
router.post("/create-data", HeaderController.createData);
router.put("/update-data", upload.single("logo"), HeaderController.updateData);

export const HeaderRoute = router;
