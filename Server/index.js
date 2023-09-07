const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());





app.listen(8000, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("server running on port: ", 8000);

});
