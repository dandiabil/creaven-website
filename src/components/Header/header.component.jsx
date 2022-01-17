import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "./header.component.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-wrapper">
        <p className="logo">CREAVEN</p>
      </div>
      <div className="nav-links">
        <Link to="/consult" className="nav-item">
          CONSULT
        </Link>
        <Link to="/contact" className="nav-item">
          CONTACT US
        </Link>
      </div>
      <div className="button-container">
        {/* <Button text="SIGN IN" />
                <Button text="REGISTER" /> */}
        <Link to="/login" className="btn">
          <Button
            label="SIGN IN"
            className="p-button-primary p-button-rounded"
          />
        </Link>
        <Link to="/register" className="btn">
          <Button
            label="REGISTER"
            className="p-button-primary p-button-rounded"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
