import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyTestCompoent from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={MyTestCompoent} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
