import express from "express";
import { autenticar, autorizar } from "../../infrastructure/security/AuthMiddleware.js";
import { criar, perfil } from "../controllers/UsuarioController.js";

const router = express.Router();

router.post("/", criar);
router.get("/:id", autenticar, perfil);

export default router;
