import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Maincopy from "./components/Maincopy";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Data from "./components/Data";

function App() {
  return (
    <>
    <Maincopy />
    <Data />
    </>
    // <Routes>
    //   <Route path="/" element={<Main />} />
    //   <Route path="/p1" element={<Page1 />} />
    //   <Route path="/p2" element={<Page2 />} />
    // </Routes>
  );
}

export default App;
