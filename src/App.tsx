import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Bookmark from "./Bookmark";
import Extension from "./Extension";
import Faqs from "./FAQS";
import Contact from "./Contact";
import Footer from "./Footer";

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
