import "./style.css";

export function Header({ logout }) {
  return (
    <nav className="menu-nav">
      <div className="container menu">
        <h1 className="logo-black">
          <span>Nu</span> Kenzie
        </h1>
        <button className="grey-button" type="button" onClick={logout}>
          Início
        </button>
      </div>
    </nav>
  );
}
