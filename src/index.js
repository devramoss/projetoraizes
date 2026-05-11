import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./infrastructure/database/models/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger.js";

// Importação das rotas
import authRoutes from "./api/routes/auth.routes.js";
import usuarioRoutes from "./api/routes/usuarios.routes.js";
import produtoRoutes from "./api/routes/produtos.routes.js";
import pedidoRoutes from "./api/routes/pedidos.routes.js";
import pagamentoRoutes from "./api/routes/pagamentos.routes.js";
import fidelidadeRoutes from "./api/routes/fidelidade.routes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
sequelize.authenticate()
  .then(() => console.log("✅ Conectado ao banco de dados MySQL"))
  .catch(err => console.error("❌ Erro ao conectar ao banco:", err));

// Rotas principais
app.use("/auth", authRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/produtos", produtoRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/pagamentos", pagamentoRoutes);
app.use("/fidelidade", fidelidadeRoutes);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rota raiz
app.get("/", (req, res) => {
  res.send("API Raízes do Nordeste está rodando 🚀");
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Servidor rodando na porta ${PORT}`);
});
