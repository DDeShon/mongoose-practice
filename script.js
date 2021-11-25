const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb", () => {
  console.log("connected");
}),
  (e) => console.error(e);

async function run() {
  try {
    const user = await User.create({
      name: "Zachary",
      age: 31,
      email: "email@email.com",
      hobbies: ["Battlefield", "CoD", "Fortnight"],
      address: {
        street: "Main Street",
        city: "Main City",
        state: "Main State",
      },
    });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}

run();
