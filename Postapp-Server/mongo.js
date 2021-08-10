// Importing the MongoClient
const { MongoClient } = require("mongodb");

// Mongo Configurations
// const url = "mongodb://localhost:27017";
// const dbName = "guvi";

 const url = "mongodb+srv://root:admin123@cluster0.mworg.mongodb.net/Guvi_Posts?retryWrites=true&w=majority";
const dbName = "Guvi_Posts";

// Mongo Client
const client = new MongoClient(url);

const mongo = {
  db: null,

  async connect() {
    await client.connect();
    console.log("Connected to Mongo...");

    this.db = client.db(dbName);
    console.log(`'${dbName}' database is selected`);
  },
};

module.exports = mongo;
