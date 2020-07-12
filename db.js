const mongoose = require("mongoose");
class Database {
  constructor() {
    this._connect;
  }
  _connect() {
    mongoose
      .connect(
        "mongodb+srv://Mahmoud:<password>@cluster0.h0gxs.mongodb.net/<dbname>?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      )
      .then(() => {
        console.log("Database connected");
      })
      .catch(() => {
        console.log("Database connection error");
      });
  }
}
module.exports = new Database();