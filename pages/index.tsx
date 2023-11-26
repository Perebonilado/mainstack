import type { NextPage } from "next";
import AppLayout from "../layout/AppLayout";
import TransactionsHeader from "../@modules/Revenue/TransactionsHeader";
import { useRetrieveAllTransactionsQuery } from "../api-services/transactionsApi";
import TransactionContainer from "../@modules/Revenue/TransactionContainer";

const Home: NextPage = () => {
  const { data: transactions } = useRetrieveAllTransactionsQuery("");
  return (
    <AppLayout>
      {transactions && <TransactionsHeader transactionsCount={transactions.length} />}
      {transactions && <TransactionContainer transactions={transactions} />}
    </AppLayout>
  );
};

export default Home;
