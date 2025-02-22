const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/person");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      //console.log("Received Credentials :", username, password); // Corrected logging of credentials
      const user = await Person.findOne({ username: username }); // Corrected await usage
      if (!user) {
        return done(null, false, { message: "Incorrect Username" });
      }
      const isPasswordMatch = await user.comparePassword(password);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect Password" });
      }
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = passport;
