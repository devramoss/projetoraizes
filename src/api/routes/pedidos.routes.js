import express from "express";
import { autenticar } from "../../infrastructure/security/AuthMiddleware.js";
import { criar } from "../controllers/PedidoController.js";

const router = express.Router();

router.post("/", autenticar, criar);

export default router;
