const jwt = require('jsonwebtoken');

function userLoggedIn (req, res, next) {

        const token = req.headers['x-access-token'];
        if (!token) res.status(401).send({ msg: "Access not authentified"});
        else {
          jwt.verify(token, "anythingWEcanPassHere", function(err, decoded) {
            if (err) res.status(401).send({ msg: err.message});
            else {
              req.user_id = decoded.user_id;
              next(); 
          }
        }); 
      }
}

module.exports = userLoggedIn;