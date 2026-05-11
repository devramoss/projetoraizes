export default (sequelize, DataTypes) => {
  const Fidelidade = sequelize.define("Fidelidade", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    clienteId: { type: DataTypes.INTEGER, unique: true },
    pontos: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
  return Fidelidade;
};
