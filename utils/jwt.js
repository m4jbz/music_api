const jwt = require("jsonwebtoken");

const signAccessToken = (user) => {
  return jwt.sign(
    {
      sub: user._id,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

const signRefreshToken = () => {
  return jwt.sign(
    {},
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );
};

module.exports = {
  signAccessToken,
  signRefreshToken
};
