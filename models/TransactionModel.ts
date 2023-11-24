import { TransactionType } from "./TransactionType";

export interface TransactionModel {
    status: string;
    name: string;
    description: string;
    date: string;
    type: TransactionType
}