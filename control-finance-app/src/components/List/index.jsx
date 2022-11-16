import { FaTrash } from "react-icons/fa";
import "./style.css";

export function List({
  listTransactions,
  setListTransactions,
  allTransactions,
  setAllTransactions,
}) {
  function removeTransaction(removedTransaction) {
    const filtered = [...listTransactions].filter(
      (elem) => elem.description !== removedTransaction
    );
    setListTransactions(filtered);
    setAllTransactions(filtered);
  }

  return (
    <ul className="list-of-entries">
      {allTransactions.map(({ description, type, value }, index) => {
        return (
          <li key={index} className={type + " card"}>
            <div className="card-content-text">
              <h3>{description}</h3>
              <span>{type}</span>
            </div>
            <div className="card-content-value">
              <span>R${value},00</span>
              <button
                type="button"
                onClick={() => {
                  removeTransaction(description);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
