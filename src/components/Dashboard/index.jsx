import "./style.css";
import { Header } from "../Header";
import { Form } from "../Form";
import { FinancesSumary } from "../FinancesSumary";
import { ListOfEntries } from "../ListOfEntries";
import { TotalValue } from "../TotalValue";
import "./style.css";

export function Dashboard({
  logout,
  listTransactions,
  setListTransactions,
  allTransactions,
  setAllTransactions,
}) {
  return (
    <div>
      <Header logout={logout} />
      <div className="container dash-div">
        <div className="div-form-totalvalue">
          {listTransactions.length > 0 ? (
            <>
              <Form
                setListTransactions={setListTransactions}
                setAllTransactions={setAllTransactions}
              />
              <TotalValue listTransactions={listTransactions} />
            </>
          ) : (
            <Form
              setListTransactions={setListTransactions}
              setAllTransactions={setAllTransactions}
            />
          )}
        </div>
        <div className="div-finances-list">
          <FinancesSumary
            listTransactions={listTransactions}
            setAllTransactions={setAllTransactions}
          />
          <ListOfEntries
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            allTransactions={allTransactions}
            setAllTransactions={setAllTransactions}
          />
        </div>
      </div>
    </div>
  );
}
