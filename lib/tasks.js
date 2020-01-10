const { getCollection } = require("./db");
const { ObjectID } = require("mongoDB");

const collectionName = "tasks";

//get

async function getTasks(eventID) {
  const collection = await getCollection(collectionName);
  const cursor = await collection.find({ event: eventID });
  const results = await cursor.toArray();
  return results;
}

async function getTask(taskID) {
  if (taskID === "0") {
    const result = { title: "", task: [] };
    return result;
  } else {
    const ID = new ObjectID(taskID);
    const collection = await getCollection(collectionName);
    const result = await collection.findOne({ _id: ID });
    return result;
  }
}
//post

async function setTask(task, EventID) {
  const collection = await getCollection(collectionName);
  if (task.taskID === "0") {
    await collection.insertOne({
      event: EventID,
      title: task.title,
      task: task.task
    });
  }
}
//delete

exports.setTask = setTask;
exports.getTask = getTask;
exports.getTasks = getTasks;
