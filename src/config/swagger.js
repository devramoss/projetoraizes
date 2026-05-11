import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Raízes do Nordeste",
      version: "1.0.0",
      description: "Documentação da API Back-end para rede de lanchonetes"
    },
    servers: [
      { url: "http://localhost:3000", description: "Servidor local" }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ["./api/routes/*.js"], // rotas com anotações
};

export default swaggerJsdoc(options);
