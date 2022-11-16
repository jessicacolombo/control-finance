import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  const [listTransactions, setListTransactions] = useState([]);

  const [allTransactions, setAllTransactions] = useState([]);

  const [typeOfTransactions, setTypeOfTransactions] = useState(null);

  useEffect(() => {
    if (typeOfTransactions === null) {
      setAllTransactions(listTransactions);
    } else if (typeOfTransactions === "entrada") {
      const filtered = listTransactions.filter(
        (elem) => elem.type === "entrada"
      );
      setAllTransactions(filtered);
    } else if (typeOfTransactions === "saida") {
      const filtered = listTransactions.filter((elem) => elem.type === "saida");
      setAllTransactions(filtered);
    }
  }, [listTransactions, typeOfTransactions]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard
          logout={logout}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          allTransactions={allTransactions}
          setAllTransactions={setAllTransactions}
          typeOfTransactions={typeOfTransactions}
          setTypeOfTransactions={setTypeOfTransactions}
        />
      ) : (
        <LandingPage login={login} />
      )}
    </div>
  );
}

export default App;
