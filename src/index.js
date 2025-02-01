const express = require("express");
const connectMongo = require("./services/mongo");
const connectPostgres = require("./services/postgres");
const connectRedis = require("./services/redis");
const routes = require("./routes");
const { port } = require("./config");

const app = express();

// Middleware
app.use(express.json());

// Initialize Services
(async () => {
  await connectMongo();
  await connectPostgres();
  const redisClient = await connectRedis();

  // Routes
  app.use("/", routes(redisClient));

  // Start Server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
