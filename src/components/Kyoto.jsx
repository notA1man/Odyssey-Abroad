import React, { useState } from 'react';
import kyotoBackground from '../assets/KoyotoBackground.jpg';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Kyoto() {
  const [kyotoIndex, setKyotoIndex] = useState(0);
  const [tokyoIndex, setTokyoIndex] = useState(0);
  const navigate = useNavigate();

  const kyotoImages = [
    "https://images.pexels.com/photos/2342479/pexels-photo-2342479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://i.postimg.cc/1tv67pQZ/arashiyama.png",
    "https://i.postimg.cc/cHfDjkJ8/shrine2.png"
  ];

  const tokyoImages = [
    "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15104690/pexels-photo-15104690/free-photo-of-crowd-on-alley-between-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/21792360/pexels-photo-21792360/free-photo-of-view-of-the-hozomon-gate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  const nextKyotoImage = () => setKyotoIndex((prevIndex) => (prevIndex + 1) % kyotoImages.length);
  const prevKyotoImage = () => setKyotoIndex((prevIndex) => (prevIndex - 1 + kyotoImages.length) % kyotoImages.length);

  const nextTokyoImage = () => setTokyoIndex((prevIndex) => (prevIndex + 1) % tokyoImages.length);
  const prevTokyoImage = () => setTokyoIndex((prevIndex) => (prevIndex - 1 + tokyoImages.length) % tokyoImages.length);

  return (
    <div className="flex flex-col min-h-screen font-source relative">
      <Navbar />
      <img src={kyotoBackground} alt="Background" className="fixed inset-0 w-full h-full object-cover -z-10" />

      <div className="flex-grow flex flex-col pt-32 md:pt-0 items-center mt-10">
        <div className="bg-red-800 bg-opacity-60 backdrop-blur-sm shadow-md mt-32 px-4 md:px-8 py-4 text-2xl md:text-4xl font-semibold text-white w-[90%] md:w-[75%] rounded-t-md">
          <h1 className="text-center">Tokyo</h1>
        </div>

        <div className="bg-red-900 bg-opacity-70 shadow-lg mt-4 w-[90%] md:w-[75%] p-4 md:p-6 rounded-b flex flex-col gap-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-4">Discover the Beauty of Kyoto and Tokyo</h2>
          <p className="text-gray-200 text-sm md:text-lg text-center mb-6">
            Join us for an unforgettable journey to two of Japan's most iconic cities, Kyoto and Tokyo. This adventure includes visits to the stunning temples of Kyoto,
            such as Kinkaku-ji and Fushimi Inari Shrine, as well as the bustling districts of Tokyo, including Shibuya and Shinjuku.
          </p>

          <div className="bg-gray-800 bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Kyoto</h3>
            <p className="text-gray-300 text-sm md:text-lg mb-4 text-center">
              Kyoto, Japan’s historical heart, is known for its beautiful temples, gardens, and traditional wooden houses.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={kyotoImages[kyotoIndex]} alt="Kyoto scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevKyotoImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextKyotoImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md mt-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Tokyo</h3>
            <p className="text-gray-300 text-sm md:text-lg mb-4 text-center">
              Tokyo, a city that never sleeps, is the perfect blend of futuristic innovation and deep-rooted tradition.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={tokyoImages[tokyoIndex]} alt="Tokyo scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevTokyoImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextTokyoImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-red-800 bg-opacity-60 backdrop-blur-sm shadow-md w-full p-4 md:p-6 rounded-md mt-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">Trip Highlights & Information</h3>
            
            <p className="text-gray-200 text-sm md:text-lg mb-6">
              Experience the unique blend of ancient tradition and modern innovation that defines Japan. Our tour offers guided visits to Kyoto's tranquil temples
              and Tokyo’s bustling urban marvels, capturing the essence of Japan's rich culture and vibrant city life.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Highlights of Kyoto</h4>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-lg">
                  <li>Kinkaku-ji (Golden Pavilion) - a stunning Zen temple with a gold-leaf exterior.</li>
                  <li>Fushimi Inari Shrine - famous for its thousands of vibrant red torii gates.</li>
                  <li>Arashiyama Bamboo Grove - a surreal path through towering bamboo.</li>
                  <li>Gion District - known for its traditional wooden houses and geisha culture.</li>
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Highlights of Tokyo</h4>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-lg">
                  <li>Tokyo Tower - an iconic landmark with panoramic views of the city.</li>
                  <li>Shibuya Crossing - the world’s busiest pedestrian crossing.</li>
                  <li>Asakusa - home to Senso-ji, Tokyo’s oldest temple.</li>
                  <li>Odaiba - a futuristic island with unique attractions and architecture.</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-200 text-sm md:text-lg mt-6">
              Join us for a journey that offers a deeper understanding of Japan's cultural treasures, as well as its modern-day attractions.
              This trip will leave you with memories of serene landscapes, vibrant cityscapes, and the harmonious blend of old and new.
            </p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Trip Duration</h3>
              <p className="text-gray-300 text-lg mt-2">7 Days, 6 Nights</p>
            </div>
            <button className="text-white text-lg font-semibold bg-blue-800 px-6 py-2 rounded-md hover:bg-blue-700" onClick={() => navigate('/enquire')}>
              Enquire Now!
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kyoto;