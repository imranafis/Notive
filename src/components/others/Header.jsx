import "./Header.css";
function Header({ children }) {
  return (
    <header>
      <div className="logo">
        <i className="fa-brands fa-nfc-symbol"></i>
      </div>
      <div className="menu">{children}</div>
    </header>
  );
}

export default Header;
