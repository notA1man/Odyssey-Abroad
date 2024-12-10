import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MyContext from './Mycontext';
import { useContext } from 'react';

function Home() {
  const navigate = useNavigate();
  const {refto_overview}= useContext(MyContext)
  return (
    <div className="relative min-h-screen text-charcoal overflow-hidden" ref={refto_overview}>
      <video className="top-0 left-0 w-full h-full object-cover blur-sm scale-105 fixed" loop autoPlay muted>
        <source src="bg.mp4" type="video/mp4" />
      </video>

      <div className="relative min-h-screen bg-ivory text-charcoal z-10" >
        <Navbar />
        
        <div className="flex flex-col items-center mt-24 md:16 pb-20 pt-20 md:pt-20"> 
          <div className="w-[90%] md:w-[80%] text-charcoal shadow-xl">
            <div className="text-3xl md:text-4xl bg-black bg-opacity-10 rounded-lg font-bold text-center mt-24 md:mt-1 py-4 text-soft-brown shadow-[0_0_5px_rgba(0,0,0,0.3)]">
              <p>Overview</p>
            </div>
          </div>
          <div className="bg-light-beige w-[90%] md:w-[80%] rounded-lg text-gray-700 shadow-[0_0_5px_rgba(0,0,0,0.22)] mt-4 px-6 md:px-8 py-6 backdrop-blur-sm">
            <p className="text-base md:text-lg text-center text-soft-brown">
              Odyssey Abroad, headquartered in India, offers exceptional international travel packages, focusing exclusively on destinations across the globe.
              Each journey is thoughtfully crafted to provide travelers with unique cultural encounters, scenic landscapes, and iconic landmarks. From vibrant 
              cityscapes to serene natural beauty, Odyssey Abroad ensures an immersive experience tailored to every traveler's dream. 
              Discover the world with ease and let your next adventure become an unforgettable memory with Odyssey Abroad.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center pb-20 pt-10"> 
          <div className="w-[90%] md:w-[50%] text-charcoal shadow-xl">
            <div className="text-3xl md:text-4xl bg-black bg-opacity-[10%] rounded-lg font-bold text-center mt-2 py-4 text-soft-brown shadow-[0_0_5px_rgba(0,0,0,0.3)]">
              <p>Explore Our Worldwide Destinations</p>
            </div>
          </div>
          <div className="bg-light-beige w-[90%] md:w-[50%] rounded-lg text-gray-700 shadow-[0_0_5px_rgba(0,0,0,0.22)] mt-4 backdrop-blur-sm">
            <img className="rounded-lg" src="/src/assets/world_map.png" alt="World Map" />
          </div>
        </div>

        <div className="flex flex-col w-[90%] md:w-[85%] mx-auto justify-center items-center bg-black bg-opacity-10 shadow-xl p-4 md:p-6 rounded-lg my-8">            
          <b className="text-3xl md:text-4xl text-center text-soft-brown">Destinations</b>
        </div>


        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-around pt-3 pb-20 bg-light-beige w-[90%] md:w-[85%] mx-auto rounded-b-md gap-6 md:gap-8">
            <div className="flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,240,0.4)] shadow-lg transition-transform duration-150 bg-ivory rounded-lg w-full md:w-auto">
              <button onClick={() => navigate('/destinations/kyoto')}>
                <img src="https://i.postimg.cc/QtRNjx6F/kyoto.png" className="w-full md:w-72 rounded-t-xl" alt="Kyoto" />
                <p className="text-sm bg-transparent py-2 w-full md:w-72 text-center font-semibold rounded-b-xl text-light-beige shadow-md">Kyoto, Japan<br />Explore Japan with us!</p>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,240,0.4)] shadow-lg transition-transform duration-150 bg-ivory rounded-lg w-full md:w-auto">
              <button onClick={() => navigate('/destinations/paris')}>
                <img src="https://i.postimg.cc/j5WdVJhV/paris.png" className="w-full md:w-72 rounded-t-xl" alt="Paris" />
                <p className="text-sm bg-transparent py-2 w-full md:w-72 text-center font-semibold rounded-b-xl text-light-beige shadow-md">Paris, France<br />Explore France with us!</p>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,240,0.4)] shadow-lg transition-transform duration-150 bg-ivory rounded-lg w-full md:w-auto">
              <button onClick={() => navigate('/destinations/bali')}>
                <img src="https://i.postimg.cc/vm2HSvfL/bali.png" className="w-full md:w-72 rounded-t-xl" alt="Bali" />
                <p className="text-sm bg-transparent py-2 w-full md:w-72 text-center font-semibold rounded-b-xl text-light-beige shadow-md">Bali, Indonesia<br />Explore Indonesia with us!</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-around pt-3 pb-20 bg-light-beige w-[90%] md:w-[85%] mx-auto rounded-b-md gap-6 md:gap-8">
            <div className="flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,240,0.4)] shadow-lg transition-transform duration-150 bg-ivory rounded-lg w-full md:w-auto">
              <button onClick={() => navigate('/destinations/athens')}>
                <img src="/src/assets/greece.png" className="w-full md:w-72 rounded-t-xl" alt="Athens, Greece" />
                <p className="text-sm bg-transparent py-2 w-full md:w-72 text-center font-semibold rounded-b-xl text-light-beige shadow-md">Athens, Greece<br />Explore Greece with us!</p>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,240,0.4)] shadow-lg transition-transform duration-150 bg-ivory rounded-lg w-full md:w-auto">
              <button onClick={() => navigate('/destinations/toronto')}>
                <img src="/src/assets/toronto.png" className="w-full md:w-72 rounded-t-xl" alt="Toronto" />
                <p className="text-sm bg-transparent py-2 w-full md:w-72 text-center font-semibold rounded-b-xl text-light-beige shadow-md">Toronto, Canada<br />Explore Canada with us!</p>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,240,0.4)] shadow-lg transition-transform duration-150 bg-ivory rounded-lg w-full md:w-auto">
              <button onClick={() => navigate('/destinations/sydney')}>
                <img src="/src/assets/sydney.png" className="w-full md:w-72 rounded-t-xl" alt="Sydney" />
                <p className="text-sm bg-transparent py-2 w-full md:w-72 text-center font-semibold rounded-b-xl text-light-beige shadow-md">Sydney, Australia<br />Explore Australia with us!</p>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
