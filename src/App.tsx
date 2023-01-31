import Down from "./components/Down";
import Bookmark from "./components/Bookmark";
import Extension from "./components/Extension";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faqs from "./components/FAQS";

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
        <Down />
        <Footer />
      </header>
    </div>
  );
}

export default App;
