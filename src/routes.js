const express = require("express");
const os = require("os");

const routes = (redisClient) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    redisClient.set("products", "products...");
    console.log(`traffic from ${os.hostname} `);
    res.send(
      "<h1>Welcome to the Express Server From Docker Hub using Docker Swarm</h1>"
    );
  });

  router.get("/:products", async (req, res) => {
    const { products } = req.params;
    const data = await redisClient.get(products);
    res.send(`<h1>Welcome to the Express Server ${data}</h1>`);
  });

  return router;
};

module.exports = routes;
