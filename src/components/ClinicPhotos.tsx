interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section className="bg-blue-50 p-4">
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-24 flex items-center justify-center overflow-hidden">
            {i <= 4 ? (
              <img 
                src={`/images/clinic/${i}.png`} 
                alt={`Clinic Photo ${i}`} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <span className="text-gray-500 text-sm">Clinic Photo {i}</span>
            )}
          </div>
        ))}
      </div>
      <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full">
        BOOK APPOINTMENT
      </button>
    </section>
  );
} 