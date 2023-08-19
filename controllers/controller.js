let collection = require('../models/dog');

const postDog = (req, res) => {
    let dog = req.body;
    collection.postDog(dog, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: "success" });
        }
    });
}

const getAllDogs = (req, res) => {
    collection.getAllDogs((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: "success" });
        }
    });
}

module.exports = {postDog, getAllDogs}
