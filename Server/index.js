const mongooseConnect = require("./configs/mongoDB.connect");
const express = require("express");
const app = express();
require("dotenv").config();
const rateLimit = require("express-rate-limit");

const cors = require("cors");
const PORT = process.env.PORT || 8080;

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
  console.log(`server running on port: ${PORT} `);
  mongooseConnect();
});
