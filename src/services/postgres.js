const { createConnection } = require("typeorm");
const { postgres } = require("../config");

const connectPostgres = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: postgres.host,
      port: postgres.port,
      username: postgres.user,
      password: postgres.password,
      database: postgres.database,
      synchronize: true,
      logging: false,
      entities: [], // Add your entities here
    });
    console.log("Connected to PostgreSQL.");
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
};

module.exports = connectPostgres;
