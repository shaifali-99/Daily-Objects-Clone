import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import { AccountPage } from "./Pages/UserAccount/AccountPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Footer />
      {/* <AccountPage/> */}
    </div>
  );
}

export default App;
