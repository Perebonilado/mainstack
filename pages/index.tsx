import type { NextPage } from "next";
import { useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import TransactionsHeader from "../@modules/Revenue/TransactionsHeader";
import { useRetrieveAllTransactionsQuery } from "../api-services/transactionsApi";
import TransactionContainer from "../@modules/Revenue/TransactionContainer";
import ReloadOnError from "../@shared/ReloadOnError";
import { useRetrieveWalletInfoQuery } from "../api-services/walletApi";
import WalletInfoContainer from "../@modules/Revenue/WalletInfoContainer";
import AppHead from "../@shared/AppHead";

const Home: NextPage = () => {
  const {
    data: transactions,
    isLoading: transactionsLoading,
    error: transactionsError,
    refetch: refetchTransactions,
  } = useRetrieveAllTransactionsQuery("", {
    refetchOnReconnect: true,
  });

  const { data: walletInfo } = useRetrieveWalletInfoQuery("", {
    refetchOnReconnect: true,
  });

  return (
    <>
    <AppHead title="Mainstack | Revenue"/>
    <AppLayout>
      {walletInfo && <WalletInfoContainer {...walletInfo} />}
      {transactions && (
        <TransactionsHeader transactionsCount={transactions.length} />
      )}
      {transactions && <TransactionContainer transactions={transactions} />}
      {!transactions && !transactionsLoading && transactionsError && (
        <ReloadOnError
          errorMessage="Error loading transactions"
          title="Reload Transactions"
          refetch={refetchTransactions}
        />
      )}
    </AppLayout>
    </>
  );
};

export default Home;
