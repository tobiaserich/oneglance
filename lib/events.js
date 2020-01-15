const { getCollection } = require("./db");
const { ObjectID } = require("mongodb");

const collectionName = "events";

// get functions

async function getEvents(name) {
  const collection = await getCollection(collectionName);
  const cursor = await collection.find({ owner: name });
  const results = cursor.toArray();
  return results;
}

async function getEvent(eventID) {
  const id = new ObjectID(eventID);
  const collection = await getCollection(collectionName);
  const result = await collection.findOne({ _id: id });
  return result;
}

async function getUserList(eventID) {
  const emptyUser = [
    {
      userID: "000",
      userName: "No User",
      img: "000"
    }
  ];
  const id = new ObjectID(eventID);
  const collection = await getCollection(collectionName);
  const result = await collection.findOne({ _id: id });

  return result.user ? result.user : emptyUser;
}
//post functions

async function setEvent(eventData) {
  const collection = await getCollection(collectionName);
  await collection.insertOne({ ...eventData });
}

async function addUserToEvent(userID, eventID) {
  const eventId = new ObjectID(eventID);
  const userId = new ObjectID(userID);
  const eventCollection = await getCollection(collectionName);
  const userCollection = await getCollection("user");

  const userInfo = await userCollection.findOne({ _id: userId });
  const eventInfo = await eventCollection.findOne({ _id: eventId });
  const user = eventInfo.user ? [...eventInfo.user] : [];

  user.push({ userID: userInfo._id, userName: userInfo.name, img: userInfo.img });
  await eventCollection.updateOne({ _id: eventId }, { $set: { user: user } });
}

// delete functions

async function deleteEvent(eventId) {
  const eventID = new ObjectID(eventId);
  const collection = await getCollection(collectionName);
  await collection.deleteOne({ _id: eventID });
}

exports.getEvents = getEvents;
exports.getEvent = getEvent;
exports.getUserList = getUserList;

exports.setEvent = setEvent;
exports.addUserToEvent = addUserToEvent;
exports.deleteEvent = deleteEvent;
