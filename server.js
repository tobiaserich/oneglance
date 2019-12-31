require("dotenv").config();
const express = require("express");
const { dbInit } = require("./lib/db");
const app = express();
const { setEvent } = require("./lib/events");

app.use(express.json({ extended: false }));

app.get("/api/addEvent", (req, res) => res.send("geht"));

app.post("/api/addEvent", (req, res) => {
  const eventDatas = req.body;
  setEvent(eventDatas);
  res.end();
});

dbInit(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
