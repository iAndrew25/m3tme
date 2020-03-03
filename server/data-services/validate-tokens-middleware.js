const {
  validateAccessToken
} = require("./validate-tokens");
const { setTokens } = require("./set-tokens");

module.exports = {
 validateTokensMiddleware: async function(req, res, next) {
  const accessToken = req.headers["x-access-token"];
  console.log("test" + accessToken)
  if (!accessToken) 
    {
      return next();
    }

  const decodedAccessToken = validateAccessToken(accessToken);
  if (decodedAccessToken && decodedAccessToken.user) {
    var {user} = decodedAccessToken;
    req.user = decodedAccessToken.user;
    const userToken = setTokens(user);
    res.set({
      "Access-Control-Expose-Headers": "x-access-token",
      "x-access-token": userToken
    });
    return next();
  }
  next();
}
};