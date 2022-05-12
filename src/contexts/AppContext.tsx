import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

interface ContextInterface {
  loading: boolean;
  setLoading: any;
  auth: boolean;
  setAuth: any;
  user: User | undefined;
  setUser: any;
}

interface User {
  name: string;
  summary: string;
  connection: number;
  follower: number;
  membership: string;
  cover: string;
  avatar: string;
  email: string;
  phone: string;
}

export const AppContext = createContext<ContextInterface>({
  loading: false,
  setLoading: null,
  auth: false,
  setAuth: null,
  user: undefined,
  setUser: null
});

const AppContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [auth, setAuth] = useState<any>(false);
  const [user, setUser] = useState<User>()
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        auth,
        setAuth,
        user,
        setUser
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
