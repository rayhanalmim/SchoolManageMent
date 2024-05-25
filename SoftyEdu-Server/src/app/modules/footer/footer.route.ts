import express from "express";
import { FooterController } from "./footer.controller";
const router = express.Router();

router.get("/get-data", FooterController.getData);
router.post("/create-data", FooterController.createData);
router.put("/update-data", FooterController.updateData);

export const FooterRoute = router;
