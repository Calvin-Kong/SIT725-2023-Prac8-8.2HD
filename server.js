var express = require("express");
var app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://Night:SIT725_2023@cluster0.vj8ihdh.mongodb.net/?retryWrites=true&w=majority";
var port = process.env.port || 3000;
let collection;

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    collection = client.db().collection("Dogs");
    console.log(collection);
  } catch (ex) {
    console.error(ex);
  }
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


app.get("/", function (req, res) {
  res.render("../views/pages/index.ejs");
});

app.post("/api/dog", (req, res) => {
  let dog = req.body;
  postDog(dog, (err, result) => {
    if (!err) {
      res.json({ statusCode: 201, data: result, message: "success" });
    }
  });
});

function postDog(dog, callback) {
  collection.insertOne(dog, callback);
}

app.get("/api/dogs", (req, res) => {
  getAllDogs((err, result) => {
    if (!err) {
      res.json({ statusCode: 200, data: result, message: "success" });
    }
  });
});

function getAllDogs(callback) {
  collection.find({}).toArray(callback);
}

app.listen(port, () => {
  console.log("App listening to: " + port);
  run();
});
