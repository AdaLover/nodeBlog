var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  let posts = req.db.get("posts");

  posts.find({}, (err, posts) => {
    console.log(posts);
    res.render("index", { posts: posts });
  });
});

module.exports = router;
