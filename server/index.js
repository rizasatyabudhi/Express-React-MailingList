const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const keys = require("./config/keys.js");
const cookieSession = require("cookie-session");
const passport = require("passport");
// We have to require models first before services, else throws error
require("./models/User.js");
require("./services/passport.js");

// required to connect mongoose with our mongoDB
mongoose.connect(keys.mongoURI);

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// initialize cookie in this app
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
