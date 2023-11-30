import React, { FC } from "react";
import { WalletModel } from "../../models/WalletModel";
import WalletItem from "./WalletItem";
import Button from "../../@shared/Button";
import TransactionsChart from "./TransactionsChart";
import { TransactionModel } from "../../models/TransactionModel";

interface Props extends WalletModel {
  transactions: TransactionModel[];
}

const WalletInfoContainer: FC<Props> = (props) => {
  const keysToOmitForWalletSummary = ["balance"];

  const handleOmitKeyFromWalletSummary = (key: string) => {
    return keysToOmitForWalletSummary.indexOf(key) !== -1;
  };

  const chartData = props.transactions.map((tx) => tx.amount);
  const chartStartLabel = props.transactions[0].date || '';
  const chartEndLabel = props.transactions[props.transactions.length - 1].date || '';

  return (
    <div className="flex min-h-[400px] mb-20 gap-6">
      <div style={{ flex: 3 }}>
        <div className="flex items-center gap-12">
          <WalletItem
            amount={props.balance.amount}
            title="Available Balance"
            amountSize="extralarge"
          />
          <Button title="Withdraw" size="large" className="!py-4 !px-12" />
        </div>
        <div className="h-[300px] pt-8">
          <TransactionsChart
            labels={[chartStartLabel, chartEndLabel]}
            chartData={chartData}
          />
        </div>
      </div>
      <div style={{ flex: 1 }} className="flex flex-col gap-6">
        {Object.entries(props).map(([key, { label, amount, toolTip }], idx) => {
          return handleOmitKeyFromWalletSummary(key) ? null : (
            <WalletItem
              amount={amount}
              title={label}
              key={idx}
              id={`${idx}`}
              toolTipContent={toolTip}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WalletInfoContainer;
