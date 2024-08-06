import { Router } from "express";
import AuthRoutes from "./authRoutes.js";
import UserRoutes from "./userRoute.js";

const router = Router();

router.use("/api", AuthRoutes);
router.use("/api", UserRoutes);

export default router;