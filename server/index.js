const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const billingRoutes = require("./routes/billingRoutes.js");
const keys = require("./config/keys.js");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
// We have to require models first before services, else throws error
require("./models/User.js");
require("./models/Survey");
require("./services/passport.js");

// required to connect mongoose with our mongoDB
mongoose.connect(keys.mongoURI);

const app = express();

// !--------- MIDDLEWARE ---------!
// express middleware are wired up to express by using app.use

// everytime post request come to our app, bodyParse will parse the body,
// then assign it to the req.body
app.use(bodyParser.json());

// initialize cookie in this app
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// !--------- ROUTES -------------!
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js / main.css
  app.use(express.static("client/build"));

  // Express will serve up index.html file
  // if the client request a route that the express doesn't understand (not define in express route)
  // ,just serve up the index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

authRoutes(app);
billingRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
