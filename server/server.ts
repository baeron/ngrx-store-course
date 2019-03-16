const express = require("express");
import { Application } from "express";
import { loginUser } from "./auth.route";

const bodyParser = require("body-parser");
const app: Application = express();

app.use(bodyParser.json());

app.route("/api/login").post(loginUser);

app.get("/", (req, res) => {
  res.send("Hello Back-end!");
});

const httpServer = app.listen(9001, () => {
  console.log(
    "HTTP REST API Server running at http://localhost:" +
      httpServer.address().port
  );
});
