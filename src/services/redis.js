const redis = require("redis");
const { redis: redisConfig } = require("../config");

const connectRedis = async () => {
  const client = redis.createClient({
    url: `redis://${redisConfig.host}:${redisConfig.port}`,
  });

  client.on("error", (err) => console.error("Redis Client Error", err));
  client.on("connect", () => console.log("Connected to Redis."));

  await client.connect();
  return client;
};

module.exports = connectRedis;
