import "./style.css";
import { useState } from "react";

export function Form({ setListTransactions, setAllTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);

  function addEntry(description, type, value) {
    if (description !== "" && type !== "" && value > 0) {
      const newEntry = {
        description: description,
        type: type,
        value: value,
      };

      setListTransactions((previousEntries) => [...previousEntries, newEntry]);
      setAllTransactions((previousEntries) => [...previousEntries, newEntry]);
      setDescription("");
      setType("");
      setValue(0);
    }
  }

  return (
    <form
      className="form-entries"
      onSubmit={(event) => {
        event.preventDefault();
        addEntry(description, type, value);
      }}
    >
      <div className="form-entries__input">
        <label>Descrição:</label>
        <input
          className="input"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <span>Ex: Compra de Roupas</span>
      </div>
      <div className="form-entries-div">
        <div className="form-entries-div__input">
          <label>Valor:</label>
          <input
            className="input"
            type="number"
            placeholder="1"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="form-entries-div__input">
          <label>Tipo de valor:</label>
          <select
            className="input"
            name="type-of-value"
            id="type-of-value"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option disabled={true} value=""></option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit" className="pink-button">
        Inserir valor
      </button>
    </form>
  );
}
