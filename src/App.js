import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page from "./page";
import Example from "./page/menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/example" element={<Example />}></Route>
      </Routes>
    </div>
  );
}

export default App;
