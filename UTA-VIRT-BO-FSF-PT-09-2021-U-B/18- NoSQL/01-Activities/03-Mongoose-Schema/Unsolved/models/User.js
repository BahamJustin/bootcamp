const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  // Add these four attributes to your schema: username, password, email, userCreated
  // YOUR CODE HERE
  userName: {
    type: String,
    trim: true,
    required: "Username is required.",
  },
  password: {
    type: String,
    trim: true,
    required: "A password is required.",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", UserSchema);

module.exports = User;
