export async function up(queryInterface) {
  await queryInterface.bulkInsert("Produtos", [
    {
      nome: "Cuscuz Nordestino",
      descricao: "Cuscuz de milho com manteiga",
      preco: 10.00,
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Tapioca Recheada",
      descricao: "Tapioca com queijo coalho",
      preco: 12.00,
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Suco de Acerola",
      descricao: "Suco natural de acerola",
      preco: 8.00,
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete("Produtos", null, {});
}
