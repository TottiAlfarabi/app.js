const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv/config");

// middleWare body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// routes import
const sekolahRoutes = require("./routes/sekolah");

// middleWare daftar
app.use("/sekolah", sekolahRoutes);

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let x = mongoose.connection;

x.on("error", console.error.bind(console, "error!!"));
x.once("open", () => {
  console.log("connected!");
});

app.listen(process.env.PORT, () => {
  console.log(`server running ${process.env.PORT}`);
});
