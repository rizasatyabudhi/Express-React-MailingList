const mongoose = require("mongoose");
const { Schema } = mongoose;

// MODEL CLASS CREATION
// Schema describe what every single property looks like
const userSchema = new Schema({
  googleID: String
});

// 1st parameter =  name of the class / collection
mongoose.model("users", userSchema);
