const express = require("express");
require("dotenv").config();

const newsRouter = require("./routers/newsRoutes");

const app = express();

app.use(express.static("public"));
app.use(express.static("database/uploads"));
app.use("/api", newsRouter);

app.listen(`${process.env.PORT}`, () => {
  console.log(`listening on ${process.env.PORT}`);
});
