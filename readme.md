# 🍴 API Raízes do Nordeste

Back-end para rede de lanchonetes, desenvolvido em **Node.js + Express + MySQL + Sequelize**, conforme requisitos da atividade prática multidisciplinar da UNINTER.

## 🚀 Requisitos

- Node.js >= 18
- NPM ou Yarn
- MySQL >= 8
- Sequelize CLI

## ⚙️ Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/devramoss/projetoraizes.git
   cd projetoraizes

2. Instale dependências:
   ```bash
   npm install
   
3. Configure variáveis de ambiente

4. Crie o banco e rode migrations:
   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all

5. Execução:
   ```bash
    npm start
