const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const keys = require("./config/keys.js");

// We have to require models first before services, else throws error
require("./models/User.js");
require("./services/passport.js");

// required to connect mongoose with our mongoDB
mongoose.connect(keys.mongoURI);

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
