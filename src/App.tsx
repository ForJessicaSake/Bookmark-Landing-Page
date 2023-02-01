import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Bookmark from "./pages/Bookmark";
import Extension from "./pages/Extension";
import Faqs from "./pages//FAQS";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <main className="App">
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
    </main>
  );
}

export default App;
