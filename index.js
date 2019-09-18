const app = require("./app");
// const http = require("http");
const https = require("https");
const fs = require("fs");
const config = require("./utils/configUtils");

const creds = {
  key: fs.readFileSync("./ssl/key.pem", "utf8"),
  cert: fs.readFileSync("./ssl/cert.pem", "utf8")
};

const httpsServer = https.createServer(creds, app);
// const httpServer = http.createServer(app);

httpsServer.listen(config.httpsPort, () => {
  console.log(`Server running on secure port ${config.httpsPort}`);
});

// httpServer.listen(config.httpPort, () => {
//   console.log(`Server running on port ${config.httpPort}`);
// });
