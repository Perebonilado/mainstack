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
        <div className="flex flex-col gap-2">
          <h3 className="text-base">{description}</h3>
          {type === "withdrawal" ? (
            <TransactionStatus status={status} />
          ) : (
            <p className="text-[#56616B] text-xs font-semibold">{name}</p>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-base font-bold text-right">USD {amount}</h3>
        <p className="text-[#56616B] text-xs text-right font-semibold">{date}</p>
      </div>
    </div>
  );
};

export default Transaction;
