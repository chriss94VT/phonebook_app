require("dotenv").config();

const httpPort = process.env.PORT;
const httpsPort = process.env.SECURE_PORT;
let url = process.env.DB_URI;

if (process.env.NODE_ENV === "development") {
  url = process.env.DEV_DB_URI;
} else if (process.env.NODE_ENV === "test") {
  url = process.env.TEST_DB_URI;
}

// Modules to export
module.exports = {
  url,
  httpPort,
  httpsPort
};
