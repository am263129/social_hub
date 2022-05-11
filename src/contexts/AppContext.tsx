import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

interface ContextInterface {
  loading: boolean;
  setLoading: any;
  auth: boolean;
  setAuth: any;
}

export const AppContext = createContext<ContextInterface>({
  loading: false,
  setLoading: null,
  auth: false,
  setAuth: null,
});

const AppContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [auth, setAuth] = useState<any>(false);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        auth,
        setAuth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);
