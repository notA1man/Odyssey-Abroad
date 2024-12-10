import React, { useState } from 'react';
import FormBackground from "../assets/FormBackground.jpg";
import { useNavigate } from 'react-router-dom';
function Form() {
  const navigate = useNavigate();
  return (
    <>
    <img src={FormBackground} className="fixed inset-0 w-full h-full object-cover -z-10"/>
    <div className="bg-[#222222] bg-opacity-80 text-white p-8 rounded-md shadow-lg w-full max-w-lg mx-auto scale-[90%]">
      <h2 className="text-2xl font-semibold text-center mb-6">Enquire About Your Trip</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-lg">Full Name</label>
          <input type="text" name="name" required className="w-full p-3 mt-2 text-gray-800 rounded-md" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="block text-lg">Email Address</label>
          <input type="email" name="email" required className="w-full p-3 mt-2 text-gray-800 rounded-md" placeholder="Enter your email" />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-lg">Phone Number</label>
            <input type="tel" name="phone" required className="w-full p-3 mt-2 text-gray-800 rounded-md" placeholder="Enter your phone number" />
          </div>
          <div className="flex-1">
            <label className="block text-lg">Number of People</label>
            <input type="number" name="numberOfPeople" min="1" required className="w-full p-3 mt-2 text-gray-800 rounded-md" placeholder="Enter number of people" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-lg">Preferred Destination</label>
            <select name="destination" required className="w-full p-3 mt-2 text-gray-800 rounded-md">
              <option value="">Select a destination</option>
              <option value="Japan">Japan</option>
              <option value="France">France</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Greece">Greece</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-lg">Preferred Travel Date</label>
            <input type="date" name="travelDate" required className="w-full p-3 mt-2 text-gray-800 rounded-md" />
          </div>
        </div>

        <div>
          <label className="block text-lg">Message</label>
          <textarea name="message" className="w-full p-3 mt-2 text-gray-800 rounded-md" placeholder="Any special requests or additional information"></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300" onClick={()=>navigate('/')}>Submit Enquiry</button>
        </div>
      </form>
    </div>
    </>

  );
}

export default Form;
