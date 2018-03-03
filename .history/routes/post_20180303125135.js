var express = require("express");
var router = express.Router();
let ObjectId = require("mongodb").ObjectId;
let upload = require("multer")({ dest: "./public/images/" });
let moment = require("moment");
router.get("/add", function(req, res, next) {
  res.render("addPost");
});
router.get("/show/:id", function(req, res, next) {
  let db = req.db;
  let posts = db.get("posts");
  let o_id = new ObjectId(req.params.id);
  posts.findOne({ _id: o_id }),
    (err, data) => {
      console.log(data);
      if (err) console.log(err);
      else {
        let postObj = {
          title: data.title,
          body: data.body,
          author: data.author,
          cover: data.cover,
          category: data.category,
          date: data.date
        };
        console.log(postObj);
        res.render("showPost", postObj);
      }
    };
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
