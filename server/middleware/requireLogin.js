// this middleware will only be called in certain place,
// whereas middlewares (app.use) in the index.js will be called everywhere
// "next" param = function that we call when our middleware is complete
module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401).send({ error: "login first!" });
  }

  // if the user has signed in, go next
  next();
};
