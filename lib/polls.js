const { getCollection } = require("./db");

const collectionName = "polls";

async function setPoll(poll, eventID) {
  const collection = await getCollection(collectionName);
  poll = [...poll];
  await collection.insertOne({ event: eventID, poll });
}

exports.setPoll = setPoll;
