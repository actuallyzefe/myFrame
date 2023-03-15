import axios from "axios";
import { User } from "./models/User";

const user = new User({ name: "safasfdsa" });

user.events.on("change", () => {
  console.log("CHANGE");
});
user.events.trigger("change");
console.log(user);
