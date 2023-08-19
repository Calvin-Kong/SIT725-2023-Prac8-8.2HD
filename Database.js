const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://Night:SIT725_2023@cluster0.vj8ihdh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

client.connect();

module.exports = client;