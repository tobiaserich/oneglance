require("dotenv").config();
const express = require("express");
const { dbInit } = require("./lib/db");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;
const {
  getEvents,
  getEvent,
  setEvent,
  deleteEvent,
  addUserToEvent,
  getUserList
} = require("./lib/events");
const { setUser } = require("./lib/user");
const { setPoll, getPolls, getPoll } = require("./lib/polls");
const { setTask, getTasks, getTask } = require("./lib/tasks");

//middleware
app.use(express.json({ extended: false }));

// get routes

app.get("/api/events/user/:username", async (req, res) => {
  try {
    const result = await getEvents(req.params.username);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status404.send("There are no events");
  }
});

app.get("/api/events/:eventID", async (req, res) => {
  try {
    const result = await getEvent(req.params.eventID);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status404.send("The event you are looking for is not available ");
  }
});

app.get("/api/events/:ID/users", async (req, res) => {
  try {
    const userList = await getUserList(req.params.ID);
    res.send(userList);
  } catch (error) {
    console.error(error);
    res.status404.send("No userlist found");
  }
});

app.get("/api/events/:ID/polls", async (req, res) => {
  try {
    const ID = req.params.ID;
    const polls = await getPolls(ID);
    res.send(polls);
  } catch (error) {
    console.error(error);
    res.status404.send("No polls found");
  }
});

app.get("/api/polls/:ID", async (req, res) => {
  try {
    const ID = req.params.ID;
    const poll = await getPoll(ID);
    res.send(poll);
  } catch (error) {
    console.error(error);
    res.status404.send("No poll found");
  }
});

app.get("/api/events/:ID/tasks", async (req, res) => {
  try {
    const ID = req.params.ID;
    const tasks = await getTasks(ID);
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.status404.send("No tasks found");
  }
});

app.get("/api/tasks/:ID", async (req, res) => {
  try {
    const ID = req.params.ID;
    const task = await getTask(ID);
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status404.send("No task found");
  }
});

//post routes

app.post("/api/events/", (req, res) => {
  try {
    const eventData = req.body;
    setEvent(eventData);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/api/polls/:eventID", async (req, res) => {
  try {
    const ID = req.params.eventID;
    const poll = req.body;
    await setPoll(poll, ID);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/api/events/:eventID/tasks", async (req, res) => {
  try {
    const ID = req.params.eventID;
    const task = req.body;
    await setTask(task, ID);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// delete routes

app.delete("/api/events/:eventID", async (req, res) => {
  try {
    await deleteEvent(req.params.eventID);
    res.end();
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// dev routes

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

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));

// Handle React routing, return all requests to React app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

dbInit(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || "8080"}`);
  });
});
