var express = require("express");
var router = express.Router();
let upload = require("multer")({ dest: "./public/images/" });
let moment = require("moment");
router.get("/add", function(req, res, next) {
  res.render("addPost");
});
router.get("/show/$id", function(req, res, next) {
  let db = req.db;
  db.get("posts");
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
