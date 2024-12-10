import React from 'react';
import athensBackground from '../assets/Athensbg.jpg'; 
import Navbar from './Navbar'; 
import { useState } from 'react';
import Footer from './Footer'; 
import { useNavigate } from 'react-router-dom';

function Athens() {
  const [athensIndex, setAthensIndex] = useState(0);
  const [acropolisIndex, setAcropolisIndex] = useState(0);
  const navigate = useNavigate();

  const athensImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoGKuLRAE6h4CuAc2e9O_F9nqXUctRg0Kbg&s",
    "https://media.istockphoto.com/id/104353716/photo/athens-acropolis-parthenon.jpg?s=612x612&w=0&k=20&c=nWiosp3SGW39MILHPYku3PAzQG6OxfXCZ_G16gHcEuU=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCD-SoR9R0J7A4RLHDrrfreG0NvjJZT39f9w&s"
  ];

  const acropolisImages = [
    "https://cdn.britannica.com/20/99620-050-E2022699/Acropolis-Athens.jpg",
    "https://www.greece-is.com/wp-content/uploads/2023/04/GettyImages-1420813274-RF.jpg",
    "https://www.turbopass.com/5899-carousel/view-of-the-acropolis-in-athens.jpg"
  ];

  const nextAthensImage = () => setAthensIndex((prevIndex) => (prevIndex + 1) % athensImages.length);
  const prevAthensImage = () => setAthensIndex((prevIndex) => (prevIndex - 1 + athensImages.length) % athensImages.length);

  const nextAcropolisImage = () => setAcropolisIndex((prevIndex) => (prevIndex + 1) % acropolisImages.length);
  const prevAcropolisImage = () => setAcropolisIndex((prevIndex) => (prevIndex - 1 + acropolisImages.length) % acropolisImages.length);

  return (
    <div className="flex flex-col min-h-screen font-source relative">
      <Navbar />
      <img src={athensBackground} alt="Background" className="fixed inset-0 w-full h-full object-cover -z-10" />

      <div className="flex-grow flex flex-col pt-32 md:pt-0 items-center mt-10">
        <div className="bg-yellow-50 bg-opacity-60 backdrop-blur-sm shadow-md mt-32 px-4 md:px-8 py-4 text-2xl md:text-4xl font-semibold text-blue-500 w-[90%] md:w-[75%] rounded-t-md">
          <h1 className="text-center">Athens</h1>
        </div>

        <div className="bg-yellow-50 bg-opacity-70 shadow-lg mt-4 w-[90%] md:w-[75%] p-4 md:p-6 rounded-b flex flex-col gap-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-400 mb-4">Explore the Historic City of Athens and Acropolis</h2>
          <p className="text-blue-500 text-sm md:text-lg text-center mb-6">
            Experience the ancient history, iconic landmarks, and vibrant neighborhoods of Athens and its Acropolis.
          </p>

          <div className="bg-[#ddc8ab] bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#222222]">Athens</h3>
            <p className="text-[#222222] text-sm md:text-lg mb-4 text-center">
              Athens is the cradle of Western civilization, known for its rich history, ancient ruins, and vibrant atmosphere.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={athensImages[athensIndex]} alt="Athens scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevAthensImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextAthensImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg -[#ddc8ab] bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md mt-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#222222]">Acropolis</h3>
            <p className="text-[#222222] text-sm md:text-lg mb-4 text-center">
              Acropolis is an ancient citadel that hosts some of the most significant structures of Ancient Greece.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={acropolisImages[acropolisIndex]} alt="Acropolis scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevAcropolisImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextAcropolisImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-[#ddc8ab] bg-opacity-60 backdrop-blur-sm shadow-md w-full p-4 md:p-6 rounded-md mt-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4 text-center">Trip Highlights & Information</h3>
            
            <p className="text-[#222222] text-sm md:text-lg mb-6">
              Discover the charm of Athens, with its deep historical roots, archaeological wonders, and lively city center.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-[#222222] mb-2">Highlights of Athens</h4>
                <ul className="list-disc list-inside text-[#222222] text-sm md:text-lg">
                  <li>The Parthenon - the iconic temple of the goddess Athena.</li>
                  <li>The Acropolis Museum - showcasing ancient Greek art and relics.</li>
                  <li>The Temple of Olympian Zeus - one of the largest temples of antiquity.</li>
                  <li>The Ancient Agora - a historical meeting place for philosophers and citizens.</li>
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-[#222222] mb-2">Highlights of Acropolis</h4>
                <ul className="list-disc list-inside text-[#222222] text-sm md:text-lg">
                  <li>Parthenon - the most significant symbol of Ancient Greek civilization.</li>
                  <li>Temple of Athena Nike - a small temple celebrating victory.</li>
                  <li>The Erechtheion - a unique temple dedicated to Athena and Poseidon.</li>
                  <li>The Odeon of Herodes Atticus - a grand amphitheater still used for performances.</li>
                </ul>
              </div>
            </div>

            <p className="text-[#222222] text-sm md:text-lg mt-6">
              Immerse yourself in Athens ancient heritage and vibrant modern culture on your unforgettable journey.
            </p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <h3 className="text-2xl font-semibold text-[#222222]">Trip Duration</h3>
              <p className="text-[#222222] text-lg mt-2">4 Days, 3 Nights</p>
            </div>
            <button className="text-white text-lg font-semibold bg-blue-800 px-6 py-2 rounded-md hover:bg-blue-700"  onClick={() => navigate('/enquire')}>
              Enquire Now!
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Athens;