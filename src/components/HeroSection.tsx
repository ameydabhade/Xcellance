interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 leading-tight">
        Missing Teeth? Get Back Your<br />
        <span className="text-blue-600">Confident Smile!</span>
      </h1>

      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 md:h-64 mb-6 flex items-center justify-center shadow-lg">
        <span className="text-gray-500 font-medium">Dental Implant Showcase</span>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
          📞 Book FREE Consultation
        </button>
        <a 
          href="tel:+919175682823" 
          className="bg-blue-800 text-white py-4 rounded-lg font-bold text-lg text-center hover:bg-blue-900 transition-colors"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Special Offer Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Dental Implants starting 
          <span className="text-yellow-300 block text-3xl md:text-4xl">@₹25,000</span>
          <h3>Easy emi options available from 3 months</h3>
        </h2>
        <button 
          onClick={onBookAppointment}
          className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:bg-yellow-300 transition-colors pulse-element"
        >
          🎉 Get Offer Now
        </button>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-6">
          Why choose <span className="text-blue-600">Dr. Rudagi's Dental Centre?</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            { icon: "🏆", title: "15+ Years Experience", desc: "Expert Endodontist" },
            { icon: "😌", title: "Painless Procedure", desc: "Advanced Anesthesia" },
            { icon: "🛡️", title: "Premium Implants", desc: "International Quality" },
            { icon: "👥", title: "Specialist Team", desc: "Qualified Doctors" },
            { icon: "🧼", title: "100% Sterilization", desc: "Highest Safety Standards" },
            { icon: "🔬", title: "Advanced Technology", desc: "iTero Scanner & More" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{usp.icon}</div>
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-600 mb-3">Why Choose Us?</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm">15+ years experience with Diplomate of Indian Board of Endodontics</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm">10% discount on Full treatment payment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm">No-cost financing for 3 months</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm">Using one of the world's best <strong>German</strong> implant system with Digital implantology</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm">5000+ successful dental procedures</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm">State-of-the-art clinic in Ravet, Pimpri</span>
          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full hover:bg-yellow-300 transition-colors">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600">
          Complimentary Consultation & Digital scan (Worth ₹1,000)
        </small>
      </div>
    </section>
  );
} 