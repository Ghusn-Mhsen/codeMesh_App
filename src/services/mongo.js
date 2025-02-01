const mongoose = require("mongoose");
const { mongo } = require("../config");

const connectMongo = async () => {
  try {
    const url = `mongodb://${mongo.user}:${mongo.password}@${mongo.host}:${mongo.port}/?authSource=admin`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectMongo;
