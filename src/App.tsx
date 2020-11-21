import React from 'react';
import Services from './components/Home/Services/Services';
import jsonData from './components/Home/Services/jsonData';
import Contact from './components/Home/Contact/Contact';
import Achievements from './components/Home/Achievements/Achievements';
import achieveData from './components/Home/Achievements/achieveData'
import Pricing from './components/Home/Pricing/Pricing';
import priceData from './components/Home/Pricing/pricingData';

function App() {
  return (
    <div className="App">
        <Services services={jsonData} />
        <Contact />
        <Achievements achievements={achieveData} />
        <Pricing pricing={priceData} />
    </div>
  );
}

export default App;
