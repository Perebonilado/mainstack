import React, { FC } from "react";
import { TransactionModel } from "../../models/TransactionModel";
import WithdrawalIcon from "../../@icons/WithdrawalIcon";
import DepositIcon from "../../@icons/DepositIcon";
import TransactionStatus from "./TransactionStatus";

interface Props extends TransactionModel {}

const transactionType = {
  withdrawal: <WithdrawalIcon />,
  deposit: <DepositIcon />,
} as const;

const Transaction: FC<Props> = ({
  date,
  description,
  name,
  status,
  type,
  amount,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        {transactionType[type]}
        <div>
          <h3 className="text-lg">{description}</h3>
          {type === "withdrawal" ? (
            <TransactionStatus status={status} />
          ) : (
            <p className="text-[#56616B] text-xs font-medium">{name}</p>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-extrabold text-right">USD {amount}</h3>
        <p className="text-[#56616B] text-xs text-right">{date}</p>
      </div>
    </div>
  );
};

export default Transaction;
