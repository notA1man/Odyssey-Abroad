// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Home';
import Kyoto from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Kyoto';
import Bali from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Bali';
import Paris from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Paris';
import Faq from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Faq';
import Toronto from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Toronto';
import Athens from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Athens';
import Form from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Form';
import Sydney from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/Sydney';
import { useRef } from 'react';
import MyContext from '/home/runner/work/Odyssey-Abroad/Odyssey-Abroad/src/components/MyContext';


function App() {
  const refto_overview=useRef(null);
  const refto_about=useRef(null);
  const scrollto_overview=()=>{
    refto_overview.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const scrollto_about=()=>{
    refto_about.current?.scrollIntoView({ behavior:'smooth',block:'start'});
  }
  return (
    <MyContext.Provider value={{scrollto_overview,scrollto_about,refto_about,refto_overview}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/bali" element={<Bali />} />
        <Route path="/destinations/kyoto" element={<Kyoto />} />
        <Route path="/destinations/paris" element={<Paris />} />
        <Route path="/FAQandReview" element={<Faq />}/>
        <Route path="/destinations/toronto" element={<Toronto/>}/>
        <Route path="/destinations/sydney" element={<Sydney/>}/>
        <Route path="/destinations/athens" element={<Athens/>}/>
        <Route path="/enquire" element={<Form/>}/>

      </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
