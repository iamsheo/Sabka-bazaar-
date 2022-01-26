//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Home from "./components/home";
import Products from "./components/products";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Login from "./components/login";
import Regestration from "./components/regestration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/" element={<Products />} />
              <Route path="/products/:id" element={<Products />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Regestration />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
