var express = require("express");
var router = express.Router();
var db = require("monk")("localhost/nodeBlog");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "codeoncoke" });
});

module.exports = router;
