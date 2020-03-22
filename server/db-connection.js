const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017";

mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

module.exports = { mongoose };
