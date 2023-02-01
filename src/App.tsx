import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Bookmark from "./components/Bookmark";
import Extension from "./components/Extension";
import Faqs from "./components/FAQS";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header overflow-x-hidden font-font">
        <Navbar />
        <Hero />
        <Features />
        <Bookmark />
        <Extension />
        <Faqs />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
