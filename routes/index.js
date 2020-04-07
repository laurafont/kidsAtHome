var express = require('express');
var router = express.Router();
const db = require("../model/helper");

function getResource(req, res) {
  db("SELECT * FROM resources;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}

// GET resource list
router.get("/resources", getResource);

// GET categories
router.get("/category", function(req, res, next) {
  db("SELECT * FROM category;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET categories by id
router.get("/category/:id", function(req, res, next) {
  db(`SELECT * FROM category WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one resource by id
router.get("/resources/:id", function(req, res, next) {
  db(`SELECT * FROM resources WHERE id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


// GET one resource by category
router.get("/category/:id", function(req, res, next) {
  db(`SELECT * FROM resources WHERE category_id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one resource by type
router.get("/age/:id", function(req, res, next) {
  db(`SELECT * FROM resources WHERE age_id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new resource into the DB
router.post("/", function(req, res, next) {
  db(
    `INSERT INTO resources (name, description, thumbnail, indoor, file, category_id, age_id) VALUES ('${req.body.name}', '${req.body.description}', '${req.body.thumbnail}', '${req.body.indoor}', '${req.body.file}', '${req.body.category_id}', '${req.body.age_id}');`
  )
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

module.exports = router;



  
  