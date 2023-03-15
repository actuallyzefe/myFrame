import { UserProps } from "./User";

export class Attributes<T extends object> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    // Keyof => K yalnızca T nin keylerinden olabilir. // T[K] ise normal object gorevıdır T objesının[K] elemanını return eder
    return this.data[key];
  }
  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({ id: 5, age: 31, name: "neeee" });
const name = attrs.get("name");
