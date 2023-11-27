import React, { useState, useEffect } from "react";
import AppLoader from "../@shared/AppLoader";
import { useSelector } from "react-redux";
import { RootState } from "../config/redux-store";
import { toast } from "react-toastify";
import { formatCamelCaseToIndividualWords } from "../utils";

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

  const apiQueriesToWatch = Object.values({
    transactionsApi: Object.values(transactionsApi.queries),
    walletApi: Object.values(walletApi.queries),
    userApi: Object.values(userApi.queries),
  }).flat();

  const [isLoading, setLoading] = useState(false);

  const handleSetLoadingState = () => {
    const apiFetchInProgress = apiQueriesToWatch.some(
      (query) => query?.status?.toLowerCase() === "pending"
    );

    if (apiFetchInProgress) setLoading(true);
    else setLoading(false);
  };

  const handleShowErrorModal = () => {
    const errorMessages: string[] = [];
    apiQueriesToWatch.forEach((query) => {
      if (query?.error && query?.error?.message) {
        errorMessages.push(query?.error?.message);
      } else if (query?.error && !query?.error?.message) {
        errorMessages.push(
          `An error occured when trying to ${formatCamelCaseToIndividualWords(
            query?.endpointName
          )}`
        );
      }
    });

    if (errorMessages.length) {
      for (const err of errorMessages) {
        toast.error(err);
      }
    }
  };

  useEffect(() => {
    handleSetLoadingState();
    handleShowErrorModal();
  }, [JSON.stringify(apiQueriesToWatch)]);

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
