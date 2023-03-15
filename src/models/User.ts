import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export type Callback = () => void;
const rootUrl = "http://localhost3000/users";

export class User {
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public events: Eventing = new Eventing();
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
