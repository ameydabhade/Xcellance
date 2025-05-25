'use client';

import { useState, useEffect } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for booking your appointment! We will contact you shortly to confirm.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600">Book Your Appointment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        
        <div className="bg-blue-50 p-3 md:p-4 rounded-lg mb-4 border-l-4 border-blue-200">
          <p className="text-sm md:text-base text-blue-600 text-center">
            <strong>Includes:</strong> Free Consultation & Digital scan
            <span className="text-orange-300 font-bold"> Worth ₹1,000</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-blue-600 text-white p-3 md:p-4 rounded-lg mb-4 text-center">
          <p className="text-sm md:text-base mb-1">⏰ This offer expires in:</p>
          <div className="text-2xl md:text-3xl font-bold">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
          <p className="text-xs md:text-sm mt-1">Book within the next 20 minutes for guaranteed Free Consultation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Describe Your Dental Concern</label>
            <textarea required rows={2} placeholder="Briefly describe your dental issue" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date</label>
            <input type="date" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Time</label>
            <select required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg">
              <option value="">Select Time Slot</option>
              <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
              <option value="evening">Evening (5:00 PM - 9:00 PM)</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 md:py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}