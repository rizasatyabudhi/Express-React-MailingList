module.exports = (req, res, next) => {
  // if user credits is less than 1, throw error
  // 400-499 = the user's request is error (something is wrong with the request)
  // 403 = Forbidden
  if (req.user.credits < 1) {
    res.status(403).send({ error: "Not enough credits!" });
  }
  next();
};
