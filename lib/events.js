const { getCollection } = require("./db");
const { ObjectID } = require("mongodb");

const collectionName = "events";

async function setEvent(eventDatas) {
  const eventCollection = await getCollection(collectionName);
  await eventCollection.insertOne({ ...eventDatas });
}

async function getOwnEvents(name) {
  const eventCollection = await getCollection(collectionName);
  const cursor = await eventCollection.find({ owner: name });
  const results = cursor.toArray();
  return results;
}

async function deleteEvent(eventID) {
  const eventNr = new ObjectID(eventID);
  const eventCollection = await getCollection(collectionName);
  await eventCollection.deleteOne({ _id: eventNr });
}

exports.getOwnEvents = getOwnEvents;
exports.setEvent = setEvent;
exports.deleteEvent = deleteEvent;
