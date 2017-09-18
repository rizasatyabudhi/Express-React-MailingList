// key.js
if (process.env.NODE_ENV === "production") {
  // return prod keys
  module.exports = require("./prod.js");
} else {
  // return dev keys
  module.exports = require("./dev.js");
}
