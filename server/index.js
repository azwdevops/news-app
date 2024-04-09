const express = require("express");
require("dotenv").config();
const cors = require("cors");

const newsRouter = require("./routers/newsRoutes");

const app = express();

const corsConfig = {
  origin: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(express.static("public"));
app.use(express.static("database/uploads"));
app.use("/api", newsRouter);

app.listen(`${process.env.PORT}`, () => {
  console.log(`listening on ${process.env.PORT}`);
});
