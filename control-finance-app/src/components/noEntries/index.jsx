import noContent from "../../assets/no-content.svg";
import "./style.css";

export function NoEntries() {
  return (
    <>
      <h2 className="section-title">Você ainda não possui nenhum lançamento</h2>
      <img
        className="no-content"
        src={noContent}
        alt="you dont have any entries"
      />
    </>
  );
}
