const myConnection = require("mongoose");

const url = "mongodb://127.0.0.1:27017/finance";

myConnection.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = myConnection.connection;

db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});

module.exports = db;
