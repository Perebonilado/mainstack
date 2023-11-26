import React, { FC } from "react";
import { TransactionModel } from "../../models/TransactionModel";
import Transaction from "./Transaction";

interface Props {
  transactions: TransactionModel[];
}

const TransactionContainer: FC<Props> = ({ transactions }) => {
  return (
    <div className="flex flex-col gap-6 py-12">
      {transactions.map((tx, idx) => (
        <Transaction {...tx} key={idx} />
      ))}
    </div>
  );
};

export default TransactionContainer;
