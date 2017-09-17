const passport = require("passport");

module.exports = app => {
  // Whenever the user go to this route, they will be directed to google auth flow
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // Data that we get from google
      scope: ["profile", "email"]
    })
  );

  // Callback route after the user grant permission
  app.get("/auth/google/callback", passport.authenticate("google"));
};
