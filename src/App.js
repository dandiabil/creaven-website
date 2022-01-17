import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ConsultPage from "./pages/ConsultPage/ConsultPage";
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import PostSurveyPage from "./pages/SurveyPage/PostSurveyPage/PostSurveyPage";
import ConsultResultPage from "./pages/ConsultPage/ConsultResultPage/ConsultResultPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<Layout element={<LandingPage />} />}
          />
          <Route path="/login" element={<Layout element={<LoginPage />} />} />
          <Route
            path="/register"
            element={<Layout element={<RegisterPage />} />}
          />
          <Route
            path="/contact"
            element={<Layout element={<ContactPage />} />}
          />
          <Route
            path="/consult"
            element={<Layout element={<ConsultPage />} />}
          />
          <Route
            path="/consult/results"
            element={<Layout element={<ConsultResultPage />} />}
          />
          <Route path="/survey" element={<Layout element={<SurveyPage />} />} />
          <Route
            path="/survey/success"
            element={<Layout element={<PostSurveyPage />} />}
          />
          <Route
            path="/profile"
            element={<Layout element={<ProfilePage />} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
