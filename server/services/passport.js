const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys.js");
const mongoose = require("mongoose");

// import users class
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // user.id = identifying piece of info that will identify user in the followup request
  // user.id is a reference to mongo DB user ID (not google ID)
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // 1st param = the token that we stuffed into the cookie (id)
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //  URL that the user will be sent to after they grant permission
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // If found googleID with the same id in mongoDB,
      // don't create a new instance, else create a new instance
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          // 1st argument = error message
          done(null, existingUser);
        } else {
          // make a new instance of users class everytime they go to google auth page
          // .save() to store instance to mongo DB (not just in local)
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
