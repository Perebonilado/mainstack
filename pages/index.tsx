import type { NextPage } from "next";
import { useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import TransactionsHeader from "../@modules/Revenue/TransactionsHeader";
import { useRetrieveAllTransactionsQuery } from "../api-services/transactionsApi";
import TransactionContainer from "../@modules/Revenue/TransactionContainer";
import { useAppLoaderContext } from "../contexts/AppLoaderContext";
import { toast } from "react-toastify";
import ReloadOnError from "../@shared/ReloadOnError";

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

  const { setLoading } = useAppLoaderContext();

  useEffect(() => {
    setLoading(transactionsLoading);
  }, [transactionsLoading]);

  useEffect(() => {
    if (transactionsError && "data" in transactionsError) {
      const { message }: any = transactionsError.data;
      toast.error(message);
    }
  }, [transactionsError]);

  return (
    <AppLayout>
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
