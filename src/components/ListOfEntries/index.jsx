import { List } from "../List";
import { NoEntries } from "../noEntries";

export function ListOfEntries({
  listTransactions,
  setListTransactions,
  allTransactions,
  setAllTransactions,
}) {
  return (
    <section className="list-of-entries">
      {allTransactions.length > 0 ? (
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          allTransactions={allTransactions}
          setAllTransactions={setAllTransactions}
        />
      ) : (
        <NoEntries />
      )}
    </section>
  );
}
