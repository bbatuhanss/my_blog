import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home_main_page";
import Project from "./pages/project";
import Header from "./components/header";
import Footer from "./components/footer";
import Articles from "./pages/articles_page";
import Publications from "./pages/publications";
//rafc creat func jsx
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/publications" element={<Publications/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
