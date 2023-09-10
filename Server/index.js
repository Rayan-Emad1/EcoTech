const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const mongooseConnect = require("./configs/mongoDB.connect");
const rateLimit = require("express-rate-limit");

app.use(cors());
app.use(express.json());

const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,     // 10 minutes
  max: 5,                      // Limit each IP to 5 requests per windowMs
});

app.use("/auth", authLimiter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const forestRouter = require("./routes/forest.routes");
app.use("/forest", forestRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`server running on port: ${PORT} `);
  mongooseConnect();
});
