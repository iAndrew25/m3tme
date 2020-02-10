const jwt = require("jsonwebtoken");

module.exports = {

		validateAccessToken: function(token) {
  try {
    var validated = jwt.verify(token, 'catel'.toString());
    return validated;
  } 
  catch(e) {
    console.log(e);
    return null;
  }
},

 validateRefreshToken: function(token) {
  try {
    var validated = jwt.verify(token, 'catel'.toString());
    return  validated;
  } 
  catch(e) {
    console.log(e);
    return null;
  }
}
};