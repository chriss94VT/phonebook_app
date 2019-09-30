const config = require("./utils/configUtils");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const cors = require("cors");
const entriesRouter = require("./controllers/entries");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");
const logger = require("./utils/logger");

mongoose.set("useFindAndModify", false);
//const morgan = require("morgan");
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.requestLogger);
app.use(cors());

// app.use(
//   morgan(function(tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, "content-length"),
//       "-",
//       tokens["response-time"](req, res),
//       "ms",
//       JSON.stringify(req.body)
//     ];
//   })
// );
logger.info(`connecting to ${config.url}`);

mongoose
  .connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    logger.info("Connected to the database");
  })
  .catch(error => {
    logger.error("error connection to database", error.message);
  });

app.use(middleware.tokenExtractor);
app.use("/api/auth", loginRouter);
app.use("/api/persons", entriesRouter);
app.use("/api/users", usersRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
