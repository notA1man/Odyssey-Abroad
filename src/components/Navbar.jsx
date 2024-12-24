import { useNavigate } from 'react-router-dom';
import MyContext from './MyContext';
import { useContext, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [state,setstate]=useState(false)
  const {scrollto_overview}=useContext(MyContext)
  const {scrollto_about}=useContext(MyContext)
  const click_for_dropdown=()=>{
    setstate(!state);
  }
  return (
    <div className="flex flex-col md:flex-row md:items-center flex-wrap w-full opacity-100 shadow-2xl border-b border-light-beige fixed top-0 bg-opacity-100 backdrop-blur-sm z-20">
      <div className="flex flex-row">
        <div className="flex ml-2 md:ml-24 mr-4 my-2 w-24">
          <button onClick={() => navigate('/')}>
            <img src="https://i.postimg.cc/Yqfz8C0x/odeyssey-abroad-white.png" alt="Logo" />
          </button>
        </div>
        <div className="flex py-5 w-32 md:items-center">
          <button onClick={() => navigate('/')}>
            <img src="https://i.postimg.cc/Gp759kg9/text-lw.png" alt="Logo Text" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start md:items-end md:justify-end md:flex-row flex-grow mr-24 text-lg font-medium">
        <button className="bg-beige text-soft-brown hover:bg-light-beige transition-colors duration-150 py-2 px-4 rounded-full" onClick={scrollto_overview}>Overview</button>
        <div className='relative'>
        <button className="bg-beige text-soft-brown hover:bg-light-beige transition-colors duration-150 py-2 px-4 rounded-full" onClick={click_for_dropdown}>Destinations</button>
        {state&&(
          <>
          <div className='flex-col absolute ml-3'>
          <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start hover:underline" onClick={() => navigate('/destinations/kyoto')}>
          <img src="/src/assets/TokyoIcon.png" alt="Japan Shrine gate" className="w-5 h-5" />
          Kyoto
          </button>
          <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start hover:underline" onClick={() => navigate('/destinations/paris')}>
          <img src="/src/assets/ParisIcon.png" alt="Paris Tower" className="w-5 h-5" />
          Paris
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start hover:underline" onClick={() => navigate('/destinations/bali')}>
          <img src="/src/assets/BaliIcon.png" alt="Bali Island" className="w-5 h-5" />
          Bali
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start hover:underline" onClick={() => navigate('/destinations/athens')}>
          <img src="/src/assets/GreeceIcon.png" alt="Greece Rocks" className="w-5 h-5" />
          Athens
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start hover:underline" onClick={() => navigate('/destinations/toronto')}>
          <img src="/src/assets/CanadaIcon.png" alt="Canada Maple leaf" className="w-5 h-5" />
          Toronto
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start hover:underline" onClick={() => navigate('/destinations/sydney')}>
          <img src="/src/assets/SydneyIcon.png" alt="Opera House, Aus" className="w-5 h-5" />
          Sydney
        </button>
          </div>
          </>
        )}
        </div>
        <button  className="bg-beige text-soft-brown hover:bg-light-beige transition-colors duration-150 py-2 px-4 rounded-full"onClick={()=>navigate('/FAQandReview')}>FAQ's & Reviews </button>
        <button className="bg-beige text-soft-brown hover:bg-light-beige transition-colors duration-150 py-2 px-4 rounded-full" onClick={scrollto_about}>Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
