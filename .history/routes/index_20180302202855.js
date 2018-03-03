var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  let posts = req.db.get("posts");

  posts.find({}, (err, posts) => {
    res.render("index", {
      posts: posts,
      helpers: {
        moment: (value, options) => {
          return moment(value).format("dd/mmm/yyyy");
        }
      }
    });
  });
});

module.exports = router;
