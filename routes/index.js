var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
var userLoggedIn = require("../guards/userLoggedIn");


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

// GET ages by id
router.get("/age/:id", function(req, res, next) {
  db(`SELECT * FROM age WHERE id=${req.params.id};`)
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
router.get("/category/:id/resources", function(req, res, next) {
  db(`SELECT * FROM resources WHERE category_id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one resource by type
router.get("/age/:id/resources", function(req, res, next) {
  db(`SELECT * FROM resources WHERE age_id=${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new resource into the DB
router.post("/resources", function(req, res, next) {
  db(
    `INSERT INTO resources (name, description, thumbnail, indoor, file, category_id, age_id) VALUES ('${req.body.name}', '${req.body.description}', '${req.body.thumbnail}', '${req.body.indoor}', '${req.body.file}', '${req.body.category_id}', '${req.body.age_id}');`
  )
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});


//REGISTRATION AND LOG IN

//INSERT a new USER into the DB
router.post("/users", async (req, res, next) => {
  try{
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash (req.body.password, 10)
  
  db(`INSERT INTO users (fullname, email, password, username) 
      VALUES ('${req.body.fullname}', '${req.body.email}', '${hashedPassword}', '${req.body.username}');`
  )
  
  res.status(201).send()
  
}catch {
    res.status(500).send()
  }
});

// GET users
router.get("/users", function(req, res, next) {
  db("SELECT * FROM users;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// DELETE USER from the DB -- 
router.delete("/users/:id", function(req, res, next) {
  db(`DELETE FROM users WHERE id=${req.params.id};`)
    .then(results => {
      const payload = { message: "ok" };
      res.send(payload);
    })
    .catch(err => res.status(500).send(err));
});




//USER LOG IN --- bcrypt.compare(req.body.password, user.password)

router.post("/login", function(req, res, next) {
  
  db(
    `SELECT id FROM users WHERE username = "${req.body.username}" AND password = "${req.body.password}"`
  ).then(results => {
    if (results.data.length) {
      const token = jwt.sign(
        {user_id : results.data[0].id},
        "anythingWEcanPassHere"
      ); res.send({message: "Log in successfull", token });
    } else 
      res.status(400).send({ message: "Login NOT successful" });
    
  });
});

//THE PROTECTED AREA
router.get("/profile", userLoggedIn, (req, res) => {
  db(`SELECT * FROM users WHERE id=${req.user_id}`).then(
    results => {
    res.send({ 
    msg: "Here is the Private info of USER logged in", 
    data: results.data
  });
 });
});

  
 module.exports = router;



  
  