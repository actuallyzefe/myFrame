import { User } from "./models/User";

const user = new User({ name: "efe", age: 12 });

user.on("change", () => {
  console.log("Chanded");
});
user.on("change", () => {
  console.log("Chanded 2");
});
user.on("change", () => {
  console.log("Chanded 3");
});

user.trigger("change");
