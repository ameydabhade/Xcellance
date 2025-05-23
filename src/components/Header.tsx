interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <span className="text-gray-500 text-xs">Logo</span>
        </div>
        <p className="text-sm text-blue-600 mb-4">
          📍 Shop 43, First Floor, Kohinoor Grandeur, Mukai Chowk, Ravet, Pimpri 412101
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+919175682823" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-bold">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
} 