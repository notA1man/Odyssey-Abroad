import React, { useState } from 'react';
import torontoBackground from '../assets/Torontobg.jpg'; 
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import { useNavigate } from 'react-router-dom';

function Toronto() {
  const [torontoIndex, setTorontoIndex] = useState(0);
  const [downtownIndex, setDowntownIndex] = useState(0);
  const navigate = useNavigate();

  const torontoImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfLLQH1YBicx83MWqne9Rgg4HuoqYFudzUA&s",
    "https://www.torontosom.ca/wp-content/uploads/2023/06/Five-Reasons-Why-Toronto-Is-the-Perfect-Destination-for-International-Students.png",
    "https://tnphotos.s3.ca-central-1.amazonaws.com/uploads/2024/01/Is-Toronto-flat-or-hilly.jpg"
  ];

  const downtownImages = [
    "https://static.wixstatic.com/media/2623e4_577dc7bc6e6645818ca5dce4923b0f48~mv2.jpg/v1/fill/w_574,h_700,al_c,q_85,enc_auto/2623e4_577dc7bc6e6645818ca5dce4923b0f48~mv2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcejV_c_4ZbK8CjlvS01rk8K4JQk8bB3uQ3w&s",
    "https://pix10.agoda.net/hotelImages/2287733/0/7d0e1256e5bfc342825adbc6a151d030.jpeg?ce=0&s=702x392"
  ];

  const nextTorontoImage = () => setTorontoIndex((prevIndex) => (prevIndex + 1) % torontoImages.length);
  const prevTorontoImage = () => setTorontoIndex((prevIndex) => (prevIndex - 1 + torontoImages.length) % torontoImages.length);

  const nextDowntownImage = () => setDowntownIndex((prevIndex) => (prevIndex + 1) % downtownImages.length);
  const prevDowntownImage = () => setDowntownIndex((prevIndex) => (prevIndex - 1 + downtownImages.length) % downtownImages.length);

  return (
    <div className="flex flex-col min-h-screen font-source relative">
      <Navbar />
      <img src={torontoBackground} alt="Background" className="fixed inset-0 w-full h-full object-cover -z-10" />

      <div className="flex-grow flex flex-col pt-32 md:pt-0 items-center mt-10">
        <div className="bg-yellow-50 bg-opacity-60 backdrop-blur-sm shadow-md mt-32 px-4 md:px-8 py-4 text-2xl md:text-4xl font-semibold text-blue-500 w-[90%] md:w-[75%] rounded-t-md">
          <h1 className="text-center">Toronto</h1>
        </div>

        <div className="bg-yellow-50 bg-opacity-70 shadow-lg mt-4 w-[90%] md:w-[75%] p-4 md:p-6 rounded-b flex flex-col gap-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-400 mb-4">Explore the Vibrant City of Toronto and Downtown</h2>
          <p className="text-blue-500 text-sm md:text-lg text-center mb-6">
            Discover the modern skyline, cultural hotspots, and unique neighborhoods of Toronto and its downtown area.
          </p>

          <div className="bg-[#222222] bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Toronto</h3>
            <p className="text-white text-sm md:text-lg mb-4 text-center">
              Toronto is known for its diverse culture, iconic landmarks, and bustling city life.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={torontoImages[torontoIndex]} alt="Toronto scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevTorontoImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextTorontoImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-[#222222] bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md mt-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#222222]">Downtown</h3>
            <p className="text-white text-sm md:text-lg mb-4 text-center">
              Downtown Toronto offers vibrant neighborhoods, great shopping, and amazing food spots.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
              <img src={downtownImages[downtownIndex]} alt="Downtown scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
              <button
                onClick={prevDowntownImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &lt;
              </button>
              <button
                onClick={nextDowntownImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="bg-[#222222] bg-opacity-60 backdrop-blur-sm shadow-md w-full p-4 md:p-6 rounded-md mt-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">Trip Highlights & Information</h3>
            
            <p className="text-white text-sm md:text-lg mb-6">
              Experience the energetic vibe, diverse culture, and iconic attractions of Toronto on this unforgettable trip.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Highlights of Toronto</h4>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-lg">
                  <li>CN Tower - one of the tallest towers in the world with breathtaking views.</li>
                  <li>Royal Ontario Museum - a leading museum of art, culture, and nature.</li>
                  <li>Toronto Islands - a serene escape with scenic views of the city skyline.</li>
                  <li>Distillery District - a pedestrian-only village filled with history and art.</li>
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">Highlights of Downtown</h4>
                <ul className="list-disc list-inside text-gray-200 text-sm md:text-lg">
                  <li>Kensington Market - a bohemian neighborhood known for eclectic shops and food.</li>
                  <li>Eaton Centre - a shopping paradise in the heart of Toronto.</li>
                  <li>Queen Street West - one of the trendiest streets with boutiques and restaurants.</li>
                  <li>St. Lawrence Market - a historical market offering fresh food and artisanal products.</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-200 text-sm md:text-lg mt-6">
              Embark on a trip that blends modern city life, cultural heritage, and scenic beauty in Toronto and its downtown.
            </p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Trip Duration</h3>
              <p className="text-gray-300 text-lg mt-2">4 Days, 3 Nights</p>
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

export default Toronto;
