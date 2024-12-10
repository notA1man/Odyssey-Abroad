// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Kyoto from './components/Kyoto';
import Bali from './components/Bali';
import Paris from './components/Paris';
import Faq from './components/Faq';
import Toronto from './components/Toronto';
import Athens from './components/Athens';
import Form from './components/Form';
import Sydney from './components/Sydney';
import { useRef } from 'react';
import MyContext from './components/Mycontext';


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
