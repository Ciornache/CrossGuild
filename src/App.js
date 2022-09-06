import { useEffect, useState } from "react";
import IniPage from "./ini_page";
import Login from "./login";
import {
  BrowserRouter as Router,
  renderMatches,
  Route,
  Routes,
} from "react-router-dom";
const App = () => {
  useEffect(() => {
    document.title = "Cross Guild";
  }, []);
  const [prost, setProst] = useState("");
  return (
    <Router>
      <Routes>
        <Route exact path="/first_page" element={<IniPage />}></Route>
        <Route exact path="/" element={<Login></Login>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
