import express from "express";
import { autenticar } from "../../infrastructure/security/AuthMiddleware.js";
import { pagarMock } from "../controllers/PagamentoController.js";

const router = express.Router();

router.post("/:pedidoId/mock", autenticar, pagarMock);

export default router;
