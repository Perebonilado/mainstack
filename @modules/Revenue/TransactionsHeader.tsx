import React, { FC } from "react";
import Button from "../../@shared/Button";
import ChevronDown from "../../@icons/ChevronDownIcon";
import DownloadIcon from "../../@icons/DownloadIcon";

interface Props {
  transactionsCount: number;
  onFilterClicked: () => void;
}

const TransactionsHeader: FC<Props> = ({ transactionsCount, onFilterClicked }) => {
  return (
    <div className="flex items-center justify-between py-6 border-b border-[#EFF1F6]">
      <div>
        <h2 className="text-xl font-extrabold">
          {transactionsCount === 1
            ? `${transactionsCount} Transaction`
            : `${transactionsCount} Transactions`}
        </h2>
        <p className="text-xs text-[#56616B]">
          Your transactions for the last 7 days
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Button
          title="Filter"
          color="secondary"
          variant="contained"
          size="large"
          endIcon={<ChevronDown />}
          onClick={onFilterClicked}
        />
        <Button
          title="Export list"
          color="secondary"
          variant="contained"
          size="large"
          endIcon={<DownloadIcon />}
        />
      </div>
    </div>
  );
};

export default TransactionsHeader;
