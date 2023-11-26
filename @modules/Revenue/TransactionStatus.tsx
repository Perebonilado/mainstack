import React, { FC } from "react";

const status_ = {
  successful: <p className="text-xs text-[#0EA163] font-semibold">Successfull</p>,
  pending: <p className="text-xs text-[#A77A07] font-semibold">Pending</p>,
} as const;

interface Props {
  status: keyof typeof status_;
}

const TransactionStatus: FC<Props> = ({ status }) => {
  return status_[status];
};

export default TransactionStatus;
