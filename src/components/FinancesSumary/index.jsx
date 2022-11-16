import "./style.css";

export function FinancesSumary({ listTransactions, setAllTransactions }) {
  function showAll() {
    setAllTransactions(listTransactions);
  }

  function showIns() {
    const filtered = listTransactions.filter((elem) => elem.type === "entrada");
    setAllTransactions(filtered);
  }

  function showOuts() {
    const filtered = listTransactions.filter((elem) => elem.type === "saida");
    setAllTransactions(filtered);
  }

  return (
    <section className="finances-sumary">
      <h2>Resumo financeiro</h2>
      <div className="navigation-buttons">
        <button type="button" className="grey-button" onClick={showAll}>
          Todos
        </button>
        <button type="button" className="grey-button" onClick={showIns}>
          Entradas
        </button>
        <button type="button" className="grey-button" onClick={showOuts}>
          Despesas
        </button>
      </div>
    </section>
  );
}
