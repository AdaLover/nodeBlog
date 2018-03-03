var express = require("express");
var router = express.Router();
var mongoDB = require("mongodb");
var db = require("monk")("localhost/nodeBlog");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "codeoncoke" });
  var posts = req.db.get("posts");
});

module.exports = router;
