const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 80;
const mongooseConnect = require("./configs/mongoDB.connect");
const rateLimit = require("express-rate-limit");

app.use(cors());
app.use(express.json());

const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 500, // Limit each IP to 5 requests per windowMs
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
