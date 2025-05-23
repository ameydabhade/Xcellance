export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <span className="text-gray-500 text-xs">Logo</span>
        </div>
      </div>

      <div className="space-y-6 text-center">
        <div>
          <h3 className="font-bold text-blue-600 mb-2">Contact Us</h3>
          <a href="tel:+919175682823" className="block text-blue-600 font-bold">+91 9175682823</a>
          <p className="text-blue-600">drrudagi@gmail.com</p>
          <p className="text-blue-600">www.drrudagi.com</p>
        </div>

        <div>
          <h3 className="font-bold text-blue-600 mb-2">Open Hours</h3>
          <p className="text-blue-600">Mon-Sat: 10 AM – 9 PM</p>
        </div>

        <div>
          <h3 className="font-bold text-blue-600 mb-2">Location</h3>
          <p className="text-blue-600 font-bold">
            📍 Shop 43, First Floor, Kohinoor Grandeur, Mukai Chowk, Ravet, Pimpri 412101
          </p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="mt-6 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
        <span className="text-gray-500">Google Maps Embed</span>
      </div>
    </footer>
  );
} 