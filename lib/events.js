const { getCollection } = require("./db");

const collectionName = "events";

async function setEvent(eventDatas) {
  const eventCollection = await getCollection(collectionName);
  await eventCollection.insertOne({ ...eventDatas });
}

async function getOwnEvents(name) {
  const eventCollection = await getCollection(collectionName);
  const cursor = await eventCollection.find();
  const results = cursor.toArray();
  return results;
}

exports.getOwnEvents = getOwnEvents;
exports.setEvent = setEvent;
