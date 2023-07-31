import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
import "./styles/App.scss";

function App() {
  return (
      <Router>
      <Header />
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/contact"element={<Contact/>}/>
          <Route path="/services"element={<Services/>}/>
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
