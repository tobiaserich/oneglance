require("dotenv").config();
const express = require("express");
const { dbInit } = require("./lib/db");
const app = express();
const { setEvent, getOwnEvents, deleteEvent } = require("./lib/events");

app.use(express.json({ extended: false }));

app.get("/api/event/:username", async (req, res) => {
  try {
    const result = await getOwnEvents(req.params.username);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/api/event", (req, res) => {
  const eventDatas = req.body;
  setEvent(eventDatas);
  res.end();
});

app.delete("/api/event/del/:eventID", (req, res) => {
  deleteEvent(req.params.eventID);
  res.end();
});

dbInit(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
