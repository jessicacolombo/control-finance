import "./style.css";

export function TotalValue({ listTransactions }) {
  const total = listTransactions.reduce((prev, cur) => {
    return cur.type === "saida" ? prev - +cur.value : prev + +cur.value;
  }, 0);

  return (
    <section className="total-value">
      <div className="total-value__texts">
        <h2>Valor total:</h2>
        <span>O valor se refere ao saldo</span>
      </div>
      <h2 className="total-value__balance">${total}</h2>
    </section>
  );
}
