import type { NextPage } from "next";
import { useState } from "react";
import AppLayout from "../layout/AppLayout";
import TransactionsHeader from "../@modules/Revenue/TransactionsHeader";
import { useRetrieveAllTransactionsQuery } from "../api-services/transactionsApi";
import TransactionContainer from "../@modules/Revenue/TransactionContainer";
import ReloadOnError from "../@shared/ReloadOnError";
import { useRetrieveWalletInfoQuery } from "../api-services/walletApi";
import WalletInfoContainer from "../@modules/Revenue/WalletInfoContainer";
import AppHead from "../@shared/AppHead";
import FilterMenu from "../@modules/Revenue/FilterMenu";

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

  const [isFilterMenu, setIsFilterMenu] = useState(false);
  const [filterMenuOpactiy, setFilterMenuOpacity] = useState<0 | 0.6>(0);

  const handleCloseFilterMenu = () => {
    setFilterMenuOpacity(() => 0);
    setTimeout(() => {
      setIsFilterMenu(false);
    }, 500);
  };

  const handleOpenFilterMenu = () => {
    setIsFilterMenu(() => true);
    setTimeout(() => {
      setFilterMenuOpacity(() => 0.6);
    }, 100);
  };

  return (
    <>
      <AppHead title="Mainstack | Revenue" />
      <FilterMenu
        isFilterMenu={isFilterMenu}
        handleCloseFilterMenu={handleCloseFilterMenu}
        filterMenuOpacity={filterMenuOpactiy}
      />
      <AppLayout>
        {walletInfo && transactions && (
          <WalletInfoContainer {...walletInfo} transactions={transactions} />
        )}
        {transactions && (
          <TransactionsHeader
            transactionsCount={transactions.length}
            onFilterClicked={handleOpenFilterMenu}
          />
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
