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
router.get("/", getResource);

// GET one resource by id
router.get("/:id", function(req, res, next) {
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
router.get("/type/:id", function(req, res, next) {
  db(`SELECT * FROM resources WHERE type_id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new resource into the DB
router.post("/", function(req, res, next) {
  db(
    `INSERT INTO resources (name, description, thumbnail, indoor, age, category_id, type_id) VALUES ('${req.body.name}', '${req.body.description}', '${req.body.thumbnail}', '${req.body.indoor}', '${req.body.age}', '${req.body.category_id}', '${req.body.type_id}');`
  )
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

module.exports = router;
