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
<<<<<<< Updated upstream
=======
const { setPoll, getPolls, getPoll } = require("./lib/polls");
const { setTask, getTasks, getTask } = require("./lib/tasks");
>>>>>>> Stashed changes

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

app.get("/api/polls/:ID", async (req, res) => {
  try {
    const ID = req.params.ID;
    const polls = await getPolls(ID);
    res.send(polls);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get("/api/poll/:ID", async (req, res) => {
  try {
    const ID = req.params.ID;
    const poll = await getPoll(ID);
    res.send(poll);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get("/api/tasks/:ID", async (req, res) => {
  try {
    const ID = req.params.ID;
    const tasks = await getTasks(ID);
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get("/api/task/:ID", async (req, res) => {
  try {
    const ID = req.params.ID;
    const task = await getTask(ID);
    res.send(task);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

//post routes

app.post("/api/event/", (req, res) => {
  try {
    const eventData = req.body;
    setEvent(eventData);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

<<<<<<< Updated upstream
=======
app.post("/api/poll/:ID", async (req, res) => {
  try {
    const ID = req.params.ID;
    const poll = req.body;
    await setPoll(poll, ID);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/api/task/:ID", async (req, res) => {
  const ID = req.params.ID;
  const task = req.body;
  await setTask(task, ID);
  res.end();
});
>>>>>>> Stashed changes
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
