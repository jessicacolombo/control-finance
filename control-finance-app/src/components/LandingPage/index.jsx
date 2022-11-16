import form from "../../assets/form.svg";
import "./style.css";

export function LandingPage({ login }) {
  return (
    <div className="landing-div">
      <div className="landing-div__container">
        <h1 className="logo">
          <span>Control</span> Finance
        </h1>
        <h2 className="title">Centralize o controle das suas finanças</h2>
        <span className="subtitle">de forma rápida e segura</span>
        <button
          type="button"
          className="pink-button this-button"
          onClick={login}
        >
          Iniciar
        </button>
      </div>
      <img className="landing-div__image" src={form} alt="application desing" />
    </div>
  );
}
