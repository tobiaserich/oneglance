const { getCollection } = require("./db");
const { ObjectID } = require("mongodb");

const collectionName = "events";

// get functions

async function getOwnEvents(name) {
  const eventCollection = await getCollection(collectionName);
  const cursor = await eventCollection.find({ owner: name });
  const results = cursor.toArray();
  return results;
}

async function getOneEvent(eventID) {
  const id = new ObjectID(eventID);
  const eventCollection = await getCollection(collectionName);
  const result = await eventCollection.findOne({ _id: id });
  return result;
}

//post functions

async function setEvent(eventDatas) {
  const eventCollection = await getCollection(collectionName);
  await eventCollection.insertOne({ ...eventDatas });
}
// delete functions

async function deleteEvent(eventId) {
  const eventID = new ObjectID(eventId);
  const eventCollection = await getCollection(collectionName);
  await eventCollection.deleteOne({ _id: eventID });
}

exports.getOwnEvents = getOwnEvents;
exports.getOneEvent = getOneEvent;
exports.setEvent = setEvent;
exports.deleteEvent = deleteEvent;
