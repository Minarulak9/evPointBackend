const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const evsRouter = require("./routers/evsRouter");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("db connection succsesful");
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.log(err);
    console.log("Sorry something is wrong connection faield");
  });
app.use("/points", evsRouter);
app.use("/", (req, res) => {
  res.status(200).json({
    root: "hello",
  });
});
