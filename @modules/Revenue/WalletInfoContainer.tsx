import React, { FC } from "react";
import { WalletModel } from "../../models/WalletModel";
import WalletItem from "./WalletItem";
import Button from "../../@shared/Button";

interface Props extends WalletModel {}

const WalletInfoContainer: FC<Props> = (props) => {
  const keysToOmitForWalletSummary = ["balance"];

  const handleOmitKeyFromWalletSummary = (key: string) => {
    return keysToOmitForWalletSummary.indexOf(key) !== -1;
  };

  return (
    <div className="flex min-h-[400px] mb-20">
      <div style={{ flex: 3 }}>
        <div className="flex items-center gap-12">
          <WalletItem
            amount={props.balance.amount}
            title="Available Balance"
            amountSize="extralarge"
          />
          <Button title="Withdraw" size="large" className="!py-4 !px-12" />
        </div>
      </div>
      <div style={{ flex: 1 }} className="flex flex-col gap-6">
        {Object.entries(props).map(([key, { label, amount }]) => {
          return handleOmitKeyFromWalletSummary(key) ? null : (
            <WalletItem amount={amount} title={label} />
          );
        })}
      </div>
    </div>
  );
};

export default WalletInfoContainer;
