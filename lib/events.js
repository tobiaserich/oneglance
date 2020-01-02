const { getCollection } = require("./db");

const collectionName = "events";

async function setEvent(eventDatas) {
  const eventCollection = await getCollection(collectionName);
  await eventCollection.insertOne({ ...eventDatas });
}

exports.setEvent = setEvent;
