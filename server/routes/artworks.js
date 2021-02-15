const express = require("express");
const app = express();
const router = express.Router();

const artworks = __dirname + "../../model/artworks.json";
const art = require(artworks);
router.get("/", function(req, res) {
  console.log("hello");
  res.send(art);
  //res.json(art);
});

module.exports = router;
