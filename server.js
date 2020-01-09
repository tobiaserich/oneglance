require("dotenv").config();
const express = require("express");

const { dbInit } = require("./lib/db");
const app = express();
const {
  getOwnEvents,
  getOneEvent,
  setEvent,
  deleteEvent,
  addUserToEvent,
  getUserList
} = require("./lib/events");
const { setUser } = require("./lib/user");
const { setPoll } = require("./lib/polls");
app.use(express.json({ extended: false }));

// get routes

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

app.get("/api/user/event/:ID", async (req, res) => {
  try {
    const userList = await getUserList(req.params.ID);
    res.send(userList);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

//post routes

app.post("/api/event/", (req, res) => {
  try {
    const eventData = req.body;
    console.log(req.body);
    setEvent(eventData);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/api/poll/:ID", (req, res) => {
  try {
    const ID = req.params.ID;
    const poll = req.body;
    setPoll(poll, ID);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});
// delete routes

app.delete("/api/event/del/:eventID", async (req, res) => {
  try {
    await deleteEvent(req.params.eventID);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// routes for postman
app.post("/api/user", (req, res) => {
  try {
    const userData = req.body;
    setUser(userData);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/api/event/user/:eventID", async (req, res) => {
  try {
    const user = req.body;
    addUserToEvent(user.id, req.params.eventID);
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
