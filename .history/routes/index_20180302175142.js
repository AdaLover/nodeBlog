var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "codeoncoke" });
  var posts = req.db.get("posts");
  posts.find({}, {}, (err, posts) => {
    res.render("inbox", { posts });
  });
});

module.exports = router;
