import { TransactionStatus } from "./TransactionStatus";
import { TransactionType } from "./TransactionType";

export interface TransactionModel {
  status: TransactionStatus;
  name: string;
  description: string;
  date: string;
  type: TransactionType;
  amount: number;
}
