const express = require("express");
const router = express.Router();

const { ObjectId } = require("mongodb");

const mongo = require("../mongo");

// READ
router.get("/", async (req, res) => {
  const posts = await mongo.db.collection("posts").find().toArray();
  res.send(posts);
});

router.get("/:id", async (req, res) => {
  const posts = await mongo.db.collection("posts").findOne( { _id: ObjectId(req.params.id) });
  res.send(posts);
});

// CREATE
router.post("/", async (req, res) => {
  // req.body => Body data
  const post = await mongo.db.collection("posts").insertOne(req.body);
  res.send(post);
});

// UPDATE
router.put("/:id", async (req, res) => {
  // req.params => URL Parameters
  const post = await mongo.db
    .collection("posts")
    .findOneAndUpdate(
      { _id: ObjectId(req.params.id) },
      { $set: req.body },
      { returnDocument: "after" }
    );
  res.send(post);
});

// DELETE
router.delete("/:id", async (req, res) => {
  // req.params => URL Parameters
  const post = await mongo.db
    .collection("posts")
    .remove({ _id: ObjectId(req.params.id) });
  res.send(post);
});

module.exports = router;
