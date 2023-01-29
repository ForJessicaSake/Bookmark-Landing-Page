import Bookmark from "./Components/Bookmark";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header overflow-x-hidden font-font px-10">
     <Navbar/>
     <Hero/>
     <Features/>
     <Bookmark/>
      </header>
    </div>
  );
}

export default App;
