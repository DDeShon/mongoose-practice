const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb", () => {
  console.log("connected");
}),
  (e) => console.error(e);

async function run() {
  try {
    const user = await User.findOne({
      name: "Zachary",
      email: "email@email.com",
    });

    console.log(user);
    await user.save();
    console.log(user);
    console.log(user.namedEmail);
  } catch (e) {
    console.log(e.message);
  }
}

run();
