const mongoose = require("mongoose");
const { Schema } = mongoose;

// MODEL CLASS CREATION
// Schema describe what every single property looks like
// We can define default value of model
const userSchema = new Schema({
  googleID: String,
  credits: { type: Number, default: 0 }
});

// 1st parameter =  name of the class / collection
mongoose.model("users", userSchema);
