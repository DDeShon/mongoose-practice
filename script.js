const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb", () => {
  console.log("connected");
}),
  (e) => console.error(e);

async function run() {
  try {
    const user = await User.findByName("Zachary");

    console.log(user);
    user.sayHi();
  } catch (e) {
    console.log(e.message);
  }
}

run();
