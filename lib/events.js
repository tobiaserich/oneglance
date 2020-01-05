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

async function deleteEvent(eventId) {
  const eventID = new ObjectID(eventId);
  const eventCollection = await getCollection(collectionName);
  await eventCollection.deleteOne({ _id: eventID });
}

exports.getOwnEvents = getOwnEvents;
exports.setEvent = setEvent;
exports.deleteEvent = deleteEvent;
