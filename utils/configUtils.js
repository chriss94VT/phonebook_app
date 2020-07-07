require("dotenv").config();

// Adding new code to the branch
const httpPort = process.env.PORT;
const httpsPort = process.env.SECURE_PORT;
let url = process.env.DB_URI;

// New comments for commit
if (process.env.NODE_ENV === "development") {
  url = process.env.DEV_DB_URI;
} else if (process.env.NODE_ENV === "test") {
  url = process.env.TEST_DB_URI;
}

module.exports = {
  url,
  httpPort,
  httpsPort
};
