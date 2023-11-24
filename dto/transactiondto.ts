export interface TransactionDto {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: 1;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}
