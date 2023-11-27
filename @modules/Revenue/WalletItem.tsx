import React, { FC } from "react";

interface Props {
  amount: string;
  title: string;
}

const WalletItem: FC<Props> = ({ title, amount }) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        <p className="text-xs text-[#56616B]">{title}</p>
        <p>USD {amount}</p>
      </div>
    </div>
  );
};

export default WalletItem;
