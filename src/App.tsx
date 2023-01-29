import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header overflow-x-hidden font-font px-4">
     <Navbar/>
     <Hero/>
     <Features/>
      </header>
    </div>
  );
}

export default App;
