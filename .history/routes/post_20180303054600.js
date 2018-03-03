var express = require("express");
var router = express.Router();

router.get("/add", function(req, res, next) {
  res.render("addPost");
});
router.post("/add", function(req, res, next) {
  res.render("addPost");
});
module.exports = router;
