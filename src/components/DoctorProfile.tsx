interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold text-center mb-6">Meet Our Chief Endodontist</h2>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="text-center mb-6">
          <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <img src="/images/doctor.png" alt="Dr. Kavitarani Rudagi" className="w-full h-full object-cover rounded-lg" />
          </div>
          <h3 className="text-xl font-bold text-blue-600">Dr. Kavitarani Rudagi</h3>
          <p className="text-orange-500 font-medium">Founder & Chief Endodontist</p>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            Dr. Kavitarani Rudagi is the Founder & Chief Endodontist at Dr. Rudagi's Dental Centre of Xcellence, 
            with an extensive experience of 15+ years.
          </p>
          
          <p>
            She has done her BDS and further completed her training as Diplomate of Indian Board of Endodontics. 
            She has extensively trained in Advanced Root Canal techniques & Implantology.
          </p>

          <p>
            Her passion for precision dentistry and patient care has made her one of the most trusted 
            endodontists in Pune.
          </p>

          <h3 className="font-bold text-blue-600 mt-6 mb-3">Professional Achievements</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">🏅</span>
              <span>Diplomate of Indian Board of Endodontics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">🏅</span>
              <span>15+ years of specialized experience</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">🏅</span>
              <span>Expert in Painless Root Canal Treatment</span>
            </li>
          </ul>

          <h3 className="font-bold text-blue-600 mt-6 mb-3">Expertise & Innovation</h3>
          <p>
            At her practice, she concentrates on endodontics, implants, digital dentistry, 
            and is a pioneer in painless dental procedures using latest technology like iTero scanner.
          </p>
        </div>

        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full mt-6">
          BOOK APPOINTMENT WITH DR. RUDAGI
        </button>
      </div>
    </section>
  );
} 