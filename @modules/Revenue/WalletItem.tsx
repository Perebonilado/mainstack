import React, { FC } from "react";
import ToolTip from "../../@shared/ToolTip";

import cn from "classnames";

interface Props {
  amount: string;
  title: string;
  amountSize?: "large" | "extralarge";
  id?: string;
  toolTipContent?: string;
}

const WalletItem: FC<Props> = ({
  title,
  amount,
  amountSize = "large",
  id,
  toolTipContent,
}) => {
  const amountSizeStyling = cn({
    "text-xl": amountSize === "large",
    "text-3xl": amountSize === "extralarge",
  });

  return (
    <>
      <div
        className="flex relative"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#56616B]">{title}</p>
          <p className={`font-bold ${amountSizeStyling}`}>USD {amount}</p>
        </div>
        {toolTipContent && id && (
          <span className="absolute top-0 right-0">
            <ToolTip content={toolTipContent} toolTipId={id} />
          </span>
        )}
      </div>
    </>
  );
};

export default WalletItem;
