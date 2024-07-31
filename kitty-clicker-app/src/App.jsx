import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import TrackerBar from "./Components/TrackerBar";
import AssetsPage from "./Components/AssetsPage";
import ShopPage from "./Components/ShopPage";
import TrophiesPage from "./Components/TrophiesPage";
import HomePage from "./Components/HomePage";

function App() {
  const [pageView, setPageView] = useState("Home");
  return (
    <div className="App">
      <Header />
      <TrackerBar />
      {(() => {
        switch (pageView) {
          case "Assets":
            return <AssetsPage />;
          case "Shop":
            return <ShopPage />;
          case "Trophies":
            return <TrophiesPage />;
          default:
            return <HomePage />;
        }
      })()}
      <NavBar setPageView={setPageView} />
    </div>
  );
}

export default App;
