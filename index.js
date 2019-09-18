const app = require("./app");
const http = require("http");
const https = require("https");
const fs = require("fs");
const config = require("./utils/configUtils");

const creds = {
  key: fs.readFileSync("./ssl/key.pem", "utf8"),
  cert: fs.readFileSync("./ssl/cert.pem", "utf8")
};

if (process.env.NODE_ENV === "development") {
  const httpsServer = https.createServer(creds, app);

  httpsServer.listen(config.httpsPort, () => {
    console.log(`Server running on secure port ${config.httpsPort}`);
  });
} else {
  const httpServer = http.createServer(app);

  httpServer.listen(config.httpPort, () => {
    console.log(`Server running on port ${config.httpPort}`);
  });
}