var express = require("express");
var router = express.Router();
let upload = require("multer")({ dest: "./public/images/" });
let moment = require("moment");
router.get("/add", function(req, res, next) {
  res.render("addPost");
});
router.get("/show/:id", function(req, res, next) {
  console.log(req.params.id);
  let db = req.db;
  let posts = db.get("posts");
  console.log(posts);
  let post = posts.findById({ _id: req.params.id });
  let postObj = {
    title: post.title,
    body: post.body,
    author: post.author,
    cover: post.cover,
    category: post.category,
    date: post.date
  };
  console.log(postObj);
  res.render("showPost", postObj);
});
router.post("/add", upload.single("cover"), function(req, res, next) {
  let db = req.db;
  let postObj = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    cover: req.file.filename,
    category: req.body.category,
    date: moment().format("DD/MMM/YYYY")
  };
  let postsDB = db.get("posts");
  postsDB.insert(postObj, (err, data) => {
    if (err) console.log(err);
    else {
      req.flash("success", "post added");
      res.location("/");
      res.redirect("/");
    }
  });
});
module.exports = router;
