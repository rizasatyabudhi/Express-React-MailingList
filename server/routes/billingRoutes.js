// we import the keys.js , so it can detect whether it's prod or dev
const keys = require("../config/keys");
const requireLogin = require("../middleware/requireLogin");

// 2nd param = stripe secret key
const stripe = require("stripe")(keys.stripeSecretKey);
module.exports = app => {
  // 1st param = route
  // 2nd param = middleware
  // 3nd param = response handler
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // when we post request from browser, their will be no response,
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 Credits",
      // The ID from stripe credit card
      source: req.body.id
    });

    // everytime user has already signed in, we can access the current user model with req.user
    req.user.credits += 5;
    const user = await req.user.save();
  });
};
