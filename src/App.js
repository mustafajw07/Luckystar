import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactUs from "./components/routes/ContactUs";
import Home from "./components/routes/Home";
import Products from "./components/routes/Products";
import Main from "./components/brand/Main";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/*" element={<Main />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
