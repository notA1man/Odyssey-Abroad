import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from './Mycontext';

function Footer() {
  const navigate = useNavigate();
  const {refto_about}=useContext(MyContext)
  return (
    <>
    <div ref={refto_about} className="flex flex-col md:flex-row md:justify-between mt-8 bg-black bg-opacity-10 text-charcoal font-source px-8 md:px-16 py-10 backdrop-blur-xl border-t border-beige space-y-8 md:space-y-0">
      <div className="text-center md:text-left">
        <p className="pb-6 text-2xl font-semibold text-soft-brown">Odyssey Abroad</p>
        <p className="pb-3 font-sans w-full md:w-[250px] mx-auto md:mx-0">
          Odyssey Abroad crafts curated travel packages, offering unique cultural experiences, stunning landscapes, and iconic landmarks for unforgettable global adventures.
        </p>
      </div>
      <div className="text-center md:text-left">
        <p className="pb-6 text-2xl font-semibold text-soft-brown">Destinations</p>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => navigate('/destinations/kyoto')}>
          <img src="/src/assets/TokyoIcon.png" alt="Japan Shrine gate" className="w-5 h-5" />
          Kyoto, Japan
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => navigate('/destinations/paris')}>
          <img src="/src/assets/ParisIcon.png" alt="Paris Tower" className="w-5 h-5" />
          Paris, France
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => navigate('/destinations/bali')}>
          <img src="/src/assets/BaliIcon.png" alt="Bali Island" className="w-5 h-5" />
          Bali, Indonesia
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => navigate('/destinations/athens')}>
          <img src="/src/assets/GreeceIcon.png" alt="Greece Rocks" className="w-5 h-5" />
          Athens, Greece
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => navigate('/destinations/toronto')}>
          <img src="/src/assets/CanadaIcon.png" alt="Canada Maple leaf" className="w-5 h-5" />
          Toronto, Canada
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => navigate('/destinations/sydney')}>
          <img src="/src/assets/SydneyIcon.png" alt="Opera House, Aus" className="w-5 h-5" />
          Sydney, Australia
        </button>
      </div>
      <div className="text-center md:text-left">
        <p className="pb-6 text-2xl font-semibold text-soft-brown">Useful Links</p>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => window.open("https://www.japan.travel/en/in/")}>
          <img src="/src/assets/link-icon.png" alt="Link Icon" className="w-5 h-5" />
          Japan Tourism
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => window.open("https://www.france.fr/en/")}>
          <img src="/src/assets/link-icon.png" alt="Link Icon" className="w-5 h-5" />
          Explore France
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => window.open("https://indonesia.travel/gb/en/home.html")}>
          <img src="/src/assets/link-icon.png" alt="Link Icon" className="w-5 h-5" />
          Wonderful Indonesia
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => window.open("https://www.visitgreece.gr/")}>
          <img src="/src/assets/link-icon.png" alt="Link Icon" className="w-5 h-5" />
          Visit Greece
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => window.open("https://www.destinationcanada.com/en")}>
          <img src="/src/assets/link-icon.png" alt="Link Icon" className="w-5 h-5" />
          Destination Canada
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" onClick={() => window.open("https://www.australia.com/en-in")}>
          <img src="/src/assets/link-icon.png" alt="Link Icon" className="w-5 h-5" />
          Tourism Australia
        </button>
      </div>
      <div className="text-center md:text-left">
        <p className="pb-6 text-2xl font-semibold text-soft-brown">Contact Us</p>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start">
          <img src="/src/assets/gmail-logo.png" alt="Gmail Logo" className="w-5 h-5" />
          odysseyabroad@travel.com
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start">
          <img src="/src/assets/ig-logo.png" alt="Instagram Logo" className="w-5 h-5" />
          @odyssey.abroad
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" >
          <img src="/src/assets/whatsapp-logo.png" alt="Whatsapp Logo" className="w-5 h-5" />
          +91-9897969594
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" >
          <img src="/src/assets/twitter-logo.png" alt="Twitter Logo" className="w-5 h-5" />
          @odyssey.abroad
        </button>
        <button className="flex items-center gap-2 pb-1 font-sans justify-center md:justify-start" >
          <img src="/src/assets/facebook-logo.png" alt="Twitter Logo" className="w-5 h-5" />
          odyssey_abroad
        </button>
      </div>
    </div>
    </>
  );
}

export default Footer;
