import axios from "axios";
import { User } from "./models/User";

const user = new User({ id: 1 });
user.set({ name: "efe", age: 999 });
user.save();
