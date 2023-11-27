import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../config/redux-store";
import { toast } from "react-toastify";
import { formatCamelCaseToIndividualWords } from "../utils";

interface ContextOptions {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppErrorModalContext = React.createContext<ContextOptions | null>(null);

const AppErrorModalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const transactionsApi = useSelector(
    (state: RootState) => state.transactions_api
  );
  const walletApi = useSelector((state: RootState) => state.wallet_api);
  const userApi = useSelector((state: RootState) => state.user_api);

  const apisToShowModalOnError = Object.values({
    transactionsApi: Object.values(transactionsApi.queries),
    walletApi: Object.values(walletApi.queries),
    userApi: Object.values(userApi.queries),
  }).flat();

  const [_, setError] = useState(false);

  const handleShowErrorModal = () => {
    const errorMessages: string[] = [];
    apisToShowModalOnError.forEach((query) => {
      if (query?.error && "data" in query.error) {
        const { message } = query.error.data as unknown as { message: string };
        if (message.length) {
          errorMessages.push(message);
        }
      } else if (query?.error) {
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
    handleShowErrorModal();
  }, [JSON.stringify(apisToShowModalOnError)]);

  return (
    <AppErrorModalContext.Provider value={{ setError }}>
      {children}
    </AppErrorModalContext.Provider>
  );
};

export default AppErrorModalProvider;

export const useAppLoaderContext: () => ContextOptions = () => {
  const context = React.useContext(AppErrorModalContext);
  if (!context)
    throw new Error(
      "Modal context can only be used within enlarged image provider"
    );
  return context;
};
