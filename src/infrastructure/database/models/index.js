import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Conexão com o banco de dados MySQL
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false
  }
);

// Importação dos models
import UsuarioModel from "../../../domain/entities/Usuario.js";
import ClienteModel from "../../../domain/entities/Cliente.js";
import UnidadeModel from "../../../domain/entities/Unidade.js";
import ProdutoModel from "../../../domain/entities/Produto.js";
import EstoqueModel from "../../../domain/entities/Estoque.js";
import PedidoModel from "../../../domain/entities/Pedido.js";
import ItemPedidoModel from "../../../domain/entities/ItemPedido.js";
import PagamentoModel from "../../../domain/entities/Pagamento.js";
import FidelidadeModel from "../../../domain/entities/Fidelidade.js";
import AuditLogModel from "../../../domain/entities/AuditLog.js";

// Inicialização dos models
export const Usuario = UsuarioModel(sequelize, DataTypes);
export const Cliente = ClienteModel(sequelize, DataTypes);
export const Unidade = UnidadeModel(sequelize, DataTypes);
export const Produto = ProdutoModel(sequelize, DataTypes);
export const Estoque = EstoqueModel(sequelize, DataTypes);
export const Pedido = PedidoModel(sequelize, DataTypes);
export const ItemPedido = ItemPedidoModel(sequelize, DataTypes);
export const Pagamento = PagamentoModel(sequelize, DataTypes);
export const Fidelidade = FidelidadeModel(sequelize, DataTypes);
export const AuditLog = AuditLogModel(sequelize, DataTypes);

// 🔗 Definição das associações (FKs)

// Cliente → Usuario
Cliente.belongsTo(Usuario, { foreignKey: "usuarioId" });
Usuario.hasOne(Cliente, { foreignKey: "usuarioId" });

// Fidelidade → Cliente
Fidelidade.belongsTo(Cliente, { foreignKey: "clienteId" });
Cliente.hasOne(Fidelidade, { foreignKey: "clienteId" });

// Pedido → Cliente / Unidade
Pedido.belongsTo(Cliente, { foreignKey: "clienteId" });
Cliente.hasMany(Pedido, { foreignKey: "clienteId" });

Pedido.belongsTo(Unidade, { foreignKey: "unidadeId" });
Unidade.hasMany(Pedido, { foreignKey: "unidadeId" });

// ItemPedido → Pedido / Produto
ItemPedido.belongsTo(Pedido, { foreignKey: "pedidoId" });
Pedido.hasMany(ItemPedido, { foreignKey: "pedidoId" });

ItemPedido.belongsTo(Produto, { foreignKey: "produtoId" });
Produto.hasMany(ItemPedido, { foreignKey: "produtoId" });

// Pagamento → Pedido
Pagamento.belongsTo(Pedido, { foreignKey: "pedidoId" });
Pedido.hasOne(Pagamento, { foreignKey: "pedidoId" });

// Estoque → Unidade / Produto
Estoque.belongsTo(Unidade, { foreignKey: "unidadeId" });
Unidade.hasMany(Estoque, { foreignKey: "unidadeId" });

Estoque.belongsTo(Produto, { foreignKey: "produtoId" });
Produto.hasMany(Estoque, { foreignKey: "produtoId" });

// AuditLog → Usuario
AuditLog.belongsTo(Usuario, { foreignKey: "usuarioId" });
Usuario.hasMany(AuditLog, { foreignKey: "usuarioId" });

// Exportação
export default {
  sequelize,
  Usuario,
  Cliente,
  Unidade,
  Produto,
  Estoque,
  Pedido,
  ItemPedido,
  Pagamento,
  Fidelidade,
  AuditLog
};
