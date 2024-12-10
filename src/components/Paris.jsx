import React, { useState } from 'react';
import parisBackground from '../assets/ParisBG.jpg';
;import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Paris() {
  const [parisIndex, setParisIndex] = useState(0);
  const [montmartreIndex, setMontmartreIndex] = useState(0);
  const navigate = useNavigate();

  const parisImages = [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/342113/pexels-photo-342113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/19395776/pexels-photo-19395776/free-photo-of-french-flag-on-the-roof-of-the-louvre-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const montmartreImages = [
    "https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5101511/pexels-photo-5101511.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://c8.alamy.com/comp/2M6PD2N/montmarte-paris-sacre-coeur-cathedral-in-montmartre-paris-france-morning-in-paris-2M6PD2N.jpg"
  ];

  const nextParisImage = () => setParisIndex((prevIndex) => (prevIndex + 1) % parisImages.length);
  const prevParisImage = () => setParisIndex((prevIndex) => (prevIndex - 1 + parisImages.length) % parisImages.length);

  const nextMontmartreImage = () => setMontmartreIndex((prevIndex) => (prevIndex + 1) % montmartreImages.length);
  const prevMontmartreImage = () => setMontmartreIndex((prevIndex) => (prevIndex - 1 + montmartreImages.length) % montmartreImages.length);

  return (
    <div className="flex flex-col min-h-screen font-source relative">
      <Navbar />
      <img src={parisBackground} alt="Background" className="fixed inset-0 w-full h-full object-cover -z-10" />

      <div className="flex-grow flex flex-col pt-32 md:pt-0 items-center mt-10">
        <div className="bg-blue-800 bg-opacity-60 backdrop-blur-sm shadow-md mt-32 px-4 md:px-8 py-4 text-2xl md:text-4xl font-semibold text-white w-[90%] md:w-[75%] rounded-t-md">
          <h1 className="text-center">Paris</h1>
        </div>

        <div className="bg-blue-900 bg-opacity-70 shadow-lg mt-4 w-[90%] md:w-[75%] p-4 md:p-6 rounded-b flex flex-col gap-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-4">Discover the Magic of Paris and Montmartre</h2>
          <p className="text-gray-200 text-sm md:text-lg text-center mb-6">
            Explore the iconic landmarks, romantic streets, and artistic heritage of Paris and Montmartre.
          </p>

          <div className="bg-blue-200 bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#222222]">Paris</h3>
            <p className="text-[#222222]text-sm md:text-lg mb-4 text-center">
              Paris is known for its world-famous monuments, museums, and culture.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={parisImages[parisIndex]} alt="Paris scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevParisImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextParisImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-blue-200 bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md mt-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#222222]">Montmartre</h3>
            <p className="text-[#222222] tex-sm md:text-lg mb-4 text-center">
              Montmartre is the bohemian, artistic heart of Paris, filled with history and charm.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={montmartreImages[montmartreIndex]} alt="Montmartre scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevMontmartreImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextMontmartreImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-red-800 bg-opacity-60 backdrop-blur-sm shadow-md w-full p-4 md:p-6 rounded-md mt-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">Trip Highlights & Information</h3>
            
            <p className="text-gray-200 text-sm md:text-lg mb-6">
              Experience the romance, history, and culture of Paris and Montmartre on this unforgettable journey.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Highlights of Paris</h4>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-lg">
                  <li>Eiffel Tower - the iconic symbol of France.</li>
                  <li>Louvre Museum - home to the famous Mona Lisa and countless masterpieces.</li>
                  <li>Notre-Dame Cathedral - a Gothic masterpiece with centuries of history.</li>
                  <li>Seine River Cruise - a romantic way to see the city’s landmarks.</li>
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Highlights of Montmartre</h4>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-lg">
                  <li>Sacré-Cœur Basilica - a breathtaking church atop Montmartre Hill.</li>
                  <li>Moulin Rouge - the world-famous cabaret venue.</li>
                  <li>Artist Square - a vibrant place where artists showcase their work.</li>
                  <li>Bohemian Cafés - explore charming cafés that were once frequented by great artists.</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-200 text-sm md:text-lg mt-6">
              Uncover the romance and history of Paris and Montmartre on this unforgettable adventure.
            </p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Trip Duration</h3>
              <p className="text-gray-300 text-lg mt-2">5 Days, 4 Nights</p>
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

export default Paris;