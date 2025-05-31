import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Thank You for Choosing Us!
          </h1>
          <p className="text-blue-100 text-lg">
            Your appointment request has been received
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-100">
              <Image
                src="/doc.png"
                alt="Dr. Kavitarani Rudagi"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
                Dr. Kavitarani Rudagi
              </h2>
              <p className="text-orange-500 font-medium mb-4">
                Founder & Chief Endodontist
              </p>
              <p className="text-gray-600 max-w-lg">
                Our team will review your appointment request and contact you shortly to confirm the details. 
                Meanwhile, feel free to explore more about our services or reach out if you have any questions.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              What happens next?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-blue-600 text-xl font-bold mb-2">1</div>
                <p className="text-sm text-gray-600">
                  We'll review your appointment request within 2 hours
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-blue-600 text-xl font-bold mb-2">2</div>
                <p className="text-sm text-gray-600">
                  Our team will call you to confirm the appointment
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-blue-600 text-xl font-bold mb-2">3</div>
                <p className="text-sm text-gray-600">
                  You'll receive an email with appointment details
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919876543210"
              className="inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20just%20submitted%20an%20appointment%20request.%20I%20would%20like%20to%20know%20more%20about%20the%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 