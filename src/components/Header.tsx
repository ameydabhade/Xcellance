'use client';

import Image from 'next/image';

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 md:py-6">
      <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <div className="relative w-48 h-12 mx-auto mb-4 md:mb-0 md:mx-0">
            <Image 
              src="/images/logo.png" 
              alt="Dr. Rudagi's Dental Centre of Excellence Logo" 
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-blue-600 mb-4 md:mb-0">
            📍 Shop 43, First Floor, Kohinoor Grandeur, Mukai Chowk, Ravet, Pimpri 412101
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+919175682823" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
}