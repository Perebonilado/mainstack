import React, { FC } from "react";

import cn from "classnames";

interface Props {
  amount: string;
  title: string;
  amountSize?: "large" | "extralarge";
}

const WalletItem: FC<Props> = ({ title, amount, amountSize = "large" }) => {
  const amountSizeStyling = cn({
    "text-xl": amountSize === "large",
    "text-3xl": amountSize === "extralarge",
  });

  return (
    <div className="flex">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-[#56616B]">{title}</p>
        <p className={`font-extrabold ${amountSizeStyling}`}>USD {amount}</p>
      </div>
    </div>
  );
};

export default WalletItem;
