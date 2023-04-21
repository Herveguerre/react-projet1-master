
import './App.css';
import Card from './component/cards/Card';
import CardTemplate from './component/cards/CardTemplate';
import Hero from './component/hero/Hero';
import Navbar from './component/navigation/Navbar';
import SectionFeatures from './component/SectionFeatures.js';
import SectionInsideTemplate from './component/SectionInsideTemplate.js';
import SectionTemplate from './component/SectionInsideTemplate.js';
function App() {
  return (
    <div className="">
    <Navbar/>
    <Hero/>
    <main>
      <SectionFeatures/>
      <SectionInsideTemplate/>
      <Card/>
      <CardTemplate/>
    </main>
    
    <p className="text-red-500" ></p>
    </div>
  );
}

export default App;