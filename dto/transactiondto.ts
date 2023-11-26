import { TransactionStatus } from "../models/TransactionStatus";
import { TransactionType } from "../models/TransactionType";

export interface TransactionDto {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: TransactionStatus;
  type: TransactionType;
  date: string;
}
