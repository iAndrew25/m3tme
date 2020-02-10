const { sign } = require("jsonwebtoken");
module.exports = {
	setTokens: function(user) {
	  const sevenDays = 60 * 60 * 24 * 7 * 1000;
	  const fifteenMins = 60 * 15 * 1000;
	  const accessUser = {
	    id: user.id
	  };
	  const accessToken = sign(
	    { user: accessUser },
	    'catel',
	    {
	      expiresIn: fifteenMins
	    }
	  );
	  const refreshUser = {
	    id: user.id,
	    count: user.tokenCount
	  };
	  const refreshToken = sign(
	    { user: refreshUser },
	    'catel',
	    {
	      expiresIn: sevenDays
	    }
	  );

	  return { accessToken, refreshToken };
	}
};