const options = {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "my-fastify-api" },
    description: "Testing the Fastify swagger API",
    version: "0.1.0",
  },
  externalDocs: {
    url: "https://swagger.io",
    description: "Find more info here",
  },
  host: "localhost",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

module.exports = options;
