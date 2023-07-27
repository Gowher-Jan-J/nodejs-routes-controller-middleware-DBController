// additionRoutes.js
import express from "express";
import { addition, division, multipication, subtraction } from "../controllers/additionController.js";
import { authenticate } from "../middleware/additionMiddleware.js"; // Notice the use of curly braces

const router = express.Router();

// Middleware to log incoming requests for all routes
router.use(authenticate); // Use the middleware function directly

// Addition route
router.post("/add", addition);
router.post("/sub", subtraction);
router.post("/mul", multipication);
router.post("/div", division);
export default router;
