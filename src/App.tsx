import './index.scss'
import Header from "./components/Header/Header.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.tsx";
import { useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage.tsx";
import PageInvest from "./pages/invest/PageInvest.tsx";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.tsx";
import NotFound from "./pages/notFound/NotFound.tsx";
function App() {

  useEffect(() => {
    console.log('Developer: tg - @sanya_ne_vporyadke');
    console.log('E-mail: alexandr.l1999@mail.ru  Александр Лялин');
  }, [])

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
