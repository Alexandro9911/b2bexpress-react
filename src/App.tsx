import './index.scss'
import Header from "./components/Header/Header.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.tsx";
import { useEffect } from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import MainPage from "./pages/main/MainPage.tsx";
import PageInvest from "./pages/invest/PageInvest.tsx";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.tsx";
import NotFound from "./pages/notFound/NotFound.tsx";
import FeedbackForm from "./components/Forms/FeedBackForm/FeedbackForm.tsx";
import InvestorForm from "./components/Forms/InvestorForm/InvestorForm.tsx";
import CalculationForm from "./components/Forms/CalculateForm/CalculationForm.tsx";
import {OpenModal} from "./utils/modal.tsx";
function App() {

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Developer: tg - @sanya_ne_vporyadke');
    console.log('E-mail: alexandr.l1999@mail.ru  Александр Лялин');
  }, [])

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const type = urlParams.get("type");

    if (type) {
      let modalContent = null;

      switch (type) {
        case "feedback":
          modalContent = <FeedbackForm/>;
          break;
        case "invest":
          modalContent = <InvestorForm id="1" />;
          break;
        case "calculate":
          modalContent = <CalculationForm/>;
          break;
        default:
          break;
      }

      if (modalContent) {
        // Открываем модалку
        OpenModal(modalContent);
      }
    }
  }, [location, navigate]);



  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header/>
              <MainPage/>
              <div className="footer">
                <Header isFooter/>
              </div>
              <ScrollToTopButton/>
              <ThemeToggle/>
            </>
          }
        />
        <Route
          path="/invest"
          element={
            <>
              <Header/>
              <PageInvest/>
              <div className="footer">
                <Header isFooter/>
              </div>
              <ScrollToTopButton/>
              <ThemeToggle/>
            </>
          }
        />
        <Route path="*" element={
          <>
            <NotFound/>
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App
