import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchUser from "./components/SearchUser";
import Followers from "./components/Followers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SearchUser />
      <Followers />
    </BrowserRouter>
  );
}

export default App;
