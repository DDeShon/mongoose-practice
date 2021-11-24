const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb", () => {
  console.log("connected");
}),
  (e) => console.error(e);

async function run() {
  const user = await User.create({ name: "Zachary", age: 17 });
  //   const user = new User({ name: "Damon", age: 41 });
  //   await user.save();
  console.log(user);
}

run();
