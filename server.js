require("dotenv").config();
const express = require("express");
const { dbInit } = require("./lib/db");
const app = express();
const { getOwnEvents, getOneEvent, setEvent, deleteEvent } = require("./lib/events");

app.use(express.json({ extended: false }));

app.get("/api/event/user/:username", async (req, res) => {
  try {
    const result = await getOwnEvents(req.params.username);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get("/api/event/:eventID", async (req, res) => {
  try {
    const result = await getOneEvent(req.params.eventID);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/api/event/", (req, res) => {
  try {
    const eventDatas = req.body;
    setEvent(eventDatas);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.delete("/api/event/del/:eventID", async (req, res) => {
  try {
    await deleteEvent(req.params.eventID);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

dbInit(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
