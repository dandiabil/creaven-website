import Image from "../../assets/img/signin-page-image.png";
import { useState } from "react";

import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Link } from "react-router-dom";

import "./RegisterPage.scss";

const RegisterPage = () => {
  return (
    <div className="container-register">
      <div className="container-register-image">
        <img src={Image} alt="background-img" />
      </div>

      <Card className="inner-container-register">
        <div className="container-register-header">
          <h1>Create Account Now</h1>
          <p>
            Have an account ?{" "}
            <Link to="/user/signin" className="link-item">
              Sign In
            </Link>
          </p>
        </div>
        <div className="container-form p-card-content">
          <form method="POST" className="p-fluid p-formgrid p-grid">
            <div className="form-group">
              <span className="p-float-label form-field">
                <InputText className="p-inputtext p-component" onChange="" />
                <label htmlFor={"username"}>First Name</label>
              </span>
              <span className="p-float-label form-field">
                <InputText className="p-inputtext p-component" onChange="" />
                <label htmlFor={"username"}>Last Name</label>
              </span>
            </div>
            <div className="form-group">
              <span className="p-float-label form-field">
                <InputText className="p-inputtext p-component" onChange="" />
                <label htmlFor={"username"}>Phone</label>
              </span>
              <span className="p-float-label form-field">
                <InputText className="p-inputtext p-component" onChange="" />
                <label htmlFor={"username"}>Email</label>
              </span>
            </div>
            <div className="p-field">
              <span className="p-float-label form-field">
                <InputTextarea id="address" type="text" rows="4" />
                <label htmlFor="address">Address</label>
              </span>
            </div>
            <Button label="REGISTER" className="p-button-primary" />
          </form>
        </div>
        <div className="p-card-footer">
          <Divider type="dashed" align="center">
            <p>or register with</p>
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

export default RegisterPage;
