const { getCollection } = require("./db");
const { ObjectID } = require("mongodb");
const collectionName = "polls";

//get

async function getPolls(eventID) {
  const collection = await getCollection(collectionName);
  const cursor = await collection.find({ event: eventID });
  const results = await cursor.toArray();
  return results;
}

async function getPoll(pollID) {
  if (pollID === "0") {
    const result = { title: "", poll: [{ question: "", answers: [] }] };
    return result;
  } else {
    const ID = new ObjectID(pollID);
    const collection = await getCollection(collectionName);
    const result = await collection.findOne({ _id: ID });
    return result;
  }
}

//post
async function setPoll(poll, eventID) {
  const collection = await getCollection(collectionName);
  if (poll.pollID === "0") {
    await collection.insertOne({ event: eventID, title: poll.title, poll: poll.poll });
  } else {
    const ID = new ObjectID(poll.pollID);
    await collection.updateOne({ _id: ID }, { $set: { title: poll.title, poll: poll.poll } });
  }
}

exports.setPoll = setPoll;
exports.getPoll = getPoll;
exports.getPolls = getPolls;
