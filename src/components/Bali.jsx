import React, { useState } from 'react';
import baliBackground from '../assets/BaliBackground.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Bali() {
  const [baliIndex, setBaliIndex] = useState(0);
  const [ubudIndex, setUbudIndex] = useState(0);
  const navigate = useNavigate();
  const baliImages = [
    "https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/27375291/pexels-photo-27375291/free-photo-of-buddhist-stupa-in-the-gardens-of-the-pura-bratan-temple-in-bali.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.squarespace-cdn.com/content/v1/590d47ecebbd1a0ad3636b21/1676977039730-EUBIQ6GEPZPWTMB1UG58/_47A5446.jpg?format=1500w"
  ];

  const ubudImages = [
    "https://static8.depositphotos.com/1016676/814/i/450/depositphotos_8148132-stock-photo-bali.jpg",
    "https://www.agoda.com/wp-content/uploads/2020/01/Pura-Dalem-Agung-Padangtegal-Ubud-Bali.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/62/MonumentOfTheUbudWaterPalace.jpg"
  ];

  const nextBaliImage = () => setBaliIndex((prevIndex) => (prevIndex + 1) % baliImages.length);
  const prevBaliImage = () => setBaliIndex((prevIndex) => (prevIndex - 1 + baliImages.length) % baliImages.length);

  const nextUbudImage = () => setUbudIndex((prevIndex) => (prevIndex + 1) % ubudImages.length);
  const prevUbudImage = () => setUbudIndex((prevIndex) => (prevIndex - 1 + ubudImages.length) % ubudImages.length);

  return (
    <div className="flex flex-col min-h-screen font-source relative">
      <Navbar />
      <img src={baliBackground} alt="Background" className="fixed inset-0 w-full h-full object-cover -z-10" />

      <div className="flex-grow flex flex-col pt-32 md:pt-0 items-center mt-10">
        <div className="bg-green-800 bg-opacity-60 backdrop-blur-sm shadow-md mt-32 px-4 md:px-8 py-4 text-2xl md:text-4xl font-semibold text-white w-[90%] md:w-[75%] rounded-t-md">
          <h1 className="text-center">Bali</h1>
        </div>

        <div className="bg-green-900 bg-opacity-70 shadow-lg mt-4 w-[90%] md:w-[75%] p-4 md:p-6 rounded-b flex flex-col gap-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-4">Discover the Beauty of Bali and Ubud</h2>
          <p className="text-gray-200 text-sm md:text-lg text-center mb-6">
            Explore the stunning beaches, rice terraces, and cultural heritage of Bali and Ubud.
          </p>

          <div className="bg-yellow-800 bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Bali</h3>
            <p className="text-gray-300 text-sm md:text-lg mb-4 text-center">
              Bali is famous for its beautiful beaches, vibrant culture, and breathtaking landscapes.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={baliImages[baliIndex]} alt="Bali scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevBaliImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextBaliImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-yellow-800 bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md mt-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Ubud</h3>
            <p className="text-gray-300 text-sm md:text-lg mb-4 text-center">
              Ubud is the cultural heart of Bali, known for its rice terraces and traditional arts.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={ubudImages[ubudIndex]} alt="Ubud scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevUbudImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextUbudImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-red-800 bg-opacity-60 backdrop-blur-sm shadow-md w-full p-4 md:p-6 rounded-md mt-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">Trip Highlights & Information</h3>
            
            <p className="text-gray-200 text-sm md:text-lg mb-6">
              Experience the serene landscapes, vibrant culture, and rich traditions of Bali and Ubud.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Highlights of Bali</h4>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-lg">
                  <li>Uluwatu Temple - a stunning cliffside temple overlooking the ocean.</li>
                  <li>Sacred Monkey Forest Sanctuary - a natural reserve home to hundreds of long-tailed macaques.</li>
                  <li>Besakih Temple - Bali’s largest and holiest temple complex.</li>
                  <li>Tanah Lot Temple - a famous sea temple perched on a rock formation.</li>
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Highlights of Ubud</h4>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-lg">
                  <li>Campuhan Ridge Walk - a scenic walking path through lush jungle.</li>
                  <li>Tegallalang Rice Terraces - iconic, terraced rice fields.</li>
                  <li>Ubud Palace - the cultural heart of the town with its traditional Balinese architecture.</li>
                  <li>Art Market - a vibrant market selling traditional crafts and art.</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-200 text-sm md:text-lg mt-6">
              Discover the beauty and culture of Bali and Ubud on this unforgettable adventure.
            </p>
            </div>
            <div className="flex justify-between items-center mt-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Trip Duration</h3>
              <p className="text-gray-300 text-lg mt-2">7 Days, 6 Nights</p>
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

export default Bali;