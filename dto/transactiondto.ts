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
  status: string;
  type: TransactionType;
  date: string;
}
