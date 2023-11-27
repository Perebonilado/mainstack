import React, { useState, useEffect } from "react";
import AppLoader from "../@shared/AppLoader";
import { useSelector } from "react-redux";
import { RootState } from "../config/redux-store";

interface ContextOptions {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppLoaderContext = React.createContext<ContextOptions | null>(null);

const AppLoaderProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isSomeQueryPending = useSelector((state: RootState) => state);
  const [isLoading, setLoading] = useState(false);
  const stateToCheck = JSON.stringify(Object.entries(isSomeQueryPending).filter(([key, _])=>key.includes('_api')))

  useEffect(() => {
    const apiFetchInProgress = Object.values(isSomeQueryPending)
      .map((v) => Object.values(v.queries).map((v_) => v_?.status))
      .flat()
      .some((stat) => stat?.toLowerCase() === "pending");

    if (apiFetchInProgress) setLoading(true);
    else setLoading(false);
  }, [stateToCheck]);

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
