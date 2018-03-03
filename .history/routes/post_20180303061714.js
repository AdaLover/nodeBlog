var express = require("express");
var router = express.Router();
let upload = require("multer")({ dest: "./uploads" });
let moment = require("moment");
router.get("/add", function(req, res, next) {
  res.render("addPost");
});
router.post("/add", upload.single("cover"), function(req, res, next) {
  let postObj = {
    db: req.db,
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    cover: req.file.filename,
    category: req.body.category,
    date: moment().format("DD/MMM/YYYY")
  };
  db.post(postObj);
  res.render("index");
});
module.exports = router;
