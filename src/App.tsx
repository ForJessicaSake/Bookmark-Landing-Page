import Bookmark from "./components/Bookmark";
import Extension from "./components/Extension";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header overflow-x-hidden font-font px-10">
     <Navbar/>
     <Hero/>
     <Features/>
     <Bookmark/>
     <Extension/>
      </header>
    </div>
  );
}

export default App;
