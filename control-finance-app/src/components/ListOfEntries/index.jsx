import { List } from "../List";
import { NoEntries } from "../noEntries";

export function ListOfEntries({
  listTransactions,
  setListTransactions,
  allTransactions,
  setAllTransactions,
  typeOfTransactions,
  setTypeOfTransactions,
}) {
  return (
    <section className="list-of-entries">
      {allTransactions.length > 0 ? (
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          allTransactions={allTransactions}
          setAllTransactions={setAllTransactions}
          typeOfTransactions={typeOfTransactions}
          setTypeOfTransactions={setTypeOfTransactions}
        />
      ) : (
        <NoEntries />
      )}
    </section>
  );
}
