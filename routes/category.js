var express = require('express');
var router = express.Router();
const db = require("../model/helper");


// GET categories
/* router.get("/category", function(req, res, next) {
  db("SELECT * FROM category;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}); */



module.exports = router;
