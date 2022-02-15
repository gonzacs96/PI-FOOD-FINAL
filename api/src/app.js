const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const setHeaders = require("./middlewares/setHeaders");
const handleErrors = require("./middlewares/handleErrors");

require("./db.js");

const server = express();

server.name = "API";

//middlewares
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(setHeaders);

server.use("/", routes);

// Error catching endware.
server.use(handleErrors);

module.exports = server;
