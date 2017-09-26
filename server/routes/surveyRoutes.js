const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredit");

const Survey = mongoose.model("surveys");

// Acess the body from the request ( form values )

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients
    });
  });
};
