const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: {
    type: Number,
    max: 5,
  },
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
  },
  email: {
    type: String,
    minLength: 10,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
});

userSchema.methods.sayHi = function () {
  console.log(`Hi. My name is ${this.name}.`);
};

userSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

userSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", userSchema);
