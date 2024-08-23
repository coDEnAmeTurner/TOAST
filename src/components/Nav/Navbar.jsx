import { useNavigate } from "react-router-dom";
import logoSrc from "../../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <div className="box">
      <img
        alt="logo"
        src={logoSrc}
        className="logo"
        onClick={()=>{nav("/")}}
      />

      <span className="Introduction">Introduction</span>
      <span className="solution">Solution</span>
      <span className="Rate-plan">Rate plan</span>
      <div className="Rectangle-662"></div>
      <span className="login" onClick={()=>{nav("/login")}}>Login</span>
      <span className="Apply-for-free-use">Apply for free use</span>
    </div>
  );
};

export default Navbar;
