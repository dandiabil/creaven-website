import Image from "../../assets/img/signin-page-image.png";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="container-signin">
      <div className="container-signin-image">
        <img src={Image} alt="background-img" />
      </div>
      <Card className="inner-container-signin">
        <div className="container-signin-header">
          <h1>Welcome, Let's Sign In</h1>
          <p>
            Don't Have Account ?{" "}
            <Link to="/register" className="link-item">
              Register
            </Link>
          </p>
        </div>
        <div className="container-form p-card-content">
          <form method="POST" className="p-fluid">
            <span className="p-float-label form-field">
              <InputText
                id={"username"}
                className="p-inputtext p-component"
                onChange=""
                value={"username"}
              />
              <label htmlFor={"username"}>Username</label>
            </span>
            <span className="p-float-label form-field">
              <Password
                toggleMask="true"
                id="password"
                className="p-password"
                onChange=""
              />
              <label htmlFor="password">Password</label>
            </span>
            <Button label="SIGN IN" className="p-button-primary" />
          </form>
        </div>
        <div className="p-card-footer">
          <p>
            Forgot Password ? <span className="link-item">Reset Password</span>
          </p>
          <Divider type="dashed" align="center">
            <p>or login with</p>
          </Divider>
          <Button
            label="Google"
            className="p-button p-component p-button-raised p-button-text p-button-plain"
            icon="pi pi-google"
          />
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
