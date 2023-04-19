
import './App.css';
import Hero from './component/hero/Hero';
import Navbar from './component/navigation/Navbar';
import SectionFeatures from './component/SectionFeatures.js';

function App() {
  return (
    <div className="">
    <Navbar/>
    <Hero/>
    <main>
      <SectionFeatures/>

    </main>
    
    <p className="text-red-500" ></p>
    </div>
  );
}

export default App;
