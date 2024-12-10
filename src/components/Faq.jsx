import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Faq() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-24 min-h-screen p-4 md:p-8 bg-ivory text-charcoal relative">

        <div className="fixed inset-0 w-full h-full -z-10">
          <img src="/src/assets/FaqBG.jpg" alt="Background" className="object-cover w-full h-full backdrop-blur" />
        </div>

        <section className="w-full md:w-3/4 lg:w-2/3 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-soft-brown">User Reviews</h2>

          <div className="flex flex-col gap-6 bg-black bg-opacity-5">
            <div className="bg-light-beige p-4 md:p-6 rounded-lg shadow-md">
              <img src="https://www.greatandhra.com/newphotos7/balayya_new11585590101.jpg" alt="User 1" className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4"/>
              <p className="text-center font-semibold">Nigesh</p>
              <p className="text-center text-sm md:text-base text-gray-700">"Amazing experience! Highly recommend for all travel enthusiasts."</p>
            </div>

            <div className="bg-light-beige p-4 md:p-6 rounded-lg shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2QyBFtQL7el1jlqGso9JVsQqCHXGDmUqCA&s" alt="User 2" className="w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4"/>
              <p className="text-center font-semibold">The Goat</p>
              <p className="text-center text-sm md:text-base text-gray-700">"A memorable journey. Great value for money."</p>
            </div>
          </div>
        </section>

        <section className="w-full md:w-3/4 lg:w-2/3 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-soft-brown">Frequently Asked Questions</h2>

          <div className="space-y-4 bg-black bg-opacity-5">
            <div className="bg-light-beige p-3 md:p-4 rounded-lg shadow-md">
              <p className="font-semibold">What is Odyssey Abroad?</p>
              <p className="text-sm md:text-base text-gray-700 mt-2">Odyssey Abroad is a travel agency offering curated international travel packages, focusing on immersive cultural experiences.</p>
            </div>

            <div className="bg-light-beige p-3 md:p-4 rounded-lg shadow-md">
              <p className="font-semibold">How do I book a trip?</p>
              <p className="text-sm md:text-base text-gray-700 mt-2">You can book a trip directly by filling the enquiry form! Our support team will get in touch with you in no time!</p>
            </div>

            <div className="bg-light-beige p-3 md:p-4 rounded-lg shadow-md">
              <p className="font-semibold">Are there any discounts available?</p>
              <p className="text-sm md:text-base text-gray-700 mt-2">Unfortunately no.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
