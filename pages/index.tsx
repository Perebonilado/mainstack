import type { NextPage } from "next";
import { useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import TransactionsHeader from "../@modules/Revenue/TransactionsHeader";
import { useRetrieveAllTransactionsQuery } from "../api-services/transactionsApi";
import TransactionContainer from "../@modules/Revenue/TransactionContainer";
import { useAppLoaderContext } from "../contexts/AppLoaderContext";
import { toast } from "react-toastify";
import ReloadOnError from "../@shared/ReloadOnError";
import { useRetrieveWalletInfoQuery } from "../api-services/walletApi";
import WalletInfoContainer from "../@modules/Revenue/WalletInfoContainer";
import { useSelector } from "react-redux";
import { RootState } from "../config/redux-store";

const Home: NextPage = () => {
  const {
    data: transactions,
    isLoading: transactionsLoading,
    error: transactionsError,
    refetch: refetchTransactions,
  } = useRetrieveAllTransactionsQuery("", {
    refetchOnReconnect: true,
    pollingInterval: 120000,
  });

  const { data: walletInfo, error: walletInfoError } =
    useRetrieveWalletInfoQuery("", { refetchOnReconnect: true });

  useEffect(() => {
    if (transactionsError && "data" in transactionsError) {
      const { message }: any = transactionsError.data;
      toast.error(message);
    }
  }, [transactionsError]);

  return (
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
  );
};

export default Home;
