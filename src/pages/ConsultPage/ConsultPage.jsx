import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./ConsultPage.scss";
import { useNavigate } from "react-router-dom";

const ConsultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-consult">
      <div className="container-consult-header">
        <div className="container-consult-header-title">
          <h1>Laptop Consultation</h1>
        </div>

        <div className="container-consult-message">
          <p>
            If you have difficulty in choosing a laptop that is right for you.
            Please fill in the data in the form below. We will help you in
            choosing a laptop that suits your wishes
          </p>
        </div>
      </div>
      <div className="container-consult-body">
        <form className="" noValidate>
          <div className="form-field grid p-fluid">
            <label htmlFor="name" className="col-12 mb-2 md:col-2 md:mb-0">
              Name
            </label>
            <div className="col-12 md:col-10">
              <InputText
                id="name"
                type="text"
                className="p-inputtext p-component"
              />
            </div>
          </div>
          <div className="form-field grid p-fluid">
            <label htmlFor="job" className="col-12 mb-2 md:col-2 md:mb-0">
              Job
            </label>
            <div className="col-12 md:col-10">
              <InputText
                id="job"
                type="text"
                className="p-inputtext p-component"
              />
            </div>
          </div>
          <div className="form-field grid p-fluid">
            <label htmlFor="Budget" className="col-12 mb-2 md:col-2 md:mb-0">
              Budget
            </label>
            <div className="col-12 md:col-10">
              <InputText
                id="Budget"
                type="text"
                className="p-inputtext p-component"
              />
            </div>
          </div>
          <div className="form-field grid p-fluid">
            <label htmlFor="CPU" className="col-12 mb-2 md:col-2 md:mb-0">
              CPU (Processor)
            </label>
            <div className="col-12 md:col-10">
              <InputText
                id="CPU"
                type="text"
                className="p-inputtext p-component"
              />
            </div>
          </div>
          <div className="form-field grid p-fluid">
            <label htmlFor="GPU" className="col-12 mb-2 md:col-2 md:mb-0">
              GPU (Graphic Card)
            </label>
            <div className="col-12 md:col-10">
              <InputText
                id="GPU"
                type="text"
                className="p-inputtext p-component"
              />
            </div>
          </div>
          <div className="form-field grid p-fluid">
            <label htmlFor="Memory" className="col-12 mb-2 md:col-2 md:mb-0">
              Memory
            </label>
            <div className="col-12 md:col-10">
              <InputText
                id="Memory"
                type="text"
                className="p-inputtext p-component"
              />
            </div>
          </div>
          <div className="form-field grid p-fluid">
            <label htmlFor="RAM" className="col-12 mb-2 md:col-2 md:mb-0">
              RAM
            </label>
            <div className="col-12 md:col-10">
              <InputText
                id="RAM"
                type="text"
                className="p-inputtext p-component"
              />
            </div>
          </div>
          <div className="form-field grid p-fluid">
            <label htmlFor="Type" className="col-12 mb-2 md:col-2 md:mb-0">
              Type
            </label>
            <div className="col-12 md:col-10">
              <InputText
                id="Type"
                type="text"
                className="p-inputtext p-component"
              />
            </div>
          </div>
          <div className="text-center mt-3 mb-5">
            <Button
              label="SUBMIT"
              className="p-button-primary w-3 border-round"
              onClick={() => navigate("results")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultPage;
