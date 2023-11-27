import React, { useState, useEffect } from "react";
import AppLoader from "../@shared/AppLoader";
import { useSelector } from "react-redux";
import { RootState } from "../config/redux-store";

interface ContextOptions {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppLoaderContext = React.createContext<ContextOptions | null>(null);

const AppLoaderProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const transactionsApi = useSelector(
    (state: RootState) => state.transactions_api
  );
  const walletApi = useSelector((state: RootState) => state.wallet_api);
  const userApi = useSelector((state: RootState) => state.user_api);

  const apisToTriggerLoaderOnFetch = Object.values({
    transactionsApi: Object.values(transactionsApi.queries),
    walletApi: Object.values(walletApi.queries),
    userApi: Object.values(userApi.queries),
  }).flat();

  const [isLoading, setLoading] = useState(false);

  const handleSetLoadingState = () => {
    const apiFetchInProgress = apisToTriggerLoaderOnFetch.some(
      (query) => query?.status?.toLowerCase() === "pending"
    );

    if (apiFetchInProgress) setLoading(true);
    else setLoading(false);
  };

  useEffect(() => {
    handleSetLoadingState();
  }, [JSON.stringify(apisToTriggerLoaderOnFetch)]);

  return (
    <AppLoaderContext.Provider value={{ setLoading }}>
      {isLoading && <AppLoader />}
      {children}
    </AppLoaderContext.Provider>
  );
};

export default AppLoaderProvider;

export const useAppLoaderContext: () => ContextOptions = () => {
  const context = React.useContext(AppLoaderContext);
  if (!context)
    throw new Error(
      "Modal context can only be used within enlarged image provider"
    );
  return context;
};
