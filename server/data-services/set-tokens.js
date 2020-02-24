const { sign } = require("jsonwebtoken");
module.exports = {
	setTokens: function(user) {
	  const accessUser = {
	    id: user.id
	  };
	  const accessToken = sign(
	    { user: accessUser },
	    'catel'
	  );
	  return accessToken;
	}
};