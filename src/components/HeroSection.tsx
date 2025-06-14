import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Missing Teeth? Get Back Your<br />
        <span className="text-blue-600">Confident Smile!</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg">
          <Image 
            src="/images/hero.png" 
            alt="Dental Implant Showcase" 
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Dental Implants starting 
            <span className="text-yellow-300 block text-3xl md:text-4xl lg:text-5xl">@₹25,000</span>
            <h3 className="text-lg md:text-xl">Easy emi options available from 3 months</h3>
          </h2>
          <button 
            onClick={onBookAppointment}
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:bg-yellow-300 transition-colors pulse-element w-full md:w-auto"
          >
            🎉 Get Offer Now
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors md:min-w-[240px]">
          📞 Book FREE Consultation
        </button>
        <a 
          href="tel:+919175682823" 
          className="bg-blue-800 text-white py-4 px-8 rounded-lg font-bold text-lg text-center hover:bg-blue-900 transition-colors md:min-w-[240px]"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Why choose <span className="text-blue-600">Dr. Rudagi&apos;s Dental Centre?</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6">
          {[
            { icon: "/images/heroicons/Experience.png", title: "15+ Years Experience", desc: "Expert Endodontist" },
            { icon: "/images/heroicons/painless.png", title: "Painless Procedure", desc: "Advanced Anesthesia" },
            { icon: "/images/heroicons/premium.png", title: "Premium Implants", desc: "International Quality" },
            { icon: "/images/heroicons/team.png", title: "Specialist Team", desc: "Qualified Doctors" },
            { icon: "/images/heroicons/sterilization.png", title: "100% Sterilization", desc: "Highest Safety Standards" },
            { icon: "/images/heroicons/tech.png", title: "Advanced Technology", desc: "iTero Scanner & More" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow md:p-6">
              <Image src={usp.icon} alt={usp.title} width={48} height={48} className="mx-auto mb-2" />
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-8 rounded-lg md:max-w-3xl md:mx-auto">
        <h3 className="font-bold text-blue-600 mb-3 md:text-xl">Why Choose Us?</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">15+ years experience with Diplomate of Indian Board of Endodontics</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">10% discount on Full treatment payment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">No-cost financing for 3 months</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">Using one of the world&apos;s best <strong>German</strong> implant system with Digital implantology</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">5000+ successful dental procedures</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span className="text-sm md:text-base">State-of-the-art clinic in Ravet, Pimpri</span>
          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full hover:bg-yellow-300 transition-colors md:max-w-md md:mx-auto md:block">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600 md:text-base">
          Complimentary Consultation & Digital scan (Worth ₹1,000)
        </small>
      </div>
    </section>
  );
}