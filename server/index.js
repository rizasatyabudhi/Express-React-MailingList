const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const keys = require("./config/keys.js");
require("./services/passport.js");

const app = express();

// required to connect mongoose with our mongoDB
mongoose.connect(keys.mongoURI);

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
