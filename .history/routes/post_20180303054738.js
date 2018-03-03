var express = require("express");
var router = express.Router();
let moment = require("moment");
router.get("/add", function(req, res, next) {
  res.render("addPost");
});
router.post("/add", function(req, res, next) {
  let db = req.db;
  let title = req.body.title;
  let body = req.body.body;
  let author = req.body.author;
  let category = req.body.category;
  let date = moment;
  db.post({});
  res.render("addPost");
});
module.exports = router;
