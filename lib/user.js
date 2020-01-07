const { getCollection } = require("./db");

const collectionName = "user";

async function setUser(userData) {
  const userCollection = await getCollection(collectionName);
  await userCollection.insertOne({ ...userData });
}

exports.setUser = setUser;
