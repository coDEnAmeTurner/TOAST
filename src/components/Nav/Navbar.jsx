import logoSrc from "../../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="box">
      <img
        alt="logo"
        src={logoSrc}
        className="logo"
      />

      <span className="Introduction">Introduction</span>
      <span className="solution">Solution</span>
      <span className="Rate-plan">Rate plan</span>
      <div className="Rectangle-662"></div>
      <span className="login">Login</span>
      <span className="Apply-for-free-use">Apply for free use</span>
    </div>
  );
};

export default Navbar;
