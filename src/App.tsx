import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import AppContextProvider from "./contexts/AppContext";
import Pages from "./pages";

function App() {
  return (
    <CookiesProvider>
      <AppContextProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <Pages />
        </Suspense>
      </AppContextProvider>
    </CookiesProvider>
  );
}

export default App;
