import "./style.css";

export function FinancesSumary({ setTypeOfTransactions, typeOfTransactions }) {
  return (
    <section className="finances-sumary">
      <h2>Resumo financeiro</h2>
      <div className="navigation-buttons">
        <button
          type="button"
          onClick={() => {
            setTypeOfTransactions(null);
          }}
          className={
            typeOfTransactions === null ? "grey-button-active" : "grey-button"
          }
        >
          Todos
        </button>
        <button
          type="button"
          onClick={() => {
            setTypeOfTransactions("entrada");
          }}
          className={
            typeOfTransactions === "entrada"
              ? "grey-button-active"
              : "grey-button"
          }
        >
          Entradas
        </button>
        <button
          type="button"
          onClick={() => {
            setTypeOfTransactions("saida");
          }}
          className={
            typeOfTransactions === "saida"
              ? "grey-button-active"
              : "grey-button"
          }
        >
          Despesas
        </button>
      </div>
    </section>
  );
}
