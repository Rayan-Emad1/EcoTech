const mongooseConnect = require("./configs/mongoDB.connect");
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const os = require('os');

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

// Function to get the server's IP address
function getServerIP() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    const iface = interfaces[interfaceName];
    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address; // Return the first non-internal IPv4 address
      }
    }
  }
  return 'IP not found';
}

app.use(cors());
app.use(express.json());

const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
});

const authRouter = require("./routes/auth.routes");
app.use("/auth", authLimiter, authRouter);

const forestRouter = require("./routes/forest.routes");
app.use("/forest", forestRouter);

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  const serverIP = getServerIP();
  console.log(`Server is running on http://${serverIP}:${PORT}`);
  console.log("Note: This IP and Port# needs to be copied to the Client/constants/request.js BASE_URL");
  mongooseConnect();
});
