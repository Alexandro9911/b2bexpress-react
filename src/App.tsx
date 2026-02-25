import './index.css'
import Header from "./components/Header/Header.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.tsx";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage.tsx";
import PageInvest from "./pages/invest/PageInvest.tsx";
function App() {

  useEffect(() => {
    console.log('Developer: tg - @sanya_ne_vporyadke');
    console.log('E-mail: alexandr.l1999@mail.ru  Александр Лялин');
  }, [])

  return (
    <div className="main">
      <Header/>
      <Routes>
        <Route
          path="/"
          element={<MainPage/>}
        />
        <Route
          path="/invest"
          element={<PageInvest />}
        />
      </Routes>
      <ScrollToTopButton />
      <div className="footer">
        <Header/>
      </div>
    </div>
  )
}

export default App
