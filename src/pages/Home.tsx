import Navbar from "../elements/Navbar";
import Hero from "../elements/Hero";
import Features from "../elements/Features";
import Bookmark from "../elements/Bookmark";
import Extension from "../elements/Extension";
import Faqs from "../elements/FAQS";
import Contact from "../elements/Contact";
import Footer from "../elements/Footer";

function Home() {
  return (
    <main className="overflow-x-hidden font-font 2xl:mx-auto 2xl:container">
        <Navbar />
        <Hero />
        <Features />
        <Bookmark />
        <Extension />
        <Faqs />
        <Contact />
        <Footer />
    </main>
  );
}

export default Home;
