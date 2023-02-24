import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import { AccountPage } from "./Pages/UserAccount/AccountPage";
import Footer from "./Components/Footer";

function App() {
  return (

    <div className="App">
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
