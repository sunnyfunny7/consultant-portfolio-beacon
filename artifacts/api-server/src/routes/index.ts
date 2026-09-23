import { Router, type IRouter } from "express";
import ambassadorRouter from "./ambassador";
import healthRouter from "./health";

const router: IRouter = Router();

router.use(healthRouter);
router.use(ambassadorRouter);

export default router;
