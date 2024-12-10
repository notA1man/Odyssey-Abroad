import React, { useState } from 'react';
import sydneyBackground from '../assets/SydneyBackground.jpg';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Sydney() {
    const [sydneyIndex, setSydneyIndex] = useState(0);
    const [blueMountainsIndex, setBlueMountainsIndex] = useState(0);
    const navigate = useNavigate();

    const sydneyImages = [
    "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2434267/pexels-photo-2434267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/783683/pexels-photo-783683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    const blueMountainsImages = [
    "https://lh5.googleusercontent.com/p/AF1QipOs9I1QMHy1xaqBTnPojKv_4Hf8C_lB4HdiA2oo=w675-h390-n-k-no",
    "https://images.pexels.com/photos/13346045/pexels-photo-13346045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7150976/pexels-photo-7150976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    const nextSydneyImage = () => setSydneyIndex((prevIndex) => (prevIndex + 1) % sydneyImages.length);
    const prevSydneyImage = () => setSydneyIndex((prevIndex) => (prevIndex - 1 + sydneyImages.length) % sydneyImages.length);

    const nextBlueMountainsImage = () => setBlueMountainsIndex((prevIndex) => (prevIndex + 1) % blueMountainsImages.length);
    const prevBlueMountainsImage = () => setBlueMountainsIndex((prevIndex) => (prevIndex - 1 + blueMountainsImages.length) % blueMountainsImages.length);

    return (
    <div className="flex flex-col min-h-screen font-source relative">
        <Navbar />
        <img src={sydneyBackground} alt="Background" className="fixed inset-0 w-full h-full object-cover -z-10" />

        <div className="flex-grow flex flex-col pt-32 md:pt-0 items-center mt-10">
        <div className="bg-white bg-opacity-60 backdrop-blur-sm shadow-md mt-32 px-4 md:px-8 py-4 text-2xl md:text-4xl font-semibold text-black w-[90%] md:w-[75%] rounded-t-md">
            <h1 className="text-center">Sydney</h1>
        </div>

        <div className="bg-gray-200 bg-opacity-70 shadow-lg mt-4 w-[90%] md:w-[75%] p-4 md:p-6 rounded-b flex flex-col gap-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-black mb-4">Discover the Wonders of Sydney and the Blue Mountains</h2>
            <p className="text-gray-800 text-sm md:text-lg text-center mb-6">
            Explore the iconic Sydney Opera House, Harbour Bridge, and the scenic beauty of the Blue Mountains with our guided tours.
            </p>

            <div className="bg-gray-300 bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black">Sydney</h3>
            <p className="text-gray-800 text-sm md:text-lg mb-4 text-center">
                Sydney offers a perfect blend of natural beauty, iconic landmarks, and vibrant culture, making it a must-visit destination.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
                <img src={sydneyImages[sydneyIndex]} alt="Sydney scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
                <button
                onClick={prevSydneyImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
                >
                &lt;
                </button>
                <button
                onClick={nextSydneyImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
                >
                &gt;
                </button>
              </div>
            </div>

            <div className="bg-gray-300 bg-opacity-80 p-4 rounded-md flex flex-col items-center shadow-md mt-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black">Blue Mountains</h3>
            <p className="text-gray-800 text-sm md:text-lg mb-4 text-center">
                The Blue Mountains offer breathtaking landscapes, scenic hikes, and charming towns nestled in the heart of nature.
            </p>

            <div className="relative w-full md:w-[80%] flex justify-center pb-5">
                <img src={blueMountainsImages[blueMountainsIndex]} alt="Blue Mountains scenery" className="w-full h-60 md:h-96 object-cover rounded-md shadow-lg" />
                <button
                onClick={prevBlueMountainsImage}
                className="absolute top-[85%] left-[2%] md:left-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
                >
                &lt;
                </button>
                <button
                onClick={nextBlueMountainsImage}
                className="absolute top-[85%] right-[3%] md:right-[8%] transform -translate-y-1/2 scale-[70%] md:scale-110 text-white text-2xl bg-black bg-opacity-60 py-2 px-4 rounded-full hover:bg-opacity-80"
                >
                &gt;
                </button>
            </div>
          </div>

            <div className="bg-white bg-opacity-60 backdrop-blur-sm shadow-md w-full p-4 md:p-6 rounded-md mt-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 text-center">Trip Highlights & Information</h3>

            <p className="text-gray-800 text-sm md:text-lg mb-6">
                Join us for an unforgettable experience exploring Sydney’s world-renowned landmarks and the natural beauty of the Blue Mountains.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-black mb-2">Highlights of Sydney</h4>
                <ul className="list-disc list-inside text-gray-800 text-sm md:text-lg">
                     <li>Sydney Opera House - an architectural masterpiece.</li>
                    <li>Sydney Harbour Bridge - climb or walk for stunning views.</li>
                    <li>The Rocks - historic area with galleries and shops.</li>
                    <li>Bondi Beach - famous surfing destination.</li>
                </ul>
                </div>

                <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-black mb-2">Highlights of the Blue Mountains</h4>
                <ul className="list-disc list-inside text-gray-800 text-sm md:text-lg">
                    <li>Three Sisters - iconic rock formation.</li>
                    <li>Echo Point - breathtaking panoramic views.</li>
                    <li>Leura Village - charming town with quaint shops.</li>
                    <li>Scenic World - cable car and walking tracks in nature.</li>
                </ul>
                </div>
            </div>

            <p className="text-gray-800 text-sm md:text-lg mt-6">
                Experience the best of both worlds – iconic city landmarks and natural wonders, all in one unforgettable trip.
            </p>
            </div>

            <div className="flex justify-between items-center mt-6 px-4">
            <div className="text-left text-black">
                <h4 className="text-lg font-semibold">Trip Duration</h4>
                <p className="text-sm">5 Days, 4 Nights</p>
            </div>
            <div className="text-right">
                <button
                onClick={() => navigate('/enquire')}
                className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-800">
                Enquire Now
                </button>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    );
}

export default Sydney;