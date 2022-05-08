// / require and instance the framework
const fastify = require("fastify")({ logger: false });
//import swagger
const swagger = require("./swagger");
// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now running on ${address} port`);
});

//showing details in documentation
fastify.register(require("fastify-swagger"), swagger);
fastify.register(require("./routes/finance"));
