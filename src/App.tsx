import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyTestCompoent from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={MyTestCompoent} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
