import './App.css';
import { LandingPage } from "./components/LandingPage"
import { Dashboard } from "./components/Dashboard"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  const [listTransactions, setListTransactions] = useState([]);

  const [allTransactions, setAllTransactions] = useState([])

  return (
    <div className="App">
      {
        isLoggedIn ?
          <Dashboard
            logout={logout}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            allTransactions={allTransactions}
            setAllTransactions={setAllTransactions} />
          :
          <LandingPage login={login} />
      }
    </div>
  );
}

export default App;
