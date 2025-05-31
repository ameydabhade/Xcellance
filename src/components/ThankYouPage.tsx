import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ThankYouPage() {
  const router = useRouter();
  
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
                  We&apos;ll review your appointment request within 2 hours
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
                  You&apos;ll receive an email with appointment details
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/')}
              className="inline-flex justify-center items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              ← Back to Home
            </button>
            <button
              onClick={() => router.push('/services')}
              className="inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Our Services →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 