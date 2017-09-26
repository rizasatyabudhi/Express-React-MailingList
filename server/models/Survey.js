const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");
// We use subdocument collection to when we want to have association between 2 given records
// example: survey has a subdocument collection which is recipients
// mongoDB has a limit of 4mb per record
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  // array of recipientSchema (subdocument collection)
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  // _ indicates that this is a reference field, that surveySchema belongs to userSchema (ref:'User')
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("surveys", surveySchema);
