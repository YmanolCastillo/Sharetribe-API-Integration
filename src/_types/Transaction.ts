import { User } from "./User";

export interface Transaction {
  id: string;
  buyer: User;
  seller: User;
  status: string;
  createdAt: string;
}
